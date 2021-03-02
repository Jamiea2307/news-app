import axios from "axios";
import { selectFields } from "../Utils/selectFieldsReddit";

//https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1
//use after value to get next page of results

export const baseURL = "https://www.reddit.com/r/";
export const subreddit = `${baseURL}all.json`;

export const getStorys = async () => {
  const { data } = await axios.get(subreddit);

  var processedStories = data.data.children.map((post) =>
    selectFields(post.data)
  );

  return processedStories;
};

//video fromat taken from media reddit_video fallback
//"https://v.redd.it/cer7jxne75k61/DASH_1080.mp4"