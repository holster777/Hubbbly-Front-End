//import section for utils
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Home() {

    const [products, setProducts] = useState([]);
    const [changePics, setChangePics] = useState('')

    const changePhotos = (pic) => {
        setChangePics(pic);
      };


    useEffect(() => {
        
        axios.get(`https://picsum.photos/400`)
        .then((response) =>{
            console.log(response)
          setProducts(response)}).catch((err) =>
            console.log(err));
    }, [changePics]);
    
    
        return (
        <div className="photo-container">
        <h1>Inspiration?</h1>
        { products && 
        <div className="photo-grid"> 
        <img src="https://picsum.photos/200/?random=1"/>
        <img src="https://picsum.photos/200/?random=2"/>
        <img src="https://picsum.photos/200/?random=3"/>
        <img src="https://picsum.photos/200/?random=4"/>
        <img src="https://picsum.photos/200/?random=5"/>
        <img src="https://picsum.photos/200/?random=6"/>
        <button className="black-btn" onClick={() => changePhotos}>New Images</button> 
        </div>}
        </div>
        
      )
    };

export default Home