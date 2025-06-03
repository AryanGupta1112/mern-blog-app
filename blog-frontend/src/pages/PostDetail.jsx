import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleLike = async () => {
    try {
      const res = await api.post(`/posts/${id}/like`);
      setPost(prev => ({ ...prev, likes: res.data.likes }));
    } catch (err) {
      alert(err.response?.data?.message || "Error liking post");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      const res = await api.post(`/posts/${id}/comments`, {
        text: commentText,
        author: user?.username || "Anonymous"
      });
      setPost(prev => ({ ...prev, comments: res.data }));
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <div className="p-4 dark:text-white">Loading...</div>;

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{post.content}</p>

      <div className="mt-6">
        <button
          onClick={handleLike}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          👍 Like ({post.likes || 0})
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <ul className="space-y-2">
          {post.comments?.map((c, idx) => (
            <li
              key={idx}
              className="border p-2 rounded bg-gray-100 dark:bg-gray-800"
            >
              <strong>{c.author}:</strong> {c.text}
            </li>
          ))}
        </ul>
      </div>

      {user && (
        <form onSubmit={handleCommentSubmit} className="mt-4 space-y-2">
          <textarea
            className="border w-full p-2 dark:bg-gray-800 dark:text-white rounded"
            rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Add Comment
          </button>
        </form>
      )}
    </div>
  );
};

export default PostDetail;
