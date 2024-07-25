const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const Order = require('../models/Order');

// @route    POST api/checkout
// @desc     Checkout products
// @access   Private
router.post('/', auth, async (req, res) => {
    const { products } = req.body;

    try {
        let total = 0;
        const productDetails = await Product.find({ '_id': { $in: products } });

        productDetails.forEach(product => {
            total += product.price;
        });

        const newOrder = new Order({
            user: req.user.id,
            products,
            total,
        });

        const order = await newOrder.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
