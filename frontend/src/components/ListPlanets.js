import React from "react";

import List from "./List";
import Form from "./Form";
import "./ListPlanets.css";

export default function ListPlanet() {
  return (
    <div className="planet-container">
      <h3>Lista de Planetas</h3>
      <>
        <List />
      </>
      <hr></hr>
      <div className="form-list">
        <Form />
      </div>
    </div>
  );
}
