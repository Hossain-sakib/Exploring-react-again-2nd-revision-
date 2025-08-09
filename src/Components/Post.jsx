import React from "react";

export default function Post({ post }) {
  const { title, id, userId, body } = post;
  return (
    <div className="post">
      <h5>{title}</h5>
      <p>
        <small>User ID: {userId}</small>
      </p>
      <p>
        <small>Post ID{id}</small>
      </p>
      <p>{body}</p>
    </div>
  );
}
