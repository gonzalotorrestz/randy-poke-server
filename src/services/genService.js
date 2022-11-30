const { client } = require('../data/conn');
const coll = client.db(process.env.DB_NAME).collection('gens');

async function getAllGens() {
  const cursor = coll.find();
  const result = await cursor.toArray();
  return result;
}

module.exports = { getAllGens };
