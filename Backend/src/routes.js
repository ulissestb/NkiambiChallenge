const express = require("express");
const PlanetController = require("./controllers/PlanetController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello Nkiambi");
});

routes.get("/planets", (req, res) => {
  return res.json(PlanetController.store);
});

routes.post("/planet", PlanetController.store);

module.exports = routes;
