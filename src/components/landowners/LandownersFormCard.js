import React from "react";
import axiosWithAuth from "../utilities/axiosWithAuth.js"; 
import { Description3, Button2, CardDiv,ButtonDiv, LandImage } from "../styling/styled"

const LandownersFormCard = props => {
    console.log("This is props from LandownersFormCard", props)

    const updateform = () => {
        props.setUpdateId(props.view.id)
        console.log("console from updateform", props.view.id)
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
        <ButtonDiv>
        <CardDiv>
        <LandImage src="https://www.nationalgeographic.com/content/dam/travel/2017-digital/french-riviera/villefranche-sur-mer-harbour-france.jpg" alt="This is a generic image of land"/>
        <Description3> Location: {props.view.location} </Description3>
        <Description3> Description: {props.view.description} </Description3>
        <Description3> Price Per Day: {props.view.price_per_day} </Description3> 
        <Button2 onClick={updateform}> Update </Button2>
        <Button2 onClick={deleteFunction}> Delete </Button2>
        </CardDiv>
        </ButtonDiv>
        </>
    )
}

export default LandownersFormCard; 