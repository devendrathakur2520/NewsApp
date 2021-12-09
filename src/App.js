import React from "react";
import NewsData from "./components/NewsData";
import Description from "./components/Description";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <br />
        <NewsData />
        <Router>
          <div>

            <Switch>
              <Route exact path="/Description">
                <Description />
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </>
  );
}

export default App;
