import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function CreateCard(props) {
    
const {viewToggle, client} = props
   
  const [name, setName] = useState('');
  const [cardType, setCardType] = useState('');
  const [description, setDescription] = useState('');
  const [formType, setFormType] = useState('')

  // images
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [image6, setImage6] = useState('')
  const [image7, setImage7] = useState('')
  const [image8, setImage8] = useState('')
  const [image9, setImage9] = useState('')

  //colors
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [color3, setColor3] = useState('')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('')
  const [color6, setColor6] = useState('')

  const [color1Name, setColor1Name] = useState('')
  const [color2Name, setColor2Name] = useState('')
  const [color3Name, setColor3Name] = useState('')
  const [color4Name, setColor4Name] = useState('')
  const [color5Name, setColor5Name] = useState('')
  const [color6Name, setColor6Name] = useState('')

  const [color1Note, setColor1Note] = useState('')
  const [color2Note, setColor2Note] = useState('')
  const [color3Note, setColor3Note] = useState('')
  const [color4Note, setColor4Note] = useState('')
  const [color5Note, setColor5Note] = useState('')
  const [color6Note, setColor6Note] = useState('')
  
  //card Info
  const handleName = (e) => setName(e.target.value);
  const handleCardType = (e) => setCardType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  //images
  const handleImage1 = (e) => setImage1(e.target.value);
  const handleImage2 = (e) => setImage2(e.target.value);
  const handleImage3 = (e) => setImage3(e.target.value);
  const handleImage4 = (e) => setImage4(e.target.value);
  const handleImage5 = (e) => setImage5(e.target.value);
  const handleImage6 = (e) => setImage6(e.target.value);
  const handleImage7 = (e) => setImage7(e.target.value);
  const handleImage8 = (e) => setImage8(e.target.value);
  const handleImage9 = (e) => setImage9(e.target.value);

  //colors
  const handleColor1 = (e) => setColor1(e.target.value);
  const handleColor2 = (e) => setColor2(e.target.value);
  const handleColor3 = (e) => setColor3(e.target.value);
  const handleColor4 = (e) => setColor4(e.target.value);
  const handleColor5 = (e) => setColor5(e.target.value);
  const handleColor6 = (e) => setColor6(e.target.value);

  const handleColor1Name = (e) => setColor1Name(e.target.value);
  const handleColor2Name = (e) => setColor2Name(e.target.value);
  const handleColor3Name = (e) => setColor3Name(e.target.value);
  const handleColor4Name = (e) => setColor4Name(e.target.value);
  const handleColor5Name = (e) => setColor5Name(e.target.value);
  const handleColor6Name = (e) => setColor6Name(e.target.value);

  const handleColor1Note = (e) => setColor1Note(e.target.value);
  const handleColor2Note = (e) => setColor2Note(e.target.value);
  const handleColor3Note = (e) => setColor3Note(e.target.value);
  const handleColor4Note = (e) => setColor4Note(e.target.value);
  const handleColor5Note = (e) => setColor5Note(e.target.value);
  const handleColor6Note = (e) => setColor6Note(e.target.value);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, description, cardType, 
        images: image1, image2, image3, image4, image5, image6, image7, image8, image9, 
        colors: color1, color2, color3, color4, color5, color6, 
        colorName: color1Name, color2Name, color3Name, color4Name, color5Name, color6Name,
        colorNotes: color1Note, color2Note, color3Note, color4Note, color5Note, color6Note
    };

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
      <div className="card-form-container">
          <div className="card-form">
          <h1>Create Card</h1>
          <form onSubmit={handleSubmit}>
              <div className="card-form-intro">
                <div className="card-details">
                    <input type="text" name="name" placeholder="name" value={name} onChange={handleName} />
                    <input type="text" name="description" placeholder="description" value={description} onChange={handleDescription} />
                </div>
                    <div className="flex-row-card">
                        <input type="radio" id="moodboard" name="cardType" value="moodboard" onClick={() => setFormType('moodboard')} onChange={handleCardType}/>
                        <label htmlFor="moodboard">Moodboard</label>

                        <input type="radio" id="colorPalette" name="cardType" value="colorPalette" onClick={() => setFormType('colorPalette')} onChange={handleCardType} />
                        <label htmlFor="colorPalette">Color Palette</label>

                        <input type="radio" id="image" name="cardType" value="image" onClick={() => setFormType('image')} onChange={handleCardType} />
                        <label htmlFor="image">Image</label>

                        <input type="radio" id="font" name="cardType" value="font" onClick={() => setFormType('font')} onChange={handleCardType} />
                        <label htmlFor="font">Font</label>
                    </div>
                </div>

                <div className="form-row">

                {(formType === 'moodboard') &&

                <div className='form-col'>

                    <h3> Images </h3>

                    <input type="text" name="image1" placeholder="url" value={image1} onChange={handleImage1} />
                    <input type="text" name="image2" placeholder="url" value={image2} onChange={handleImage2} />
                    <input type="text" name="image3" placeholder="url" value={image3} onChange={handleImage3} />
                    <input type="text" name="image4" placeholder="url" value={image4} onChange={handleImage4} />
                    <input type="text" name="image5" placeholder="url" value={image5} onChange={handleImage5} />
                    <input type="text" name="image6" placeholder="url" value={image6} onChange={handleImage6} />
                    <input type="text" name="image7" placeholder="url" value={image7} onChange={handleImage7} />
                    <input type="text" name="image8" placeholder="url" value={image8} onChange={handleImage8} />
                    <input type="text" name="image9" placeholder="url" value={image9} onChange={handleImage9} />

                </div>

                

}
            {(formType === 'colorPalette') &&
                <div className='form-color-row'>

                    <div className="form-col">

                        <h3> Colors </h3>

                        <input type="text" name="color1" placeholder="Color 1: HEX" value={color1} onChange={handleColor1} />
                        <input type="text" name="color2" placeholder="Color 2: HEX" value={color2} onChange={handleColor2} />
                        <input type="text" name="color3" placeholder="Color 3: HEX" value={color3} onChange={handleColor3} />
                        <input type="text" name="color4" placeholder="Color 4: HEX" value={color4} onChange={handleColor4} />
                        <input type="text" name="color5" placeholder="Color 5: HEX" value={color5} onChange={handleColor5} />
                        <input type="text" name="color6" placeholder="Color 6: HEX" value={color6} onChange={handleColor6} />

                    </div>


                    <div className="form-col">

                        <h3>Color Name</h3>
                        <input type="text" name="color1Name" placeholder="Color 1: Name" value={color1Name} onChange={handleColor1Name} />
                        <input type="text" name="color2Name" placeholder="Color 2: Name" value={color2Name} onChange={handleColor2Name} />
                        <input type="text" name="color3Name" placeholder="Color 3: Name" value={color3Name} onChange={handleColor3Name} />
                        <input type="text" name="color4Name" placeholder="Color 4: Name" value={color4Name} onChange={handleColor4Name} />
                        <input type="text" name="color5Name" placeholder="Color 5: Name" value={color5Name} onChange={handleColor5Name} />
                        <input type="text" name="color6Name" placeholder="Color 6: Name" value={color6Name} onChange={handleColor6Name} />

                    </div>

                    <div className="form-col">

                        <h3>Color Note</h3>
                        <input type="text" name="color1Note" placeholder="Color 1: Notes" value={color1Note} onChange={handleColor1Note} />
                        <input type="text" name="color2Note" placeholder="Color 2: Notes" value={color2Note} onChange={handleColor2Note} />
                        <input type="text" name="color3Note" placeholder="Color 3: Notes" value={color3Note} onChange={handleColor3Note} />
                        <input type="text" name="color4Note" placeholder="Color 4: Notes" value={color4Note} onChange={handleColor4Note} />
                        <input type="text" name="color5Note" placeholder="Color 5: Notes" value={color5Note} onChange={handleColor5Note} />
                        <input type="text" name="color6Note" placeholder="Color 6: Notes" value={color6Note} onChange={handleColor6Note} />

                    </div>

                </div>

}
        {(formType === 'image') &&

                <div className="form-col">

                    <h3> MockUps </h3>

                    <input type="text" name="image1" placeholder="url" value={image1} onChange={handleImage1} />
                    <input type="text" name="image2" placeholder="url" value={image2} onChange={handleImage2} />
                    <input type="text" name="image3" placeholder="url" value={image3} onChange={handleImage3} />
                    <input type="text" name="image4" placeholder="url" value={image4} onChange={handleImage4} />

                </div>

}

                </div>

      
         <button type="submit"> Create Card </button>
          </form>
          </div>
      </div>
    </div>
  )
    

}

export default CreateCard