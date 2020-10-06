import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  //gives us the users browser history
  const history = useHistory();

  const search = (event) => {
    event.preventDefault();
    console.log("evenet", input);
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </div>

      {/* if prop is been passed from home, show buttons otherwise don't show buttons  */}
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
