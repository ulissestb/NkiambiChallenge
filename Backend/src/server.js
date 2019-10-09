const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

const server = require("http").Server(app);

mongoose.connect(
  "mongodb+srv://ulisses:nkiambi@cluster0-jyj7u.azure.mongodb.net/nkiambi?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes); //todas as rotas
server.listen(process.env.PORT || 3333);
