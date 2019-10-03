const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  clima: {
    type: String,
    required: true
  },
  terreno: {
    type: String,
    required: true
  }
});

module.exports = model("Planet", PlanetSchema);
