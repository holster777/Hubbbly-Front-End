import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import CardLayout from '../CardLayout/CardLayout';


function CardList(props) {

    const {projectCards, viewToggle, showCardLayout} = props

    const [cardDetails, setCardDetails] = useState(showCardLayout)

    const [cardInfo, setCardInfo] = useState(null);

    useEffect(() => {
      setCardDetails(showCardLayout)
  
    }, [props]);

  return (
    <div className="main-container">
          
           { !cardInfo && ( 
           <>
           
           <h3>Documents</h3>
            <div className="row">
              <button className="card-btn" onClick={() => viewToggle('newCard')}>+</button>
            {projectCards.map((card) => {
                    return (
                        <div className="card" key={card._id} onClick={() => {

                          setCardInfo(card)
                        
                          
                          }}>
                         <h3>{card.name}</h3>
                        </div>
                    )
            })}
            </div>
            </>
            
            )}

            {cardInfo && <CardLayout cardInfo={cardInfo} viewToggle={viewToggle}/>}

    </div>

)}

export default CardList