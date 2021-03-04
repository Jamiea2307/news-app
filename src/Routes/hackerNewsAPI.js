import axios from "axios";
import {
  selectFields,
  selectCommentFields,
} from "../Utils/selectFieldsHackerNews";

import { getComments } from "./redditApi";

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

// const getCommentIds = async (commentIds) => {
//   const {
//     data: { kids },
//   } = await axios.get(`${storyURL + commentIds}.json`);
//   console.log(`${storyURL + commentIds}.json`);
//   return kids;
// };

const mapChildComments = (comment) => {
  return Promise.all(comment.map(getComment));
};

const getComment = async (commentId) => {
  const { data } = await axios.get(`${storyURL + commentId}.json`);
  const comment = data && selectCommentFields(data);
  if (comment && comment.kids && comment.kids.length > 0) {
    mapChildComments(comment.kids).then((data) => (comment.kids = data));
  }
  return comment;
};

export const getAllCommentDetails = async (id) => {
  return Promise.all(id.map(getComment));
};

// getAllDetails()
//   .then((stories) => {
//     console.log(stories);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
