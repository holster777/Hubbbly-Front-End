
import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function CreateClients(props) {
   
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, email, password};

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/new-client`, body, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {

      setUsername('');
      setPassword('')
      setEmail('')
      props.fetchUser()
      props.viewToggle('cardList')
    
      })
      .catch((err) => console.log(err));

      
  };


  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>New Client</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="username" value={username} onChange={handleUsername} />
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePassword} />
              <input type="email" name="email" placeholder="email" value={email} onChange={handleEmail} />
              <button type="submit"> Create Client </button>
          </form>
          </div>
      </div>
    </div>
  )

}

export default CreateClients