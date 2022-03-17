import React from 'react'

function CardLayout(props) {

  const {cardInfo, viewToggle, projectCards, fetchCards, setCardInfo} = props;

  console.log('cardInfo', cardInfo)

      if (cardInfo.cardType === 'moodboard') {
      return (
        <>
        <button className="back-btn" onClick={() => {
          setCardInfo(null)
          fetchCards() 
          viewToggle('cardList')}}>&#9664; Back</button>
        <div className="moodboard">

        <h1>{cardInfo.name}</h1>
        <h4>{cardInfo.description}</h4>
        <div className="img-row">
        {cardInfo && cardInfo.images.map((image) => {

        return <div style={{width: 150, height: 150, margin: 10}}><img src={image} style={{width:150, height:150}}/></div>

        })}
        </div>
            
      </div>
      </>
      )}


      if (cardInfo.cardType === 'image') {

        return (
          
          <>
          <button className="back-btn" onClick={() => {
          setCardInfo(null)
          fetchCards() 
          viewToggle('cardList')}}>&#9664; Back</button>
          <div className="brand-mockups">
          <h1>{cardInfo.name}</h1>
          <h4>{cardInfo.description}</h4> 
          <div className="mock-ups">
          {cardInfo.images.map((image) => {

            return <div style={{width: 350, height: 350, margin: 10}}><img src={image} style={{width:350, height:350}}/></div>


          })}
          </div>
          </div>
          </>

        )

      }

      if (cardInfo.cardType === 'colorPalette') {
        return (
          <>

          <button className="back-btn" onClick={() => {
            setCardInfo(null)
            fetchCards()
            viewToggle('cardList')}}>&#9664; Back</button>
          <div>
            <h1>{cardInfo.name}</h1>
            <h4>{cardInfo.description}</h4>
            <div className="flex-row">
              {cardInfo.colors.map((color, index) => {

              return( 
              
              <div className="color-flex">
              <div style={{width:100, height:100, backgroundColor:`${color}`, margin: 10}}></div>
              <h3 className="color-name">{cardInfo.colorName[index]}</h3>
              <p className="hex">HEX: {cardInfo.colors[index]}</p>
              <p className="note">{cardInfo.colorNotes[index]}</p>
              </div>
              
              )

      })}

      

      </div>
      </div> 
      </>
      )

     }}

export default CardLayout