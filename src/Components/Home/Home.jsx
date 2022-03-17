//import section for utils
import {useState, useEffect} from 'react';
import axios from 'axios';


function Home() {

    const [products, setProducts] = useState([]);

    const changePhotos = () => {
        axios.get(`https://picsum.photos/v2/list?limit=6`)
        .then((response) => {
            console.log(response)
            setProducts(response.data)})
        .catch((err) =>
            console.log(err));

      };


    useEffect(() => {
    changePhotos()
    }, []);
    
    
        return (
        <div className="photo-container">
        <h1>Inspiration?</h1>
        <div className="photo-grid"> 
        {products && products.map((img) => {

            return (<img className="photo"src={img.download_url}/>)

        })}
        
        </div>
        </div>
        
      )
    };

export default Home