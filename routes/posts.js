const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//Create Action
router.post("/", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    metaDescription: req.body.metaDescription,
    content: req.body.content,
    author: req.body.author,
    published: req.body.published,
  });
  try {
    const pst = await newPost.save();
    res.send(pst);
  } catch (error) {
    console.log(error);
  }
});

//Read All Action
router.get("/", async (req, res) => {
  const post = await Post.find();
  res.json(post);
});

//Read One Action
router.get("/:postID", async (req, res) => {
  const post = await Post.findById(req.params.postID);
  res.json(post);
});

//Update Action
router.patch("/:postID", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    post.title = req.body.title;
    post.metaDescription = req.body.metaDescription;
    post.content = req.body.content;
    post.author = req.body.author;
    post.published = req.body.published;
    const pst = await post.save();
    res.send(pst);
  } catch (error) {
    console.log(error);
  }
});

//Delete Action
router.delete("/:postID", async (req, res) => {
  const post = await Post.findById(req.params.postID);
  await post.remove();
  res.send("Removed");
});

module.exports = router;
