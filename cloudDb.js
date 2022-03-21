const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.CLOUD_CONNECTION_STRING;
const client = new MongoClient(url);

// Database Name
const dbName = 'sample_mflix';
const collectionName = 'movies';

async function connect() {

    try {

        await client.connect()
        console.log('Connection successful on cloud db')

    } catch (err) {
        console.log('Error on connect to cloud db')
        console.error(err)
    }
}

async function getOne() {

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const document = await collection.findOne({})

    return document;
}

module.exports = {
    connect,
    getOne,
}