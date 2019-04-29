const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const subCategoryDataSchema = new Schema(
    {
        idSubCategory: Number,
        idCategory: Number,        
        nameSubCategory: String,
        createDate: Date,
        updateDate: Date,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("SubCategoryData", subCategoryDataSchema);