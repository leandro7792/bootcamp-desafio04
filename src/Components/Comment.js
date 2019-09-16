import React from "react";

const Comment = ({ author, content }) => {
  return (
    <section className="comment">
      <img src={author.avatar} className="avatar" />

      <div className="comment-content">
        <strong>{author.name}: </strong>
        {content}
      </div>
    </section>
  );
};

export default Comment;
