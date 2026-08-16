// routes/authRoutes.js
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => res.json({ message: "Register API" }));
router.post('/login', (req, res) => res.json({ message: "Login API" }));
router.put('/update', (req, res) => res.json({ message: "Update user API" }));

module.exports = router;
