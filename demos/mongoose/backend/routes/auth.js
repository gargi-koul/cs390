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
    console.log('New user saved');
    res.json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the 'users' collection
    const user = await UserModel.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    console.log('Login successful');
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

export default router;
