import React from "react"; 

const RVOwnerCard = props => {
  
  return(
    <>
    <p> Location: { props.owner.location } </p>
    <p> Description: { props.owner.description } </p>
    <p> Price Per Day: { props.owner.price_per_day } </p> 
    </>
  )
}

export default RVOwnerCard; 