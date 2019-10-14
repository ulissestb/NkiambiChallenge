const express = require("express");
const PlanetController = require("./controllers/PlanetController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello Nkiambi");
}); //rota principal

routes.get("/planets", PlanetController.show); //rota de todos os planetas
routes.get("/planets/:id/", PlanetController.store); //rota pra buscar da API
routes.post("/planets/busca/", PlanetController.searchById); //rota pra buscar da API
routes.post("/planets/name", PlanetController.searchByName);
routes.post("/planets/add", PlanetController.addPlanet); //rota pra adicionar novo
routes.post("/planets/remove", PlanetController.removePlanet); //rota para remover planetas

module.exports = routes;
