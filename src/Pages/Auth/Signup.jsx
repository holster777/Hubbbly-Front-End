import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));

      setUsername('');
      setPassword('')
  };


  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="username" value={username} onChange={handleUsername} />
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePassword} />
              <button type="submit"> Create Account </button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Signup;