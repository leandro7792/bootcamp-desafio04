import React from "react";
import Comment from "./Comment";

const Post = ({ comments, author, date, content }) => {
  return (
    <section className="post">
      <div className="post-user">
        <img src={author.avatar} className="avatar" />
        <h4>{author.name}</h4>
        <span>{date}</span>
      </div>

      <p>{content}</p>

      <div className="linha">{/*linha*/}</div>

      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  );
};

export default Post;
