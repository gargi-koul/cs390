import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const headers = { 'Content-Type': 'application/json' };
      const requestData = JSON.stringify({ username, password });
      const response = await axios.post('http://localhost:3000/auth/signup', requestData, { headers });

      console.log('Server Response:', response);

      if (response.data && response.data.success) {
        console.log('Signup successful');
        setDone(true);
      } else {
        console.log('Signup failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  if (done) {
    console.log('Redirecting to login');
    return (
      <div>
        <p>Signup successful! You can now log in.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
