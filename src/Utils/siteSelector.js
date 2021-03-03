import { getAllStoryDetails } from "../Routes/hackerNewsAPI";
import { getStorys } from "../Routes/redditApi";
import { sites } from "../Data/sites";

export const selectSite = (
  siteSelected,
  setLoadingSpinner,
  setLoadedStoryIds
) => {
  switch (siteSelected) {
    case sites.HackerNews:
      getAllStoryDetails()
        .then((data) => {
          setLoadingSpinner(true);
          setLoadedStoryIds(data);
        })
        .finally(() => setLoadingSpinner(false));
      break;
    case sites.Reddit:
      getStorys()
        .then((data) => {
          setLoadingSpinner(true);
          setLoadedStoryIds(data);
        })
        .finally(() => setLoadingSpinner(false));
      break;
    default:
      console.log("no site selected");
  }
};
