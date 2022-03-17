import React, { useState } from "react";
import DialogComponent from "./DialogComponent";
import StoryDialog from "./StoryDialog";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleLogout from "./GoogleLogout";

export default function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const myStyle = {
        height: "100vh",
        justifyContent: "center",
        whiteSpace: "pre-line",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "12vmin",
    };

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleStoryClick = () => {
        setIsStoryOpen(true);
    };

    return (
        <div className="App">
            <AppBar
                position="absolute"
                style={{ background: "#446966", boxShadow: "none" }}
            >
                <Toolbar>
                    <Typography
                        fontWeight="fontWeightMedium"
                        sx={{ fontSize: "calc(10px + 1.5vmin)" }}
                    >
                        <Link to="/Home" style={{ color: "aquamarine", textDecoration: "none", marginRight: 10 }}>
                            <button type="button" class="btn btn-dark">
                                Home
                            </button>
                        </Link>
                        {/* <Link to="/" style={{ color: "aquamarine", textDecoration: "none" }}>
                            <button type="button" class="btn btn-dark">
                                Sign Out
                            </button>
                        </Link> */}
                        <GoogleLogout/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="bg1">
                <div style={myStyle}>
                    <div class="split left">
                        <div class="centered">
                            <Typography
                                sx={{ fontSize: "calc(5px + 5vmin)" }}
                                color="primary"
                                fontWeight="fontWeightLight"
                            >
                                Sleep Sounds
                            </Typography>
                            <Typography
                                color="secondary"
                                fontWeight="fontWeightMedium"
                                style={{ fontSize: "calc(10px + 1.3vmin)" , fontFamily:"Ubuntu"}}
                            >
                                Sleep Sounds are a collection calming tunes which helps you relax
                                <br /><br />
                            </Typography>
                            <img src={require("../Contexts/sleepSound.jpg")} height="200" width="270"/>
                            <div>
                                <Button
                                    variant="contained"
                                    onClick={handleClick}
                                    color="primary"
                                    style={{
                                        marginTop: "5vmin",
                                        fontSize: "calc(10px + 1.5vmin)",
                                        padding: "3px 25px",
                                    }}
                                >
                                    Browse
                                </Button>
                            </div>
                            <DialogComponent
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                style={{ borderColor: "red" }}
                            />
                        </div>
                    </div>
                    <div class="split right">
                        <div class="centered">
                            <Typography
                                sx={{ fontSize: "calc(5px + 5vmin)" }}
                                color="primary"
                                fontWeight="fontWeightLight"
                            >
                                Bedtime Stories
                            </Typography>
                            <Typography
                                color="secondary"
                                fontWeight="fontWeightMedium"
                                style={{ fontSize: "calc(10px + 1.3vmin)" , fontFamily:"Ubuntu"}}
                            >
                                Bedtime Stories are a collection made for kids to develop their mindset
                                <br /><br />
                            </Typography>
                            <img src={require("../Contexts/bedtimestories.jpg")} height="200" width="270" />
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleStoryClick}
                                    style={{
                                        marginTop: "5vmin",
                                        fontSize: "calc(10px + 1.5vmin)",
                                        padding: "3px 25px",
                                    }}
                                >
                                    Browse
                                </Button>
                            </div>
                            <StoryDialog
                                isStoryOpen={isStoryOpen}
                                setIsStoryOpen={setIsStoryOpen}
                                style={{ borderColor: "red" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}