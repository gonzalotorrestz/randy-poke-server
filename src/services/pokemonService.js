const { client } = require('../data/conn');
const coll = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION_NAME);

function matchBuilder(query) {
  const type1 = query.type1;
  const type2 = query.type2;
  const gen = query.gen || query.Gen;
  let queryParams = {};
  if (type1 !== undefined && type2 === undefined) {
    queryParams = { $or: [{ type1 }, { type2: type1 }] };
  }
  if (type1 !== undefined && type2 !== undefined) {
    queryParams = { $and: [{ type1 }, { type2: type2 }] };
  }
  if (gen !== undefined) {
    queryParams.gen = gen;
  }
  return queryParams;
}

async function getSinglePokemon(query) {
  const queryParams = matchBuilder(query);
  const cursor = coll.aggregate([{ $match: queryParams }, { $sample: { size: 1 } }]);
  const result = await cursor.toArray();
  return result;
}

async function getMultiplePokemon(qty, query) {
  const queryParams = matchBuilder(query);
  const parsedQty = parseInt(qty);
  const cursor = coll.aggregate([{ $match: queryParams }, { $sample: { size: parsedQty } }]);
  const result = await cursor.toArray();
  return result;
}

module.exports = { getSinglePokemon, getMultiplePokemon };
