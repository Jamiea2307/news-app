import { useEffect, useState } from "react";
import { getStory } from "../Routes/hackerNewsAPI";

export const NewsStory = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  //   console.log(story);

  return story && story.url ? (
    <a href={story.url}>
      <p>{story.title}</p>
    </a>
  ) : null;
};
