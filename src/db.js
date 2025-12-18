const mongoose = require('mongoose');

require('dotenv').config();

const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Mongo DB Connected Successfully");
    } catch (err) {
        console.error("Mongo DB Connection Error", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;