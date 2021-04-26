import React, { useState, useEffect } from "react";

export default function PostBody({ post }) {
  const [commentsDisplay, setCommentsDisplay] = useState(false);
  const [comments, setComments] = useState([]);
  const { body, id } = post;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setComments)
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const listComments = () => {
    if (comments && comments.length > 0) {
      return comments.map((comment, index) => (
        <li key={index}>{comment.body}</li>
      ));
    }
    return "Loading...";
  };

  const toggleDisplay = () => setCommentsDisplay(!commentsDisplay);

  return (
    <div>
      <p onClick={toggleDisplay}>{body}</p>
      {commentsDisplay ? <ul>{listComments()}</ul> : ""}
    </div>
  );
}
