const User = require('./Models/UserModel');
const express = require('express');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password }); 
    res.status(201).json({ message: 'User created', user: { id: user._id, username, email, password } });
  } 
  
  catch (error) {
    console.error('✘ Error:', err);   
    if (error.code === 11000) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

module.exports = router;