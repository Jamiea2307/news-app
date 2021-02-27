import { getStoryIds } from "../Routes/hackerNewsAPI";
import { useState, useEffect } from "react";
import { NewsStory } from "./newsStory";

const NewsComponent = () => {
  const [allStoryId, setAllStoryId] = useState([]);
  const [loadedStoryIds, setLoadedStoryIds] = useState([]);
  const [storyNumber, setStoryNumber] = useState(0);

  useEffect(() => {
    const fetchStoryIds = getStoryIds()
      .then((data) => data)
      .catch((err) => err);
    fetchStoryIds.then((data) => data && setAllStoryId(data));
    fetchStoryIds.then((data) => data && setLoadedStoryIds(data.splice(0, 26)));
  }, []);

  const getMoreStories = () => {
    const loadedStories = [...loadedStoryIds, ...allStoryId.splice(0, 26)];
    setLoadedStoryIds(loadedStories);
  };

  return (
    <div>
      {loadedStoryIds.map((storyId) => {
        return (
          <NewsStory
            key={storyId}
            storyId={storyId}
            storyNumber={storyNumber}
          />
        );
      })}
      <button onClick={() => getMoreStories()}>More Results</button>
    </div>
  );
};

export default NewsComponent;
