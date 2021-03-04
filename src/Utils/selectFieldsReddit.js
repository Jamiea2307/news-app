export const selectFields = ({
  id,
  author,
  url,
  created,
  title,
  permalink,
  num_comments,
} = {}) => ({
  id,
  by: author,
  url,
  time: created,
  title,
  permalink,
  num_comments,
});

export const selectCommentFields = ({
  author,
  body,
  created,
  replies,
} = {}) => ({
  by: author,
  text: body,
  time: created,
  kids: replies,
});
