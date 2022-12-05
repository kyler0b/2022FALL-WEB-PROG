require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI ?? "mongodb+srv://admin:<password>@cluster0.6jhd5sp.mongodb.net/?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

const client = new MongoClient(uri, options);

module.exports = {
    connect: ()=> client.connect() 
}
/** 
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI ?? "mongodb+srv://admin:<password>@cluster0.6jhd5sp.mongodb.net/?retryWrites=true&w=majority";

//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
const client = new MongoClient(uri, options);

module.exports = {
    connect: ()=> client.connect() 
}
*/

