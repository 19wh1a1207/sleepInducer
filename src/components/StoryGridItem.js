import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
const StoryGridItem = ({ story, setIsStoryOpen }) => {
  const navigate = useNavigate();

  const openCard = () => {
    setIsStoryOpen(false);
    navigate(`/openStoryCard/${story.id}`, { replace: true });

  };

  return (
    <Card sx={{ background: "none" }}>
      <CardActionArea onClick={openCard}>
        <CardMedia
          component="img"
          height="150"
          image={story.image}
          alt=":/"
        />
        <CardContent sx={{ height: "60px", backgroundColor: "#0c0b0b" }}>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#fff", fontFamily: ['Righteous'], fontWeight: "300" }}
          >
            {story.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StoryGridItem;