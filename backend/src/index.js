const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://razi:razi@omnistack9-4tf11.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.use(cors())
app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

//Tipos de paraâmetros
//Query Params: req.query (Filtros, ordenção, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body:

//MongoDB (Não-relacional)



server.listen(3333);
