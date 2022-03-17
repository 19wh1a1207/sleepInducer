import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import StoryGridItem from "./StoryGridItem";
import { StoryInfoContext } from "../Contexts/StoryInfoContext";

const StoryGridOuter = ({ setIsStoryOpen }) => {
  const story = useContext(StoryInfoContext);

  return (
    <Grid container alignItems="stretch" spacing={4} >
      {story.map((story) => (
        <Grid key={story.id} xs={12} sm={6} lg={3} item>
          <StoryGridItem story={story} setIsStoryOpen={setIsStoryOpen} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StoryGridOuter;