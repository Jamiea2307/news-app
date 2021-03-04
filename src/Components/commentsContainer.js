import { getAllCommentDetails } from "../Routes/hackerNewsAPI";
import { getComments } from "../Routes/redditApi";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { CommentContainer } from "../Styles/commentStyles";
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

  return (
    <div>
      {comment &&
        comment.map((id) => {
          return (
            <CommentContainer key={Math.random()}>
              <div>
                {id.by}
                <PostedDate unixTime={id.time} />
              </div>
              <div
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
