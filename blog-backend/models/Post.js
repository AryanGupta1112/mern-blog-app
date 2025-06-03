const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: String, // store username (or could be user ID if preferred)
    }
  ],
  comments: [
    {
      text: String,
      author: String,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
