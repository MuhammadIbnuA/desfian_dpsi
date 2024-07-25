const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Fetch mongoURI from environment variables
const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
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
