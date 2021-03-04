import { Link } from "react-router-dom";

export const Comments = ({ id, commentList, commentNumber }) => {
  return (
    <Link
      to={{
        pathname: `/comments/${id}`,
        state: { commentIds: commentList, id: id },
      }}
    >
      {commentList && commentList.length}
      {commentNumber} comments
    </Link>
  );
};
