import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Login = ({ onLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navi=useNavigate();
  const handleLogin = () => {
    if (username === 'ram@gmail.com' && password === '123') {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (isAuthenticated) {
    return  navi('/dashboard')
   
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;