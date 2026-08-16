const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Khai báo multer

router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    res.json({ message: "List all items" });
});

// Đã thêm upload.single('file') vào đây
router.post('/', upload.single('file'), async (req, res) => {
    res.json({ message: "Item uploaded successfully" });
});

router.get('/:id', async (req, res) => {
    res.json({ message: `Get item ${req.params.id}` });
});

router.delete('/:id', async (req, res) => {
    res.json({ message: "Item deleted" });
});

module.exports = router;
