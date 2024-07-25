const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.MONGO_URI || config.get('mongoURI'); // Fetch mongoURI from environment variables

const connectDB = async () => {
    try {
        // Log the mongoURI to ensure it's being set correctly
        // Connect to MongoDB with proper options
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        // Log the error message and additional details
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
