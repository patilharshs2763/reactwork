const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = "mongodb+srv://patilharshs2763:harsh2025@cluster0.7nm3ooa.mongodb.net/mern_admin?retryWrites=true&w=majority";
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successfull to database")
    }
    catch (error) {
        console.error("db connection failed");
        process.exit(0);
    }
}
module.exports = connectDb;