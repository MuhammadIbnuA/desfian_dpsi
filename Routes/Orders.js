const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/order');

// @route    GET api/orders
// @desc     Get all orders for the logged in user
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('products');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
