import React from "react";
import { Link } from "react-router-dom";
import iblue from "../assets/iblue.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={iblue} alt="logo da iblue consulting" />
      </Link>
      <h3>Desafio do Pedro Nkiambi</h3>
    </div>
  );
}
