const { getAllTypes } = require('../services/typeService');

const typeController = async () => {
  const allTypesResponse = await getAllTypes();
  return allTypesResponse;
};

module.exports = typeController;
