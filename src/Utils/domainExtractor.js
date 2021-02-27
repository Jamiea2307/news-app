export const domainExtractor = (url) => {
  const { hostname } = new URL(url);
  return <div>({hostname})</div>;
};
