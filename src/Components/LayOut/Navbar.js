import React from "react";
import { Home, Cup, MessageText, Game } from "iconsax-react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="navbar">
      <Link
        to="/"
        className={`navItem ${location.pathname === "/" ? " activeLink" : ""}`}
      >
        <Home className="m-auto" size="32" />
        <p className={`${location.pathname === "/" ? "" : "deActive"} `}>
          Home
        </p>
      </Link>
      <Link
        to="/Matches"
        className={`navItem ${
          location.pathname === "/Matches" ? "activeLink" : ""
        }`}
      >
        <Game className="m-auto" size="32" />
        <p className={`${location.pathname === "/Matches" ? "" : "deActive"} `}>
          Matches
        </p>
      </Link>
      <Link
        to="/News"
        className={`navItem ${
          location.pathname === "/News" ? "activeLink" : ""
        }`}
      >
        <MessageText className="m-auto" size="32" />
        <p className={`${location.pathname === "/News" ? "" : "deActive"}`}>
          News
        </p>
      </Link>
      <Link
        to="/Leagues"
        className={`navItem ${
          location.pathname === "/Leagues" ? "activeLink" : ""
        }`}
      >
        <Cup className="m-auto" size="32" />
        <p className={`${location.pathname === "/Leagues" ? "" : "deActive"}`}>
          Leagues
        </p>
      </Link>
    </div>
  );
}
