const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    const { category } = req.query;
    // Đã thêm logic gọi vào database để lọc
    const items = await db.collection('items').find({ category }).toArray();
    res.json(items);
});

module.exports = router;
