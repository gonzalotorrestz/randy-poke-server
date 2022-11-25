const { getSinglePokemon } = require('../services/pokemonService');

const singlePokemonController = async (query) => {
  const pokemon = await getSinglePokemon(query);
  return pokemon;
};

module.exports = singlePokemonController;
