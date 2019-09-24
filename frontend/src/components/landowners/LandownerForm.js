import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth.js";  

const LandownerForm = props => {
    
    // State below is set to add to the listings (.post() state)
    const [landAdd, setLandAdd] = useState([
        {

        id: 1,
        owner_id: 1, 
        location: "", 
        description: "", 
        price_per_day: "", 
        // photo: ""
        
        }
    ])

    // State below allows land owners to view their listings they created/edited/deleted (.get() state)

    const [viewAdded, setViewAdded] = useState({
        id: 2,
        owner_id: 2, 
        location: "", 
        description: "", 
        price_per_day: "", 
    })

    useEffect(() => {
        axiosWithAuth()
        .get("https://rvbnb.herokuapp.com/api/listings", viewAdded)
        .then(res => {
            console.log("Data from useEffect on landownerform file", res)
            setViewAdded({viewAdded: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const postData = event => {
        event.preventDefault()
        axiosWithAuth()
        .post("https://rvbnb.herokuapp.com/api/listings", landAdd )
        .then(res => {
            console.log(res)
            setLandAdd({landAdd: res.data})
        })
        .catch(error => {
            console.log("error from landownerform handle submit", error)
        }, [])
    } 

    const handleChange = event => {
        setLandAdd({
            ...landAdd, 
            [event.target.name]: event.target.value
        })
    }

    return(
        <>
        <h2> Hello Land Owner! </h2>
        <p> create a listing below  </p>  
        <form onSubmit={postData}> 
        <input 
        type="text"
        name="location"
        placeholder="enter location"
        value={props.location}
        onChange={handleChange}
        />
        <input 
        type="text"
        name="description"
        placeholder="enter description"
        value={props.description}
        onChange={handleChange}
        />
        <input
        type="text"
        name="price per day"
        placeholder="enter price per day"
        value={props.price_per_day}
        onChange={handleChange}
        />
        <button> Submit </button> 
        </form>
        </>
    )
}

export default LandownerForm; 
