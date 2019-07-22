import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mapIcon from "../icons/icon_map@2x.png";

export default function NavBar() {
  return (
    <header>
      <nav>
        <h1 className="name">Lunch Tyme</h1>

        <Link tabIndex="-1" to="/">
          <img className="icon" src={mapIcon} alt="map" />
        </Link>
      </nav>
    </header>
  );
}
