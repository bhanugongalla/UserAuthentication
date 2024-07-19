

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Mocking user authentication (replace with actual logic)
    const user = { username: username };
    dispatch(login(user));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
