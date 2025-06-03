import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const latestComment = post.comments?.[post.comments.length - 1];

  return (
    <Link
      to={`/post/${post._id}`}
      className="block p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-200 bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-2">{post.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{post.content.substring(0, 100)}...</p>
      {latestComment && (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          💬 {latestComment.author}: “{latestComment.text}”
        </p>
      )}
    </Link>
  );
};

export default PostCard;
