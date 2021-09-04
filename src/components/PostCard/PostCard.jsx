import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const { cover, title, body } = post;
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
