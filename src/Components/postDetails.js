import PostedDate from "./postedDate";
import {
  StoryLinks,
  PostDetailsWrapper,
  StoryDetailsWrapper,
  DomainName,
  StoryWrapper,
} from "../Styles/storyStyles";
import { domainExtractor } from "../Utils/domainExtractor";
import { Comments } from "../Components/comments";

export const PostDetails = ({ storyDetails }) => {
  console.log(storyDetails);
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
      <Comments
        id={storyDetails.id}
        commentList={storyDetails.kids}
        commentNumber={storyDetails.num_comments}
      ></Comments>
    </StoryWrapper>
  ) : null;
};
