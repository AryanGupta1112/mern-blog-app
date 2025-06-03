import React, { useEffect, useState } from "react";
import { api } from "../api";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-yellow-500">📚 Latest Blog Posts</h1>
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Be the first to write one!</p>
        ) : (
          posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
