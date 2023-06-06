import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        Harry Potter Movies
        <span className="logo" role="img">
          🪄
        </span>
      </h1>
      <nav>
        <ul>
        <Link to = "/">Home</Link>
        <Link to = "/forum">Forum</Link> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
