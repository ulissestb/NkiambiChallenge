const axios = require("axios");
const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const planetId = req.body;

    const response = await axios.get(`https://swapi.co/api/planet/${planetId}`);

    const { name, climate, terrain } = response.data;
    console.log(response.data);
    const planetCreate = await Planet.create({
      name,
      climate,
      terrain
    });

    return res.json(planetCreate);
  }
};
