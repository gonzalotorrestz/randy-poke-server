const { getMultiplePokemon } = require('../services/pokemonService');

const multiPokemonController = async (qty, query) => {
  const pokemon = await getMultiplePokemon(qty, query);
  return pokemon;
};

module.exports = multiPokemonController;
