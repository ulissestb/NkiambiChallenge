const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(
  "mongodb+srv://ulisses:nkiambi@cluster0-jyj7u.azure.mongodb.net/nkiambi?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json());
server.use(routes); //todas as rotas
server.listen(3333);
