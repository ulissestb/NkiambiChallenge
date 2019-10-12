import React from "react";

import { Button, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../services/api";

export default function Form() {
  const addPlanet = async ({ name, climate, terrain, films }) => {
    await api.post("/planets/add", { name, climate, terrain, films });

    console.log("adicionado");
  };

  const randomPlanet = async () => {
    const randomNumber = Math.floor(Math.random() * 60);
    await api.get(`/planets/${randomNumber}/`);
    console.log(randomNumber);
    window.location.reload();
  };

  return (
    <div className="form-list">
      <FormGroup>
        Nome: <FormControl type="text" placeholder="Nome do Planeta" />
        Clima: <FormControl type="text" placeholder="Clima do Planeta" />
        Terreno: <FormControl type="text" placeholder="Terreno do Planeta" />
        Aparições:{" "}
        <FormControl
          type="text"
          placeholder="Aparições do planeta nos filmes"
        />
        <div className="btnn">
          <Button variant="success">Adicionar</Button>
          <Button variant="secondary " onClick={() => randomPlanet()}>
            Aleatório
          </Button>
        </div>
      </FormGroup>
    </div>
  );
}
