// import { getComment } from "../Routes/hackerNewsAPI";

export const CommentContainer = (commentIds) => {
  const commentList = commentIds.location.state.commentIds;

  console.log(commentList);

  return (
    <div>
      {/* {commentList &&
        commentList.map((id) => {
          const abc = getComment(id).then((data) => data.text);
          return abc.text;
        })} */}
    </div>
  );
};
