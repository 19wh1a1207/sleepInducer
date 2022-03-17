import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import MainPage from "./components/MainPage";
import CardDetails from "./components/CardDetails";
import Menu from "./components/Options";
import LoggedInMain from "./components/LoggedInMainPage";
import { MusicInfoProvider } from "./Contexts/MusicInfoContext";
import { StoryInfoProvider } from "./Contexts/StoryInfoContext";
import StoryCardDetails from "./components/StoryCardDetails";

const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
    primary: {
      main: "#7FFFD4",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ['Righteous'],

    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
  },
  props: {
    MuiIcon: {
      color: '#aa0011',
    }
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          primary: "#fff",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          outline: "none",
          borderRadius: "100px",
          textTransform: "lowercase",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MusicInfoProvider>
          <StoryInfoProvider>
            <Routes>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/Menu" exact element={<Menu />} />
              <Route path="/Home" exact element={<LoggedInMain />} />
              <Route path="/openCard/:id" exact element={<CardDetails />} />
              <Route path="/openStoryCard/:id" exact element={<StoryCardDetails />} />
            </Routes>
          </StoryInfoProvider>
        </MusicInfoProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;