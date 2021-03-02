import { useState, useEffect } from "react";
import { getAllDetails } from "../Routes/hackerNewsAPI";
import { getStorys } from "../Routes/redditApi";
import { NewsStory } from "./newsStory";
import { Spinner } from "./spinner";
import { useContext } from "react";
import { AppContext } from "../App";

const NewsComponent = () => {
  const [loadedStoryIds, setLoadedStoryIds] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setLoadedStoryIds([]);
    if (state.siteSelected === "hackernews") {
      setLoadingSpinner(true);
      getAllDetails()
        .then((data) => setLoadedStoryIds(data))
        .finally(() => setLoadingSpinner(false));
    } else if (state.siteSelected === "reddit") {
      setLoadingSpinner(true);
      getStorys()
        .then((data) => setLoadedStoryIds(data))
        .finally(() => setLoadingSpinner(false));
    }
  }, [state.siteSelected]);

  useEffect(() => {
    setLoadingSpinner(true);
  }, []);

  return (
    <div>
      {loadedStoryIds.map((story) => {
        return <NewsStory key={story.id} storyDetails={story} />;
      })}
      {loadingSpinner ? <Spinner /> : null}
      {/* <button onClick={() => getMoreStories()}>More Results</button> */}
    </div>
  );
};

export default NewsComponent;
