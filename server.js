const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json()); //permitir enviar dados em formato JSON, mais usado em api REST
app.use(cors()); //habilita acesso externo

//iniciando o DB
try {
  mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
} catch (error) {
  console.warn('Erro ao conectar no banco');
}

requireDir("./src/models");

//Rotas
app.use('/api',require("./src/routes"));

app.listen(3001);
