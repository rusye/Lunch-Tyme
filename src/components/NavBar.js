import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mapIcon from "../icons/icon_map@2x.png";
import backIcon from "../icons/ic_webBack@2x.png";

export default function NavBar(props) {
  const home = "/";
  const location = props.location.pathname;

  return (
    <header>
      <nav>
        {location !== home ? (
          <Link tabIndex="-1" to="/">
            <img className="icon" src={backIcon} alt="back" />
          </Link>
        ) : (
          <img className="icon home" src={backIcon} alt="back" />
        )}

        <h1 className="name">Lunch Tyme</h1>

        <Link tabIndex="-1" to="/">
          <img className="icon" src={mapIcon} alt="map" />
        </Link>
      </nav>
    </header>
  );
}
