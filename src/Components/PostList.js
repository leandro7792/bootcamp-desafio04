import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = { posts: [] };

  componentDidMount() {
    fetch("dados.json")
      .then(data => data.json())
      .then(json => {
        this.setState(json);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div id="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
