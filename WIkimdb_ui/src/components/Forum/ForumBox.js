import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./styleForum.css";

function ForumBox(props) {
  const { MovieID, Title, Username, Comment, CommentDate } = props;

  return (
    <>
      <div class="comment mt-4 text-justify float-left">
        <h4>{Username}</h4>
        <span> - {CommentDate}</span>
        <br />
        <span>{Title} - {MovieID}</span>
        <br />
        <p>{Comment}</p>
      </div>
    </>
  );
}

export default ForumBox;
