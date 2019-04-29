const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

import { 
    getArticle,
    postArticle,
    updateArticle,
    deleteArticle 
} from './servers/article';

const API_PORT = 3001;
const app = express();
app.use(cors());

// this is our MongoDB database
const dbRoute = "mongodb://admin:admin2123@ds147446.mlab.com:47446/test-full-js";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

const router = express.Router();
// this is our get method
// this method fetches all available ArticleDb in our ArticleDbbase
router.get("/getArticleDb", (req, res) => {
    ArticleDb.find((err, ArticleDb) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, ArticleDb: ArticleDb });
    });
});
  
// this is our update method
// this method overwrites existing ArticleDb in our ArticleDbbase
router.post("/updateArticleDb", (req, res) => {
    const { id, update } = req.body;
    ArticleDb.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
// this is our delete method
// this method removes existing ArticleDb in our ArticleDbbase
router.delete("/deleteArticleDb", (req, res) => {
    const { id } = req.body;
    ArticleDb.findOneAndDelete(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new ArticleDb in our ArticleDbbase
router.post("/putArticleDb", (req, res) => {
    let ArticleDb = new ArticleDb();
  
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    ArticleDb.message = message;
    ArticleDb.id = id;
    ArticleDb.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));