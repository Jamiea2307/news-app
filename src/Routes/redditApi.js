import axios from "axios";
import { selectFields, selectCommentFields } from "../Data/selectFieldsReddit";

//https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1
//use after value to get next page of results

const baseURLNoR = "https://www.reddit.com/";
const baseURL = "https://www.reddit.com/r/";
const subreddit = `${baseURL}all.json`;

export const getStorys = async () => {
  const { data } = await axios.get(subreddit);
  const processedStories = data.data.children.map((post) =>
    selectFields(post.data)
  );

  return processedStories;
};

export const getComments = async (extention) => {
  const { data } = await axios.get(`${baseURLNoR + extention}.json`);
  const processedcomments = data[1].data.children.map((comments) =>
    selectCommentFields(comments.data)
  );
  return processedcomments;
};

//video fromat taken from media reddit_video fallback
//"https://v.redd.it/cer7jxne75k61/DASH_1080.mp4"
