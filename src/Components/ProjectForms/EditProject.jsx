import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function EditProject(props) {

const {viewToggle, client, projectToEdit} = props

const storedToken = localStorage.getItem('authToken');
   
  const [name, setName] = useState('');

  const handleName = (e) => setName(e.target.value);

  useEffect(() => {
    axios
  .get(`${process.env.REACT_APP_API_URL}/client/${projectToEdit}`, {headers: { Authorization: `Bearer ${storedToken}` }})
  .then((response) => {

    setName(response.data.name)

      })
      .catch((err) => console.log(err));

  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name };

    axios
      .put(`${process.env.REACT_APP_API_URL}/client/${projectToEdit}`, body, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {

      setName('');
      viewToggle('home')
    
      })
      .catch((err) => console.log(err));

      
  };

  const deleteProject = () => {

    axios
      .delete(`${process.env.REACT_APP_API_URL}/client/${projectToEdit}`, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then(() => {
        viewToggle('home')

      })
      .catch((err) => console.log(err));
    
    }


  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>Edit Project</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="name" value={name} onChange={handleName} />
              <div className="btn-box-left">
              <button className="black-btn-left" type="submit"> Update Project </button>
              <button className="purple-btn" onClick={deleteProject}> Delete Project </button>
              </div>
          </form>
          </div>
      </div>
    </div>
  )

}

export default EditProject