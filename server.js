const express = require('express');
const mongoose = require('mongoose');

// iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true});

//primeira rota '/' raiz
app.get('/', (req, res)=>{
  res.send('Oi Diego');
});

app.listen(3001);
