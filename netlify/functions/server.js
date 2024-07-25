const express = require('express');
const serverless = require('serverless-http');
const connectDB = require('../../config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
const products = require('../../routes/products');
const checkout = require('../../routes/checkout');
const orders = require('../../routes/orders');
const users = require('../../routes/users');

app.use('/api/products', products);
app.use('/api/checkout', checkout);
app.use('/api/orders', orders);
app.use('/api/users', users);

module.exports.handler = serverless(app);
