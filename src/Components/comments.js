import { Link } from "react-router-dom";

export const Comments = ({ id, commentList }) => {
  return (
    <Link
      to={{
        pathname: `/comments/${id}`,
        state: { commentIds: commentList },
      }}
    >
      {commentList && commentList.length} comments
    </Link>
  );
};
