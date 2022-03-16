import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function CreateCard(props) {

    const {viewToggle, client} = props
   
  const [name, setName] = useState('');
  const [cardType, setCardType] = useState('');
  const [description, setDescription] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleCardType = (e) => setName(e.target.value);
  const handleDescription = (e) => setName(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { clientId: client, name };

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(`${process.env.REACT_APP_API_URL}/client/new-project`, body, {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {

      setName('');
      viewToggle('home')
    
      })
      .catch((err) => console.log(err));

      
  };


  return (
    <div>
      <NavBar />
      <div className="auth-container">
          <div className="auth-form">
          <h1>Create Card</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="name" value={name} onChange={handleName} />
              <input type="text" name="description" placeholder="description" value={description} onChange={handleDescription} />
              <input type="radio" id="moodboard" name="cardType" value="moodboard" onChange={handleCardType}/>
                <label htmlFor="moodboard">Moodboard</label>
                <input type="radio" id="colorPalette" name="cardType" value="colorPalette" onChange={handleCardType} />
                <label htmlFor="colorPalette">Color Palette</label>
                <input type="radio" id="image" name="cardType" value="image" onChange={handleCardType} />
                <label htmlFor="image">Image</label>
                <input type="radio" id="font" name="cardType" value="font" onChange={handleCardType} />
                <label htmlFor="font">Font</label>
              <button type="submit"> Create Card </button>
          </form>
          </div>
      </div>
    </div>
  )

}

export default CreateCard