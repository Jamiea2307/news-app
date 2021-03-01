import { getAllDetails } from "../Routes/hackerNewsAPI";
import { getStorys } from "../Routes/redditApi";
import { useState, useEffect } from "react";
import { NewsStory } from "./newsStory";
// import { getStory as getRedditStory } from "../Routes/redditApi";

const NewsComponent = ({ selectedSite }) => {
  const [allStoryId, setAllStoryId] = useState([]);
  const [loadedStoryIds, setLoadedStoryIds] = useState([]);

  useEffect(() => {
    if (selectedSite === "hackernews") {
      getAllDetails().then((data) => setLoadedStoryIds(data));
    } else if (selectedSite === "reddit") {
      getStorys().then((data) => setLoadedStoryIds(data));
    } else {
      setLoadedStoryIds([]);
    }
  }, [selectedSite]);

  // useEffect(() => {
  //   setLoadedStoryIds(allStoryId.splice(0, 26));
  // }, [allStoryId]);

  // useEffect(() => {
  //   getStorys()
  //     .then((data) => setLoadedStoryIds(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const getMoreStories = () => {
    const loadedStories = [...loadedStoryIds, ...allStoryId.splice(0, 26)];
    setLoadedStoryIds(loadedStories);
  };

  return (
    <div>
      {loadedStoryIds.map((story) => {
        return <NewsStory key={story.id} storyDetails={story} />;
      })}
      <button onClick={() => getMoreStories()}>More Results</button>
    </div>
  );
};

export default NewsComponent;
