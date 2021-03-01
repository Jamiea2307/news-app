export const selectFields = ({ id, author, url, created, title } = {}) => ({
  id,
  by: author,
  url,
  time: created,
  title,
});
