const { MongoClient } = require('mongodb');

const connectionString = process.env.ATLAS_URI.replace('DB_USERNAME', process.env.DB_USERNAME).replace('DB_PASS', process.env.DB_PASS);

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { client };
