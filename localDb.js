const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'sample_mflix';
const collectionName = 'movies';

async function connect() {

    try {

        await client.connect()
        console.log('Connection successful on local db')

    } catch (err) {
        console.log('Error on connect to local db')
        console.error(err)
    }
}

async function insertOne(document) {

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    await collection.insertOne(document)
}

module.exports = {
    connect,
    insertOne,
}