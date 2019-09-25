import React from "react"; 

const LandownersFormCard = props => {
    console.log("This is props from LandownersFormCard", props)

    return(
        <>
        <p> Location: { props.view.location } </p>
        <p> Description: { props.view.description } </p>
        <p> Price Per Day: { props.view.price_per_day } </p> 
        </>
    )
}

export default LandownersFormCard; 