// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Code to filter on category
router.get('/', async (req, res) => {
    const { category } = req.query;
    res.json({ message: `Searching for category: ${category}` });
});
module.exports = router;
