import React from "react";
import PostCard from "../PostCard";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
