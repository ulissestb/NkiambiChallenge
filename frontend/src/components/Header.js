import React from "react";
import iblue from "../assets/iblue.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img src={iblue} alt="logo da iblue consulting" />
      <h3>Desafio do Pedro Nkiambi</h3>
    </div>
  );
}
