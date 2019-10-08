const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema({
  //Forma que está sendo adicionado no banco nome,clima e terreno
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
  films: {
    type: Number
  }
});

module.exports = model("Planet", PlanetSchema);
