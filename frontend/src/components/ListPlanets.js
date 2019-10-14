import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/planets/search/">Buscar planeta</Link>
      <div className="form-list">
        <h3>Adicione um Planeta</h3>
        <Form />
      </div>
    </div>
  );
}
