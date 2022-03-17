import React, { useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/system";
import StoryGridOuter from "./StoryGrid";
import { Typography, Button } from "@mui/material";

function StoryDialog({ isStoryOpen, setIsStoryOpen }) {
    const handleStoryClose = () => {
      setIsStoryOpen(false);
    };
  
    const descriptionElementRef = useRef(null);
    useEffect(() => {
      if (isStoryOpen) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [isStoryOpen]);
  
    return (
      <Dialog
        open={isStoryOpen}
        onStoryClose={handleStoryClose}
        scroll="paper"
        width="500px"
        maxWidth="100%"
        sx={{ opacity: "0.92" }}
      >
        <Box
          spacing={3}
          sx={{ backgroundColor: "black", padding: "1vmin", display: "flex" }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#7FFFD4",
              fontFamily: ['Righteous'],
              fontWeight: "200",
              flex: "1",
            }}
          >
            Select your story
          </Typography>
          <Button
            sx={{ fontSize: "calc(5px + 1.5vmin)", padding: "-3px -25px" }}
            onClick={() => {
              setIsStoryOpen(false);
            }}
          >
            Close
          </Button>
        </Box>
        <DialogContent dividers={true}>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            <StoryGridOuter setIsStoryOpen={setIsStoryOpen} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
  
  export default StoryDialog;