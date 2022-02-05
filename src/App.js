import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Merch from "./merch";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, styled } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Vods from "./vods/vods";
import YoutubeVod from "./vods/YoutubeVod";
import CustomVod from "./vods/CustomVod";
import NotFound from "./utils/NotFound";

const channel = "Sleepy",
  twitchId = "135052907",
  VODS_API_BASE = `https://archive.overpowered.tv/${channel.toLowerCase()}`;

export default function App() {
  let darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#0e0e10",
      },
      primary: {
        main: yellow[600],
      },
      secondary: {
        main: "#292828",
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            color: "white",
            backgroundImage: "none",
          },
        },
      },
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Parent>
                <NotFound />
              </Parent>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Parent>
                <Navbar />
                <Vods channel={channel} twitchId={twitchId} VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
          <Route
            exact
            path="/merch"
            element={
              <Parent>
                <Navbar />
                <Merch />
              </Parent>
            }
          />
          <Route
            exact
            path="/vods"
            element={
              <Parent>
                <Navbar />
                <Vods channel={channel} twitchId={twitchId} VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
          <Route
            exact
            path="/vods/:vodId"
            element={
              <Parent>
                <YoutubeVod channel={channel} twitchId={twitchId} type="vod" VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
          <Route
            exact
            path="/live/:vodId"
            element={
              <Parent>
                <YoutubeVod channel={channel} twitchId={twitchId} type="live" VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
          <Route
            exact
            path="/youtube/:vodId"
            element={
              <Parent>
                <YoutubeVod channel={channel} twitchId={twitchId} VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
          <Route
            exact
            path="/manual/:vodId"
            element={
              <Parent>
                <CustomVod channel={channel} twitchId={twitchId} type="manual" VODS_API_BASE={VODS_API_BASE} />
              </Parent>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Parent = styled((props) => <div {...props} />)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
