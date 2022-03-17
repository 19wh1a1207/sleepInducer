import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function MainPage() {
  const myStyle = {
    height: "100vh",
    justifyContent: "center",
    whiteSpace: "pre-line",
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    padding: "12vmin",
  };

  return (
    <div className="App">
      <AppBar
        position="absolute"
        style={{ background: "#446966", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            fontWeight="fontWeightBold"
            sx={{ fontSize: "calc(10px + 1.5vmin)" }}
          >

            <Link to="/" style={{ color: "aquamarine", textDecoration: "none", marginRight: 1210 }}>
            <button type="button" class="btn btn-dark">
                Home
              </button>
            </Link>

          </Typography>
        </Toolbar>
      </AppBar>
      <div className="bg">
        <div style={myStyle}>
          <Typography
            sx={{ fontSize: "calc(10px + 13vmin)" }}
            color="#378782"
            fontWeight="fontWeightLight"
          >
            Sleep Inducer
          </Typography>
          <Typography
            color="secondary"
            fontWeight="fontWeightMedium"
            style={{ fontSize: "calc(10px + 2.3vmin)", fontFamily: ['Ubuntu'] }}
          >
            Welcome to Sleep Inducer! This website will help you
            relax and sleep better.
          </Typography>
          <GoogleLogin/>
        </div>
      </div>
    </div>
  );
}