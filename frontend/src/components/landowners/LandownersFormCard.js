import React from "react";
import axiosWithAuth from "../utilities/axiosWithAuth.js"; 

const LandownersFormCard = props => {
    console.log("This is props from LandownersFormCard", props)

    const updateform = () => {
        props.setUpdateId(props.view.id)
        props.history.push("/updatelandownerform")
    }

    const getData = () => {
        axiosWithAuth()
        .get("https://rvbnb.herokuapp.com/api/listings")
        .then(res => {
            console.log("Data from useEffect on landownerform file", res)
            props.setViewAdded(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }


    const deleteFunction = () => {
        axiosWithAuth() 
       .delete(`https://rvbnb.herokuapp.com/api/listings/${props.view.id}`)
       .then(res => {
       console.log("res from deleteFunction", res)
       getData()
       })
       .catch(error => {
          console.log("error from deleteFunction", error)
       })
    }

    return(
        <>
        <p> Location: { props.view.location } </p>
        <p> Description: { props.view.description } </p>
        <p> Price Per Day: { props.view.price_per_day } </p> 
        <button onClick={updateform}> Update </button>
        <button onClick={deleteFunction}> Delete </button>
        
        </>
    )
}

export default LandownersFormCard; 