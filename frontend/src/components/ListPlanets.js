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
      <hr />
      <div className="form-list">
        <h3>
          Adicione um Planeta ou <Link to="/busca">Busque</Link>
        </h3>
        <Form />
      </div>
    </div>
  );
}
