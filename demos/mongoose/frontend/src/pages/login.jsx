import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const headers = { 'Content-Type': 'application/json' };
      const requestData = JSON.stringify({ username, password });
      const response = await axios.post('http://localhost:3000/auth/login', requestData, { headers });

      console.log('Server Response:', response);

      if (response.data && response.data.success) {
        console.log('Login successful');
        setDone(true);
      } else {
        console.log('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  if (done) {
    console.log('Redirecting to create post');
    return (
      <div>
        <p>Login successful! You can now create a post.</p>
        <Link to="/create">Create Post</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
