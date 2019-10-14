import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ListPlanets.css";
import api from "../services/api";

export default function ListPlanet() {
  const [planets, setPlanets] = useState([
    { name: "", climate: "", terrain: "", films: "" }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/planets");
      setPlanets(result.data);
    };
    fetchData();
  }, [planets]);

  const removePlanet = async _id => {
    await api.post("/planets/remove", { _id });
  };

  return (
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
  );
}
