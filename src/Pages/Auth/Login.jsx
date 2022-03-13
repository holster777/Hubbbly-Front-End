import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../../Context/auth.context'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userMode, setUserMode] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleUserMode = (e) => setUserMode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password, userMode };

    console.log(userMode)

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/${userMode}/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/clients');
      })
      .catch((err) => console.log(err));

      setUsername('');
      setPassword('');
      setUserMode('')
  };
  return (
    <div className="container">
        <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" value={username} onChange={handleUsername} />
            <input type="password" name="password" placeholder="password" value={password} onChange={handlePassword} />
            <div className="radio-box">
              <input type="radio" id="designer" name="userMode" value="designer" onChange={handleUserMode}/>
              <label htmlFor="designer">Designer</label>
              <input type="radio" id="client" name="userMode" value="client" onChange={handleUserMode} />
              <label htmlFor="client">Client</label>
            </div>
            <button type="submit"> Login </button>
        </form>
        </div>
    </div>
  );
}

export default Login;