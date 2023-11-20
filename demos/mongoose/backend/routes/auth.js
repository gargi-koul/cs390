// routes/auth.js

import express from 'express';
import UserModel from '../schema/user.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Create a new user document
    const newUser = new UserModel({ username, password });

    // Save the user to the 'users' collection
    await newUser.save();
    console.log('new user saved')
    res.json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
});

export default router;
