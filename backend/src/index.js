const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://razi:razi@omnistack9-4tf11.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

//Tipos de paraâmetros
//Query Params: req.query (Filtros, ordenção, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body:

//MongoDB (Não-relacional)



app.listen(3333);
