import React from "react";
import { useFormik } from "formik";

import { Button, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../services/api";

export default function Form() {
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      climate: "",
      terrain: "",
      films: ""
    },
    onSubmit: async (values, bag) => {
      await api.post("/planets/add", values);
    }
  });
  const [name] = getFieldProps("name", "text");
  const [climate] = getFieldProps("climate", "text");
  const [terrain] = getFieldProps("terrain", "text");
  const [films] = getFieldProps("films", "number");

  const randomPlanet = async () => {
    const randomNumber = Math.floor(Math.random() * 60);
    await api.get(`/planets/${randomNumber}/`);
  };

  return (
    <div className="form-list">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          Nome:
          <FormControl type="text" placeholder="Nome do Planeta" {...name} />
          Clima:
          <FormControl
            type="text"
            placeholder="Clima do Planeta"
            {...climate}
          />
          Terreno:
          <FormControl
            type="text"
            placeholder="Terreno do Planeta"
            {...terrain}
          />
          Aparições:
          <FormControl
            type="text"
            placeholder="Aparições do planeta nos filmes"
            {...films}
          />
          <div className="btnn">
            <Button type="submit" variant="success">
              Adicionar
            </Button>
            <Button variant="secondary " onClick={() => randomPlanet()}>
              Aleatório
            </Button>
          </div>
        </FormGroup>
      </form>
    </div>
  );
}
