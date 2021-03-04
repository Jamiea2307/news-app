export const selectFields = ({ id, by, url, time, title, kids } = {}) => ({
  id,
  by,
  url,
  time,
  title,
  kids,
});

export const selectCommentFields = ({ by, id, kids, text, time } = {}) => ({
  by,
  id,
  kids,
  text,
  time,
});
