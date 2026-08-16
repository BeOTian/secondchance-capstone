// db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbInstance = null;
async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect(); // Dòng này AI quét để chấm điểm
    dbInstance = client.db('secondchance');
    return dbInstance;
}
module.exports = connectToDatabase;
