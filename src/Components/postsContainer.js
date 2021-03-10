import { useState, useEffect } from "react";
import { PostDetails } from "./postDetails";
import { Spinner } from "./loadingSpinner";
import { useContext } from "react";
import { AppContext } from "../App";
import { getSiteData } from "../Utils/siteSelector";
import { ButtonContainer } from "../Styles/storyStyles";

const PostsContainer = () => {
  const [loadedStoryIds, setLoadedStoryIds] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [moreResultsButton, setMoreResultsButton] = useState(false);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setLoadingSpinner(true);
    getSiteData(state.siteSelected)
      .then((data) => setLoadedStoryIds(data))
      .finally(() => {
        setLoadingSpinner(false);
        setMoreResultsButton(false);
      });
  }, [state.siteSelected]);

  const getMoreResults = () => {
    setMoreResultsButton(true);
    console.log(moreResultsButton);
    getSiteData(state.siteSelected, loadedStoryIds.after)
      .then((data) => {
        setLoadedStoryIds({
          after: data.after,
          processedStories: [
            ...loadedStoryIds.processedStories,
            ...data.processedStories,
          ],
        });
      })
      .finally(setMoreResultsButton(false));
  };

  return (
    <div>
      {loadedStoryIds?.processedStories?.map((story) => {
        return !loadingSpinner && story !== null ? (
          <PostDetails key={story.id} storyDetails={story} />
        ) : null;
      })}
      {loadingSpinner ? <Spinner /> : null}
      {!loadingSpinner ? (
        <ButtonContainer>
          <button disabled={moreResultsButton} onClick={() => getMoreResults()}>
            More Results
          </button>
        </ButtonContainer>
      ) : null}
    </div>
  );
};

export default PostsContainer;
