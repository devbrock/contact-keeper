const express = require('express');
const router = express.Router();

// @route   Get    api/contacts
// @desc    Get all users contacts
// @access  private
router.get('/', (req, res) => {
	res.send('get contacts');
});

// @route   Post    api/contacts
// @desc    Add a new contact
// @access  private
router.post('/', (req, res) => {
	res.send('add a contact');
});

// @route   PUT    api/contacts/:id
// @desc    Add a new contact
// @access  private
router.put('/:id', (req, res) => {
	res.send('update contact');
});

// @route   DELETE    api/contacts/:id
// @desc    Remove a new contact
// @access  private
router.delete('/:id', (req, res) => {
	res.send('delette contact');
});

module.exports = router;
