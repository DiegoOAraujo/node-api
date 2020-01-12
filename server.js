const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

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
