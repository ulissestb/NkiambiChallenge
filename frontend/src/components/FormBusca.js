import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import { Button, FormControl, FormGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../services/api";
import "./ListPlanets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function FormBusca() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => console.log("atualizou"), [planets]);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      id: ""
    },
    onSubmit: async (values, bag) => {
      const fetchByName = async () => {
        console.log(values);
        const result = await api.post(`/planets/name`, { name: values.name });
        setPlanets(result.data);
      };
      const fetchById = async () => {
        const byID = await api.post(`/planets/busca`, { _id: values.id });
        console.log(byID);
        setPlanets(byID.data);
      };
      if (values.name === "") {
        fetchById();
      } else {
        fetchByName();
      }
    }
  });

  const removePlanet = async _id => {
    await api.post("/planets/remove", { _id });
  };

  const [name] = getFieldProps("name", "text");
  const [id] = getFieldProps("id", "text");

  return (
    <div className="form-list">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          Nome:
          <FormControl type="text" placeholder="Nome do Planeta" {...name} />
          Clima: Terreno:
          <FormControl type="text" placeholder="ID do Planeta" {...id} />
          <div className="btnn">
            <Button type="submit" variant="success">
              Buscar
            </Button>
          </div>
        </FormGroup>
      </form>
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Planeta</th>
              <th>Clima</th>
              <th>Terreno</th>
              <th>Aparições</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {planets.map(planet => (
              <tr>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.terrain}</td>
                <td>{planet.films}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removePlanet(planet._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
}
