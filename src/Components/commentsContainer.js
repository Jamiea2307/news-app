import { getAllCommentDetails } from "../Routes/hackerNewsAPI";
import { getComments } from "../Routes/redditApi";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { CommentContainer, CommentText } from "../Styles/commentStyles";
import PostedDate from "./postedDate";

export const CommentsContainer = (comments) => {
  const [comment, setComment] = useState([]);
  const { commentIds, id } = comments.location.state;

  useEffect(() => {
    if (commentIds)
      getAllCommentDetails(commentIds).then((data) => setComment(data));
  }, [commentIds]);

  useEffect(() => {
    if (id) getComments(id).then((data) => setComment(data));
  }, [id]);

  const addPostedTime = (time) => {
    if (time) return <PostedDate unixTime={time} />;
  };

  return (
    <div>
      {comment &&
        comment.map((id) => {
          return (
            <CommentContainer key={Math.random()}>
              <div>
                <span className="authorName">{id.by}</span>
                <span className="postTime">{addPostedTime(id.time)}</span>
              </div>
              <CommentText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(id.text),
                }}
              />
            </CommentContainer>
          );
        })}
    </div>
  );
};
