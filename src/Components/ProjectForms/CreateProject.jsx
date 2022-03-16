import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function CreateProject(props) {

    const {viewToggle, fetchProjects} = props
   
  const [name, setName] = useState('');

  const handleName = (e) => setName(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name };

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(`${process.env.REACT_APP_API_URL}/client/new-project`, body, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {

      setName('');
      fetchProjects()
      viewToggle('cardList')
    
      })
      .catch((err) => console.log(err));

      
  };


  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>New Project</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="name" value={name} onChange={handleName} />
              <button type="submit"> Create Project </button>
          </form>
          </div>
      </div>
    </div>
  )

}

export default CreateProject