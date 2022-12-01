const data = require('../data/products.json');
const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('chopiphy').collection('products');
}

async function getProducts() {
    const db = await collection();
    const data = await db.find().toArray()
    return { total: data.length, limit: data.length, products: data};
}

async function getProduct(id) {
    const db = await collection();
    const data = await db.findOne({ _id: id })
    return data;
}

async function seed(){
    const db = await collection();
    db.insertMany(data.products);
    return 'sucess';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getProducts,
    getProduct,
    seed
};