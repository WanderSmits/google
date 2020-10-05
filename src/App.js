import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/Searchpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/*Landing page*/}

        {/* search results page*/}
        <SearchPage />
      </Router>
    </div>
  );
}

export default App;
