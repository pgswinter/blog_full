import { ArticleDb } from '../schemas/categoryDb';
const express = require('express');

const router = express.Router();
// this is our get method
// this method fetches all available ArticleDb in our ArticleDbbase
export const getArticle = router.get("/getArticleDb", (req, res) => {
    ArticleDb.find((err, ArticleDb) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, ArticleDb: ArticleDb });
    });
});
  
// this is our update method
// this method overwrites existing ArticleDb in our ArticleDbbase
export const updateArticle = router.post("/updateArticleDb", (req, res) => {
    const { id, update } = req.body;
    ArticleDb.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
// this is our delete method
// this method removes existing ArticleDb in our ArticleDbbase
export const deleteArticle = router.delete("/deleteArticleDb", (req, res) => {
    const { id } = req.body;
    ArticleDb.findOneAndDelete(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new ArticleDb in our ArticleDbbase
export const postArticle = router.post("/putArticleDb", (req, res) => {
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