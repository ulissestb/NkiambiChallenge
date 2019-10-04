const axios = require("axios");
const Planet = require("../models/Planet");

module.exports = {
  //Busca planeta da API FUNCIONANDO
  async store(req, res) {
    const planetId = req.body.id;

    const response = await axios.get(
      `https://swapi.co/api/planets/${planetId}`
    );
    const { name, climate, terrain } = response.data;

    const planetCreate = await Planet.create(
      {
        name,
        climate,
        terrain
      },
      function(err) {
        return console.log(err);
      }
    );
    return res.send(planetCreate);
  },
  //Mostra todos os planetas no Banco A SER FEITO
  async show(req, res) {
    res.send("listar planetas");
  },

  //adiciona o planeta no banco FUNCIONANDO
  async addPlanet(req, res) {
    const { name, climate, terrain } = req.body;

    const add = await Planet.create(
      {
        name,
        climate,
        terrain
      },
      function(err) {
        return console.log(err);
      }
    );
    return res.json(add);
  }
};
