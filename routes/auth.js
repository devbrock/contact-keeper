const express = require('express');
const router = express.Router();

// @route   GET    api/auth
// @desc    GET LOGGED IN USER
// @access  private
router.get('/', (req, res) => {
	res.send('Get logged in user');
});

module.exports = router;

// @route   POST    api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', (req, res) => {
	res.send('Log in user');
});

module.exports = router;
