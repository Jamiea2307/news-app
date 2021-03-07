import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import DOMPurify from "dompurify";
import PostedDate from "./postedDate";
import { commentSiteSelector } from "../Utils/commentSiteSelector";
import { getAllCommentDetails } from "../Routes/hackerNewsAPI";
import { getElementError } from "@testing-library/react";
import { CommentContainer, CommentText } from "../Styles/commentStyles";

// import Comment from "../Components/comment";

export const CommentsContainer = (postId) => {
  const [details, setDetails] = useState([]);
  const { id } = postId.match.params;

  const { state } = useContext(AppContext);

  useEffect(() => {
    getAllCommentDetails(id).then((data) => setDetails(data));
    console.log(details);
  }, []);

  // useEffect(() => {
  //   if (id) getComments(id).then((data) => setComment(data));
  // }, [id]);

  const addPostedTime = (time) => {
    if (time) return <PostedDate unixTime={time} />;
  };

  const Responses = ({ responses }) => {
    return responses ? (
      <div>
        {responses.map((details) => (
          <CommentContainer key={details.id}>
            <div>
              <span className="authorName">{details.by}</span>
              <span className="postTime">{addPostedTime(details.time)}</span>
            </div>
            <CommentText
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(details.text),
              }}
            ></CommentText>
            <Responses responses={details.kids} />
          </CommentContainer>
        ))}
      </div>
    ) : null;
  };

  return (
    <div>
      <Responses responses={details} />
    </div>
  );
};
