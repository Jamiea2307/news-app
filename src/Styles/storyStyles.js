import styled from "styled-components";

export const StoryLinks = styled.a`
  color: ${(props) => props.theme.linkColor};
  &:visited {
    color: ${(props) => props.theme.linkVisited};
  }
`;

export const PostDetailsWrapper = styled.div`
  display: flex;
  font-size: 12px;
`;

export const StoryDetailsWrapper = styled.div`
  display: flex;
`;

export const DomainName = styled.a`
  color: #888;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  max-width: 19em;
  font-size: x-small;
  white-space: nowrap;
`;
