const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth"); // Import the auth middleware

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get a single blog post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(404).json({ message: "Post not found" });
  }
});

// Create a new blog post (protected)
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: "Failed to create post" });
  }
});

// Like a post (once per user)
router.post("/:id/like", async (req, res) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Login required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const user = await User.findById(userId);

    const post = await Post.findById(req.params.id);

    if (post.likedBy?.includes(user.username)) {
      return res.status(400).json({ message: "You already liked this post" });
    }

    post.likes += 1;
    post.likedBy = [...(post.likedBy || []), user.username];
    await post.save();

    res.json({ likes: post.likes });
  } catch (err) {
    res.status(400).json({ message: "Invalid token or user" });
  }
});

// Add a comment
router.post("/:id/comments", async (req, res) => {
  const { text, author } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ text, author });
    await post.save();
    res.status(201).json(post.comments);
  } catch (err) {
    res.status(400).json({ message: "Failed to add comment" });
  }
});

module.exports = router;
