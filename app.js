const express = require('express');
var app = express();

if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors');
  app.use(cors());
}
const port = process.env.PORT ? process.env.PORT : 3000;

const singlePokemonController = require('./src/controllers/singlePokemonController');
const multiPokemonController = require('./src/controllers/multiPokemonController');
const typeController = require('./src/controllers/typeController');
const genController = require('./src/controllers/genController');

const urlV1 = '/api/v1';

app.get(`${urlV1}/`, async (req, res, next) => {
  const query = req.query;
  const singlePokemon = await singlePokemonController(query);
  res.json([singlePokemon]);
});

app.get(`${urlV1}/:number/`, async (req, res, next) => {
  const number = req.params['number'];
  const query = req.query;
  const multiPokemon = await multiPokemonController(number, query);
  res.json([multiPokemon]);
});

const urlV2 = '/api/v2';

app.get(`${urlV2}/pokemon/`, async (req, res, next) => {
  const query = req.query;
  const singlePokemon = await singlePokemonController(query);
  res.json([singlePokemon]);
});

app.get(`${urlV2}/pokemon/:number/`, async (req, res, next) => {
  const number = req.params['number'];
  const query = req.query;
  const multiPokemon = await multiPokemonController(number, query);
  res.json([multiPokemon]);
});

app.get(`${urlV2}/type/`, async (req, res, next) => {
  const allTypes = await typeController();
  res.json([allTypes]);
});

app.get(`${urlV2}/gen/`, async (req, res, next) => {
  const allGens = await genController();
  res.json([allGens]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
