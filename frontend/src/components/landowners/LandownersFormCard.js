import React from "react"; 

const LandownersFormCard = props => {
    console.log("This is props from LandownersFormCard", props)

    return(
        <>
        <h3> Location: { props.view.location } </h3>
        <h3> Description: { props.view.description } </h3>
        <h3> Price Per Day: { props.view.price_per_day } </h3> 
        </>
    )
}

export default LandownersFormCard; 