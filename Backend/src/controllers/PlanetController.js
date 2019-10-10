const axios = require("axios");
const Planet = require("../models/Planet");

module.exports = {
  //Busca planeta da API FUNCIONANDO
  async store(req, res) {
    const { id } = req.params;

    const response = await axios.get(`https://swapi.co/api/planets/${id}`);
    const { name, climate, terrain, films } = response.data;

    const planetCreate = await Planet.create(
      {
        name,
        climate,
        terrain,
        films: films.length
      },
      function(err) {
        return console.log(err);
      }
    );
    return res.json(response.data);
  },
  //Mostra todos os planetas no Banco FUNCIONANDO
  async show(req, res) {
    const all = await Planet.find();
    res.json(all);
  },

  //Busca por Nome FUNCIONANDO
  async searchByName(req, res) {
    const { name } = req.body;

    const byName = await Planet.find({ name });

    res.json(byName);
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
    return res.json({ add });
  },
  //Deleta o planeta pelo id FUNCIONANDO
  async removePlanet(req, res) {
    const { _id } = req.body;

    const remove = await Planet.findByIdAndDelete({ _id });
    return res.json(remove);
  }
};
