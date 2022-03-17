import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import CardLayout from '../CardLayout/CardLayout';


function CardList(props) {

    const {projectCards, viewToggle, fetchCards} = props

    const [cardInfo, setCardInfo] = useState(null);


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

            {cardInfo && <CardLayout setCardInfo={setCardInfo} cardInfo={cardInfo} viewToggle={viewToggle} projectCards={projectCards} fetchCards={fetchCards}/>}

    </div>

)}

export default CardList