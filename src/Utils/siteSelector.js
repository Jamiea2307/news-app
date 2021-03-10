import { getAllStoryDetails as getHackerNewsDetails } from "../Routes/hackerNewsAPI";
import { getStories as getRedditStories } from "../Routes/redditApi";
import { sites } from "../Data/sites";

export const getSiteData = async (siteSelected, pageValue) => {
  const stories = {};

  switch (siteSelected) {
    case sites.HackerNews:
      await getHackerNewsDetails().then((data) => {
        stories.processedStories = data;
      });
      break;
    case sites.Reddit:
      await getRedditStories(pageValue).then((data) => {
        stories.after = data.after;
        stories.processedStories = data.processedStories;
      });
      break;
    default:
      console.log("no site selected");
  }

  return stories;
};
