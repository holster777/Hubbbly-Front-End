import React from 'react'

function CardLayout(props) {

  const {cardInfo, viewToggle} = props;

  console.log('cardInfo', cardInfo)

      if (cardInfo.cardType === 'moodboard') {
      return (
        <>
        <button onClick={() => {

          console.log('hello')
          
          viewToggle('cardList')}}>Back</button>
        <div className="moodboard">

        <h1>{cardInfo.name}</h1>
        <h4>{cardInfo.description}</h4>
        {cardInfo && cardInfo.images.map((image) => {

        return <div style={{width: 100, height: 100}} alt=""><img src={image}/></div>

        })}

        {cardInfo.colors.map((color) => {

        return <div style={{width:50, height:50, borderRadius: 50, backgroundColor:`${color}`, margin: 10}}></div>

        })}

            
      </div>
      </>
      )}

      if (cardInfo.cardType === 'colorPalette') {
        return (

          <div>
            <h1>{cardInfo.name}</h1>
            <h4>{cardInfo.description}</h4>
            <div className="color-flex">
              {cardInfo.colors.map((color, index) => {

              return( 
              
              <>
              <div style={{width:100, height:100, backgroundColor:`${color}`, margin: 10}}></div>
              <h3 className="color-name">{cardInfo.colorName[index]}</h3>
              <p className="hex">HEX: {cardInfo.colors[index]}</p>
              <p className="note">{cardInfo.colorNotes[index]}</p>
              </>
              
              )
            


      })}

            <button onClick={() => viewToggle('cardList')}>Back</button>

      </div>
      </div> )

      
    }}

export default CardLayout