import { useState, useEffect } from "react";
import { PostDetails } from "./postDetails";
import { Spinner } from "./loadingSpinner";
import { useContext } from "react";
import { AppContext } from "../App";
import { getSiteData } from "../Utils/siteSelector";

const PostsContainer = () => {
  const [loadedStoryIds, setLoadedStoryIds] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setLoadingSpinner(true);
    getSiteData(state.siteSelected)
      .then((data) => setLoadedStoryIds(data))
      .finally(() => setLoadingSpinner(false));
  }, [state.siteSelected]);

  const getMoreResults = () => {
    getSiteData(state.siteSelected, loadedStoryIds.after).then((data) =>
      setLoadedStoryIds({
        after: data.after,
        processedStories: [
          ...loadedStoryIds.processedStories,
          ...data.processedStories,
        ],
      })
    );
  };

  return (
    <div>
      {loadedStoryIds?.processedStories?.map((story) => {
        return !loadingSpinner ? (
          <PostDetails key={story.id} storyDetails={story} />
        ) : null;
      })}
      {loadingSpinner ? <Spinner /> : null}
      {!loadingSpinner ? (
        <button onClick={() => getMoreResults()}>More Results</button>
      ) : null}
    </div>
  );
};

export default PostsContainer;
