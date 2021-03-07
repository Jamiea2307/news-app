import axios from "axios";
import {
  selectFields,
  selectCommentFields,
} from "../Data/selectFieldsHackerNews";

const baseURL = "https://hacker-news.firebaseio.com/v0/";
const newStories = `${baseURL}newstories.json`;
const topStories = `${baseURL}topstories.json`;
const bestStories = `${baseURL}beststories.json`;
const storyURL = `${baseURL}item/`;
const params = `?print=pretty&orderBy="$key"&limitToFirst=25`;

// `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
// const getOrderedStoryids = async () => {
//   const { data: storyIds } = await axios.get(
//     `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&startAt="0"&endAt="10"`
//   );
//   // console.log(storyIds);
// };

const getStory = async (storyId) => {
  const { data } = await axios.get(`${storyURL + storyId}.json`);
  const story = data && selectFields(data);
  return story;
};

const getStoryIds = async () => {
  const { data: storyIds } = await axios.get(`${topStories + params}`);
  return storyIds;
};

export const getAllStoryDetails = async () => {
  const storyIds = await getStoryIds();
  return Promise.all(storyIds.map(getStory));
};

const mapChildComments = (commentId) => {
  if (commentId && commentId.kids && commentId.kids.length > 0) {
    mapChildComments(commentId.kids).then((data) => (commentId.kids = data));
  }

  return Promise.all(commentId.map(getComment));
};

const getComment = async (commentId) => {
  const { data } = await axios.get(`${storyURL + commentId}.json`);
  const comment = data && selectCommentFields(data);

  if (comment && comment.kids) {
    await mapChildComments(comment.kids).then((data) => (comment.kids = data));
  }

  return comment;
};

export const getAllCommentDetails = async (id) => {
  const { data } = await axios.get(`${storyURL + id}.json`);
  return Promise.all(data.kids.map(getComment));
};
