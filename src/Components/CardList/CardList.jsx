import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import CardLayout from '../CardLayout/CardLayout';


function CardList(props) {

    const {projectCards} = props

    const [cardInfo, setCardInfo] = useState(null);

  return (
    <div className="main-container">
          
           { !cardInfo && ( 
           <>
           
           <h3>Documents</h3>
            <div className="row">
            {projectCards.map((card) => {
                    return (
                        <div className="card" key={card._id} onClick={() => setCardInfo(card)}>
                         <h3>{card.name}</h3>
                        </div>
                    )
            })}
            </div>
            </>
            
            )}

            {cardInfo && <CardLayout cardInfo={cardInfo}/>}

    </div>

)}

export default CardList