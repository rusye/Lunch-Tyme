import React from "react";
import "./Footer.css";
import lunch from "../icons/tab_lunch@2x.png";
import internets from "../icons/tab_internets@2x.png";

export default function NavBar() {
  return (
    <footer>
      <div>
        <img className="icon" src={lunch} alt="lunch" />
        <p>lunch</p>
      </div>
      <div className="internets">
        <img className="icon" src={internets} alt="internets" />
        <p>internets</p>
      </div>
    </footer>
  );
}
