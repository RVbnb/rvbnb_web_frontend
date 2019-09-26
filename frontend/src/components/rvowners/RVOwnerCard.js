import React from "react"; 
import { CardDiv, Description3, ButtonDiv, LandImage} from "../styling/styled"

const RVOwnerCard = props => {
  
  return(
    <>
      <ButtonDiv>
      <CardDiv>
      <LandImage src="https://www.nationalgeographic.com/content/dam/travel/2017-digital/french-riviera/villefranche-sur-mer-harbour-france.jpg" alt="This is a generic image of land"/>
        <Description3> Location: {props.owner.location} </Description3>
        <Description3> Description: {props.owner.description} </Description3>
        <Description3>Price Per Day: {props.owner.price_per_day}</Description3>
        </CardDiv>
      </ButtonDiv>
    </>
  )
}

export default RVOwnerCard; 