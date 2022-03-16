import React from 'react'

function CardLayout(props) {

  const {cardInfo} = props;

  console.log('cardInfo', cardInfo)

      if (cardInfo.cardType === 'moodboard') {
      return (
        <div className="moodboard">

        <h1>{cardInfo.name}</h1>
        <h4>{cardInfo.description}</h4>
        {cardInfo && cardInfo.images.map((image) => {

        return <div style={{width: 100, height: 100}} alt=""><img src={{image}}/></div>

        })}

        <img src="https://imgur.com/l7m0Rp4"/>
            

      </div>

      )}

      if (cardInfo.cardType === 'colorPalette') {
        return (

          <div>
            <h1>{cardInfo.name}</h1>
            <h4>{cardInfo.description}</h4>
            <div>
              {cardInfo.colors.map((color) => {

              return <div style={{width:100, height:100, backgroundColor:`${color}`}}></div>

              })}
              {cardInfo.colorName.map((colorName) => {

                return <h3>{colorName}</h3>

              })}
              {cardInfo.colorNotes.map((colorNote) => {

                return <p>{colorNote}</p>

            })}
            </div>
          </div>
        )


      }

      else {

        return <h1> hello</h1>


      }

{/* cardColors.map((color) => {
return (
<div className="color-box" style= "background-color:{color}; width: 100px; height: 100px;"></div>


  )}) */}

      
    }

export default CardLayout