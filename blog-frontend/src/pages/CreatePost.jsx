import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Both fields are required.");
    try {
      await api.post("/posts", { title, content });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Content"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
