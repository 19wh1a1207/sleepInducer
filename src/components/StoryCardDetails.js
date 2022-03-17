import React, { useContext, useState, useEffect, useRef } from "react";
import { StoryInfoContext } from "../Contexts/StoryInfoContext";
import { Credits } from "./Credits";
import LightSettingsMenu from "./LightSettingsMenu";
import LightsStatus from "./LightsStatus";
import Player from "./Player";
import { useInterval } from "./useInterval";
import { useParams, Link } from "react-router-dom";
import "./CardDetails.css";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import WbIncandescentSharpIcon from "@mui/icons-material/WbIncandescentSharp";
import StoryDialog from "./StoryDialog";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StoryCardDetails = () => {
    const textInput = useRef(null);
    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const [volume, setVolume] = useState(1);
    const [intervalVolume, setIntervalVolume] = useState(30000);
    const [lightsStatus, setLightsStatus] = useState(LightsStatus.lightsGraduallyOff);
    const className = lightsStatus === LightsStatus.lightsGraduallyOff ? "outerDiv" : lightsStatus === LightsStatus.lightsOn ? "lightsOn" : "lightsOff";
    const [isHover, setIsHover] = useState(false);
    const appBarClassName = isHover ? "lightsOn" : "lightsOff";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElInfo, setAnchorElInfo] = React.useState(null);
    const { id } = useParams();
    const story = useContext(StoryInfoContext).find((element) => { return element.id === id });

    const myStyle = {
        // height: "100vh",
        // width: "190vh",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        whiteSpace: "pre-line",
        backgroundImage: `url(${story.image})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundSize : "100% 100%",
    };

    const iconStyle = {
        cursor: "pointer",
        fontSize: "2em",
    };

    const footerStyle = {
        position: "absolute",
        bottom: "20px",
        right: "10px",
        display: "flex",
        justifyContent: "flex-end",
        opacity: "0.6",
    }

    useEffect(() => {
        setLightsStatus(LightsStatus.lightsGraduallyOff);
        setIsHover(false);
    }, [useParams()]);

    useInterval(
        () => {
            setVolume(volume - 0.05);
            console.log(volume);
        },
        volume > 0.2 ? intervalVolume : null
    );

    const toggleAppbarHover = (num) => {
        if (num === 0) setIsHover(true);
        else setIsHover(false);
    };

    const handleListIconClick = () => {
        setIsStoryOpen(true);
    };

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleShowInfo = (event) => {
        setAnchorElInfo(event.currentTarget);
    };

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === "number") {
            setVolume(newValue / 100);
            setIntervalVolume(null);
            console.log(newValue/100);
        }
    };

    return (
        <div ref={textInput}>
            <AppBar
                position="absolute"
                style={{ background: "none", boxShadow: "none", opacity: "0.6" }}
                onMouseEnter={() => toggleAppbarHover(0)}
                onMouseLeave={() => toggleAppbarHover(1)}
                className={appBarClassName}
            >
                <Toolbar>
                    <Typography
                        fontWeight="fontWeightMedium"
                        color="primary"
                        sx={{
                            fontSize: "calc(10px + 1.5vmin)",
                            flexGrow: 1,
                        }}
                    >
                        <Link to="/" style={{ color: "aquamarine", textDecoration: "none" }}>
                            Home
                        </Link>
                    </Typography>

                    <WbIncandescentSharpIcon
                        sx={{ mr: 2 }}
                        onClick={handleClickMenu}
                        color="secondary"
                        style={iconStyle}
                    />

                    <GridViewSharpIcon
                        color="secondary"
                        onClick={handleListIconClick}
                        style={iconStyle}
                    />

                    <StoryDialog isStoryOpen={isStoryOpen} setIsStoryOpen={setIsStoryOpen} />

                    <LightSettingsMenu
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        setLightsStatus={setLightsStatus}
                    />
                    <InfoOutlinedIcon
                        sx={{ ml: 2, marginRight:5 }}
                        color="secondary"
                        style={iconStyle}
                        onClick={handleShowInfo}
                    />
                    <Credits
                        music={story}
                        anchorElInfo={anchorElInfo}
                        setAnchorElInfo={setAnchorElInfo}
                    />

                    <Link to="/Login/Menu" style={{ color: "aquamarine", textDecoration: "none", fontFamily: ['Righteous']}}>
                        Back
                    </Link>

                </Toolbar>
            </AppBar>

            <main key={id} style={myStyle} className={className}>
                <Player music={story} volume={volume} setVolume={setVolume} />
            </main>

            <footer
                style={footerStyle}
                onMouseEnter={() => toggleAppbarHover(0)}
                onMouseLeave={() => toggleAppbarHover(1)}
                className={appBarClassName}
            >
                <Box sx={{ height: "200px", display: "flex" }}>
                    <Stack
                        key={volume}
                        spacing={1}
                        direction="column-reverse"
                        alignItems="center"
                    >
                        {volume <= 0.5 && (
                            <VolumeDown color="secondary" style={{ fontSize: "2em" }} />
                        )}
                        {volume > 0.5 && (
                            <VolumeUp color="secondary" style={{ fontSize: "2em" }} />
                        )}

                        <Slider
                            aria-label="Volume"
                            orientation="vertical"
                            getAriaValueText={() => { return volume }}
                            defaultValue={volume * 100}
                            style={{
                                color: "white",
                            }}
                            size="small"
                            onChangeCommitted={handleSliderChange}
                        />
                    </Stack>
                </Box>
            </footer>
        </div>
    );
};

export default StoryCardDetails;