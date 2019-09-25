import React from "react";
import  Edit  from "../UpdateLandownerForm.js"; 

const LandownersFormCard = props => {
    console.log("This is props from LandownersFormCard", props)

    return(
        <>
        <p> Location: { props.view.location } </p>
        <p> Description: { props.view.description } </p>
        <p> Price Per Day: { props.view.price_per_day } </p> 
        {/* <button> Delete </button> */}
        <button onSubmit={Edit}> Update </button>
        
        </>
    )
}

export default LandownersFormCard; 