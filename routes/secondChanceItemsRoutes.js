
// routes/secondChanceItemsRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Database connection using connectToDatabase()
router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    res.json({ message: "List all items" });
});

// A POST method for file upload
router.post('/', async (req, res) => {
    res.json({ message: "Item uploaded" });
});

// Routes for /api/secondchance/items/:id
router.get('/:id', async (req, res) => {
    res.json({ message: `Get item ${req.params.id}` });
});

// A DELETE method for removing an item via /:id
router.delete('/:id', async (req, res) => {
    res.json({ message: "Item deleted" });
});

module.exports = router;
