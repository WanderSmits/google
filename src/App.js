import React from "react";
import "./App.css";
import Home from "./components/Home";
import SearchPage from "./components/Searchpage";

function App() {
  return (
    <div className="App">
      <p>Hallo</p>
      {/*Landing page*/}
      <Home />

      {/* search results page*/}
      <SearchPage />
    </div>
  );
}

export default App;
