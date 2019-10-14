import React from "react";

import Header from "../components/Header";
import FormBusca from "../components/FormBusca";
import "../components/ListPlanets.css";

export default function Busca() {
  return (
    <div className="planet-container">
      <Header />
      <div className="form-list">
        <FormBusca />
      </div>
    </div>
  );
}
