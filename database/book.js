const mongoose = require("mongoose");

//create book schema
const BookSchema =  mongoose.Schema(
  {
      ISBN: String,
      title: String,
      pubDate: String,
      language: String,
      numPage: Number,
      author:[Number],//we can also put author names we are making it as a number
      publications:[Number],
      category:[String]
  }
);

const BookModel = mongoose.model("books",BookSchema);

module.exports = BookModel;
