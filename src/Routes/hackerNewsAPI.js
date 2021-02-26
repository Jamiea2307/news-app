import axios from "axios";
import { selectFields } from "../Utils/selectFields";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newsStories = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyURL + storyId}.json`)
    .then(({ data }) => data && selectFields(data))
    .catch((err) => console.log(err));

  return result;
};

export const getStoryIds = async () => {
  const result = await axios
    .get(newsStories)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
  return result;
};
