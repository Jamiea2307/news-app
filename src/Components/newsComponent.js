import { getStoryIds, getStory } from "../Services/hackerNewsAPI";
import { useState, useEffect } from "react";

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setNews(data));
    // getStory(26254785).then((data) => data && console.log(data));
  }, []);

  return (
    <div>
      {news.map((newsID) => {
        return <div>{newsID}</div>;
      })}
    </div>
  );
};

export default NewsComponent;
