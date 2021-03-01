import { getAllDetails } from "../Routes/hackerNewsAPI";
import { getStorys } from "../Routes/redditApi";
import { useState, useEffect } from "react";
import { NewsStory } from "./newsStory";
// import { getStory as getRedditStory } from "../Routes/redditApi";

const NewsComponent = () => {
  const [allStoryId, setAllStoryId] = useState([]);
  const [loadedStoryIds, setLoadedStoryIds] = useState([]);

  // useEffect(() => {
  //   getAllDetails().then((data) => setAllStoryId(data));
  // }, []);

  // useEffect(() => {
  //   setLoadedStoryIds(allStoryId.splice(0, 26));
  // }, [allStoryId]);

  useEffect(() => {
    getStorys()
      .then((data) => setLoadedStoryIds(data))
      .catch((err) => console.log(err));
  }, []);

  const getMoreStories = () => {
    const loadedStories = [...loadedStoryIds, ...allStoryId.splice(0, 26)];
    setLoadedStoryIds(loadedStories);
  };

  return (
    <div>
      {loadedStoryIds.map((story) => {
        return <NewsStory key={Math.random()} storyDetails={story} />;
      })}
      <button onClick={() => getMoreStories()}>More Results</button>
    </div>
  );
};

export default NewsComponent;
