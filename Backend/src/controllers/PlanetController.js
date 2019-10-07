const axios = require("axios");
const Planet = require("../models/Planet");

module.exports = {
  //Busca planeta da API FUNCIONANDO
  async store(req, res) {
    const { id } = req.body;

    const response = await axios.get(`https://swapi.co/api/planets/${id}`);
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
    console.log(planetCreate);
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
  },
  //Deleta o planeta pelo id
  async removePlanet(req, res) {
    const { id } = req.body;

    const remove = Planet.findByIdAndDelete({ id });
    return res.json(remove);
  }
};
