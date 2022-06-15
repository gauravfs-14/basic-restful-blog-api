const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   metaDescription: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   published: {
//     type: Boolean,
//     default: false,
//   },
// });

const PostSchema = new mongoose.Schema({
  title: String,
  metaDescription: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
  author: String,
  published: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Post", PostSchema);
