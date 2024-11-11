const { MongoClient } = require('mongodb');

// Replace this with your MongoDB URI
const url = 'mongodb+srv://patilharshs2763:harsh2025@cluster0.7nm3ooa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'student';  // Replace with your DB name

const connectToMongo = async () => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db(dbName);
        return { db, client };  // Return the DB connection and client
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};

module.exports = connectToMongo;
