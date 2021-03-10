import { getAllStoryDetails as getHackerNewsDetails } from "../Routes/hackerNewsAPI";
import { getStories as getRedditStories } from "../Routes/redditApi";
import { sites } from "../Data/sites";

export const getSiteData = async (siteSelected, pageValue) => {
  const stories = {};

  switch (siteSelected) {
    case sites.HackerNews:
      await getHackerNewsDetails(pageValue).then((data) => {
        stories.processedStories = data;
        stories.after = data.length ? data.length : 0;
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

  console.log(stories);

  return stories;
};
