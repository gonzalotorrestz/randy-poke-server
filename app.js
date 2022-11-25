const express = require('express');
var app = express();

const port = process.env.PORT ? process.env.PORT : 3000;

const singlePokemonController = require('./src/controllers/singlePokemonController');
const multiPokemonController = require('./src/controllers/multiPokemonController');

const baseUrl = '/api/v1';

app.get(`${baseUrl}/`, async (req, res, next) => {
  const query = req.query;
  const singlePokemon = await singlePokemonController(query);
  res.json([singlePokemon]);
});

app.get(`${baseUrl}/:number/`, async (req, res, next) => {
  const number = req.params['number'];
  const query = req.query;
  const multiPokemon = await multiPokemonController(number, query);
  res.json([multiPokemon]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
