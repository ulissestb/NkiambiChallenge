import React from "react";

import Header from "../components/Header";
import ListPlanets from "../components/ListPlanets";

export default function Planet() {
  return (
    <div>
      <Header />
      <ListPlanets />
    </div>
  );
}

//routes.get("/planets/:id/", PlanetController.store); //rota pra buscar da API
//routes.post("/planets/", PlanetController.searchByName);
