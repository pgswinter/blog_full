const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const userDataSchema = new Schema(
    {
        idUser: Number,
        name: Number,        
        isAuthor: Boolean,
        isReader: Boolean,
        isManager: Boolean,
        isAdmin: Boolean,
        avatar: String,
        email: String,
        gender: String,
        favourite: String,
        phoneNumber: String,
        career: String,
        createDate: Date,
        updateDate: Date,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("UserData", userDataSchema);