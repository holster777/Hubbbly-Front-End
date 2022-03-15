import React from 'react'

function CardLayout(props) {

  const {cardInfo} = props;

  console.log(cardInfo.images)

      if (cardInfo.cardType === 'moodboard') {
      return (
        <div className="moodboard">

        <h1>moodboard</h1>
        {cardInfo.images.forEach((image) => {


        <div> </div> 

        })}
            

      </div>

      )}

      if (cardInfo.cardType === 'colorPalette') {
        return (

          <div>
            <h1>ColorPalette</h1>
            {cardInfo.colors.forEach((color) => {

             <p>{this}</p>

            


            })}


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