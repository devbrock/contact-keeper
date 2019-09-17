const express = require('express');
const router = express.Router();

// @route   POST    api/users
// @desc    REGISTER A USER
// @access  public
router.post('/', (req, res) => {
	res.send('Register a user');
});

module.exports = router;
