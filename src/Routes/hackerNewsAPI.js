import axios from "axios";
import { selectFields } from "../Utils/selectFieldsHackerNews";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStories = `${baseURL}newstories.json`;
export const topStories = `${baseURL}topstories.json`;
export const bestStories = `${baseURL}beststories.json`;
export const storyURL = `${baseURL}item/`;

const getStory = async (storyId) => {
  const { data } = await axios.get(`${storyURL + storyId}.json`);
  const story = data && selectFields(data);
  return story;
};

const getStoryIds = async () => {
  const { data: storyIds } = await axios.get(newStories);
  return storyIds;
};

export const getAllDetails = async () => {
  const storyIds = await getStoryIds();
  // *** Use `Promise.all`
  return Promise.all(storyIds.map(getStory));
  /* Or if you prefer
  const stories = await Promise.all(storyIds.map(getStory));
  return stories;
  */
};

// *** Example call outside of an `async` function
// getAllDetails()
//   .then((stories) => {
//     // *** ...use the array of stories...
//     console.log(stories);
//   })
//   .catch((error) => {
//     console.log(error);
//     // *** ...handle/report error...
//   });
