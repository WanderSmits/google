import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
        </div>
        <div className="home__headerRight">
          {/* Link */}
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body"></div>
    </div>
  );
}

export default Home;
