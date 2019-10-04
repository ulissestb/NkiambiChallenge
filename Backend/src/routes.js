const express = require("express");
const PlanetController = require("./controllers/PlanetController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello Nkiambi");
}); //rota principal

routes.get("/allplanets", PlanetController.show); //rota de todos os planetas
routes.post("/planet/", PlanetController.store); //rota pra buscar da API
routes.post("/add", PlanetController.addPlanet); //rota pra adicionar novo

module.exports = routes;
