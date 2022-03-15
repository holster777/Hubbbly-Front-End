import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function EditClient(props) {

  console.log(props)
   
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const storedToken = localStorage.getItem('authToken');


  useEffect(() => {
    axios
  .get(`${process.env.REACT_APP_API_URL}/user/${props.clientToEdit}`, {headers: { Authorization: `Bearer ${storedToken}` }})
  .then((response) => {

    setUsername(response.data.username)
    setPassword(response.data.password)
    setEmail(response.data.email)

      })
      .catch((err) => console.log(err));

  }, []);
  

  const handleSubmit = (e) => {

    e.preventDefault();

    const body = { username, email, password};

    axios
      .put(`${process.env.REACT_APP_API_URL}/user/${props.clientToEdit}`, body, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {

      setUsername('');
      setPassword('')
      setEmail('')
      props.viewToggle('cardList')
    
      })
      .catch((err) => console.log(err));
 
  };



  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>Edit Client</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="username" value={username} onChange={handleUsername} />
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePassword} />
              <input type="email" name="email" placeholder="email" value={email} onChange={handleEmail} />
              <div className="btn-box-left">
                <button className="black-btn-left" type="submit"> Update Client </button>
                <button className="purple-btn"> Delete Client </button>
              </div>
          </form>

          </div>

      </div>
    </div>
  )

}

export default EditClient