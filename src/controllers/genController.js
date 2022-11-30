const { getAllGens } = require('../services/genService');

const genController = async () => {
  const allGensResponse = await getAllGens();
  return allGensResponse;
};

module.exports = genController;
