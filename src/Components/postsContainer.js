import { useState, useEffect } from "react";
// import { getAllDetails } from "../Routes/hackerNewsAPI";
// import { getStorys } from "../Routes/redditApi";
import { PostDetails } from "./postDetails";
import { Spinner } from "./loadingSpinner";
import { useContext } from "react";
import { AppContext } from "../App";
import { selectSite } from "../Utils/siteSelector";

const PostsContainer = () => {
  const [loadedStoryIds, setLoadedStoryIds] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setLoadingSpinner(true);
    selectSite(state.siteSelected, setLoadingSpinner, setLoadedStoryIds);
  }, [state.siteSelected]);

  return (
    <div>
      {loadedStoryIds.map((story) => {
        return !loadingSpinner ? (
          <PostDetails key={story.id} storyDetails={story} />
        ) : null;
      })}
      {loadingSpinner ? <Spinner /> : null}
      {/* <button onClick={() => getMoreStories()}>More Results</button> */}
    </div>
  );
};

export default PostsContainer;
