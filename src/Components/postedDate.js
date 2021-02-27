const { DateTime } = require("luxon");

const PostedDate = ({ unixTime }) => {
  const { minute, hour, day, month, year } = DateTime.fromSeconds(unixTime).c;

  return (
    <div>
      <span>
        Posted:
        {hour}:{minute} {day}/{month}/{year}
      </span>
    </div>
  );
};

export default PostedDate;
