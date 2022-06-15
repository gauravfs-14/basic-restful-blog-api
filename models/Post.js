const mongoose = require("mongoose");

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
