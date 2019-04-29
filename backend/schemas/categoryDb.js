const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const categoryDataSchema = new Schema(
    {
        idCategory: Number,
        idSubCategory: Number,
        nameCategory: String,
        createDate: Date,
        updateDate: Date,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("CategoryDb", categoryDataSchema);