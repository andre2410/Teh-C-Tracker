const { MongoClient } = require('mongodb');
require('dotenv').config()


/**
 * DB connection function
 */
async function mongodbConnection() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('TehCTracker');
    const tehCData = database.collection('Teh-C');

    return tehCData;

  } catch (error) {
    console.error('Failed to connect:', error);
  } finally {
    await client.close();
  }
}

module.exports = {mongodbConnection};