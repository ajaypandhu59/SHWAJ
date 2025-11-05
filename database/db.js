const { MongoClient } = require('mongodb'); 
const url = 'mongodb+srv://ajaypandhu568:ajay81682@cluster0.svmpbh4.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

let db;

async function main() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    db = client.db('school'); 
    return db;
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
  }
}

module.exports = main;
