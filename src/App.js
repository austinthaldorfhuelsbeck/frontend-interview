import React, { useState, useEffect } from "react";
import PostBody from "./PostBody";

export default function App() {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setPosts)
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postList = posts.map((post, index) => (
    <li key={index}>
      <h1>{post.title}</h1>
      <PostBody post={post} />
    </li>
  ));

  if (posts) {
    return <ul>{postList}</ul>;
  }
  return "Loading...";
}
