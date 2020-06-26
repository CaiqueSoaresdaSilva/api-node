const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//INICIANDO O APP
const app = express();
//permite que os dados sejam enviados em formato json
app.use(express.json());
app.use(cors());

//INICIANDO O DB
mongoose.connect(
    'mongodb://localhost:27017/api-node', 
    { useNewUrlParser: true,
      useUnifiedTopology: true
    }
);
requireDir('./src/models');

//ROTAS
app.use('/api', require("./src/routes"));

app.listen(3001);