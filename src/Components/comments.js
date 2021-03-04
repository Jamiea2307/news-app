import { Link } from "react-router-dom";
import { LinkContainer } from "../Styles/commentStyles";

export const Comments = ({ id, commentList, commentNumber }) => {
  return (
    <LinkContainer>
      <Link
        to={{
          pathname: `/comments/${id}`,
          state: { commentIds: commentList, id: id },
        }}
      >
        {commentList && commentList.length}
        {commentNumber} comments
      </Link>
    </LinkContainer>
  );
};
