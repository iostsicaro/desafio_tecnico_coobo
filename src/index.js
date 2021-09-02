require('dotenv').config();

const express = require('express');

const rotas = require('./rotas');
const conexaoMongoDb = require('./mongodb');

conexaoMongoDb();

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000);