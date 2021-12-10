import React from "react";
import NewsData from "./components/NewsData";
import Description from "./components/Description";
import SearchData from "./components/SearchData"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookMarks from "./components/BookMarks";
function App() {
  return (
    <>
      <div>
        <br />
        
        <Router>
          <div>
             <div> <Link className="btn btn-primary" to="/BookMarks" >BookMarks</Link></div>
            <Switch>
              <Route exact path="/">
                <NewsData />
              </Route>
              <Route exact path="/Description/:desc">
                <Description />
              </Route>
              <Route exact path="/SearchData">
                <SearchData/>
              </Route>
              <Route exact path="/BookMarks">
                <BookMarks/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </>
  );
}

export default App;
