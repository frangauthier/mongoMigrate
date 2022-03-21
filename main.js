require('dotenv').config();
const localDb = require('./localDb');
const cloudDb = require('./cloudDb');

(async() => {
    await localDb.connect();
    await cloudDb.connect();

    const document = await cloudDb.getOne();
    console.log('document: ', document);
    console.log('document: ', document.title);
})()