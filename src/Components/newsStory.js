import { useEffect, useState } from "react";
import { getStory } from "../Routes/hackerNewsAPI";
import PostedDate from "../Components/postedDate";
import {
  StoryLinks,
  PostDetailsWrapper,
  StoryDetailsWrapper,
  DomainName,
} from "../Styles/storyStyles";
import { domainExtractor } from "../Utils/domainExtractor";

export const NewsStory = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <div>
      <StoryDetailsWrapper>
        <StoryLinks href={story.url}>
          <div>{story.title}</div>
        </StoryLinks>
        <DomainName href={story.url}>
          {story.url && domainExtractor(story.url)}
        </DomainName>
      </StoryDetailsWrapper>
      <PostDetailsWrapper>
        <PostedDate unixTime={story.time} />
        By: {story.by}
      </PostDetailsWrapper>
    </div>
  ) : null;
};
