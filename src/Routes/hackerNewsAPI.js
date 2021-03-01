import axios from "axios";
import { selectFields } from "../Utils/selectFieldsHackerNews";

const baseURL = "https://hacker-news.firebaseio.com/v0/";
const newStories = `${baseURL}newstories.json`;
const topStories = `${baseURL}topstories.json`;
const bestStories = `${baseURL}beststories.json`;
const storyURL = `${baseURL}item/`;
const params = `?print=pretty&orderBy="$key"&limitToFirst=26`;

// `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
// const getOrderedStoryids = async () => {
//   const { data: storyIds } = await axios.get(
//     `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
//   );
//   // console.log(storyIds);
// };

// getOrderedStoryids();

const getStory = async (storyId) => {
  const { data } = await axios.get(`${storyURL + storyId}.json`);
  const story = data && selectFields(data);
  return story;
};

const getStoryIds = async () => {
  const { data: storyIds } = await axios.get(`${newStories + params}`);
  return storyIds;
};

export const getAllDetails = async () => {
  const storyIds = await getStoryIds();
  return Promise.all(storyIds.map(getStory));
  /* Or
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
