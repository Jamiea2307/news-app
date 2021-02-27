import { PostedDateContainer } from "../Styles/storyStyles";
import { DateTime } from "luxon";

// const { DateTime } = require("luxon");

const PostedDate = ({ unixTime }) => {
  return (
    <PostedDateContainer>
      <span>
        Posted:
        {DateTime.fromSeconds(unixTime).toFormat("HH:mm yyyy/MM/dd")}
      </span>
    </PostedDateContainer>
  );
};

export default PostedDate;
