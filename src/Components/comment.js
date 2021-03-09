import DOMPurify from "dompurify";
import PostedDate from "./postedDate";
import {
  CommentContainer,
  CommentText,
  Comments,
} from "../Styles/commentStyles";

export const Comment = ({ comment }) => {
  const addPostedTime = (time) => {
    if (time) return <PostedDate unixTime={time} />;
  };

  return comment ? (
    <Comments>
      {comment.map((details) => (
        <CommentContainer key={details.id}>
          <div>
            <span className="authorName">{details.by}</span>
            <span className="postTime">
              <PostedDate unixTime={details.time} />
            </span>
          </div>
          <CommentText
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(details.text),
            }}
          ></CommentText>
          <Comment comment={details.kids} />
        </CommentContainer>
      ))}
    </Comments>
  ) : null;
};
