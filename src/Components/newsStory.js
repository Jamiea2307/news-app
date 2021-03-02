// import { getStory } from "../Routes/hackerNewsAPI";
import PostedDate from "../Components/postedDate";
import {
  StoryLinks,
  PostDetailsWrapper,
  StoryDetailsWrapper,
  DomainName,
  StoryWrapper,
} from "../Styles/storyStyles";
import { domainExtractor } from "../Utils/domainExtractor";

export const NewsStory = ({ storyDetails }) => {
  return storyDetails && storyDetails.url ? (
    <StoryWrapper>
      <StoryDetailsWrapper>
        <StoryLinks href={storyDetails.url}>
          <div>{storyDetails.title}</div>
        </StoryLinks>
        <DomainName href={storyDetails.url}>
          {storyDetails.url && domainExtractor(storyDetails.url)}
        </DomainName>
      </StoryDetailsWrapper>
      <PostDetailsWrapper>
        <PostedDate unixTime={storyDetails.time} />
        By: {storyDetails.by}
      </PostDetailsWrapper>
    </StoryWrapper>
  ) : null;
};
