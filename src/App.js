import { BrowserRouter, Route, Switch } from "react-router-dom";
import Frontpage from "./frontpage";
import Vods from "./vods";
import VodPlayer from "./vod_player";
import Navbar from "./navbar";
import background from "./assets/background.jpg";
import Merch from "./merch";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div
              className="root background"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <Navbar {...props} />
              <Frontpage {...props} />
            </div>
          )}
        />
        <Route
          exact
          path="/merch"
          render={(props) => (
            <div
              className="root"
            >
              <Navbar {...props} />
              <Merch {...props} />
            </div>
          )}
        />
        <Route
          exact
          path="/vods"
          render={(props) => (
            <div
              className="root background"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <Navbar {...props} />
              <Vods {...props} />
            </div>
          )}
        />
        <Route
          exact
          path="/vods/:vodId"
          render={(props) => (
            <div className="root">
              <VodPlayer {...props} />
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
