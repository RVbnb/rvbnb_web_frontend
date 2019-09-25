import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth.js";  
import LandownersFormCard from "./LandownersFormCard.js";

const LandownerForm = props => {
    console.log("landownerform props", props)
    // State below is set to add to the listings (.post() state)
    const [landAdd, setLandAdd] = useState({
        owner_id: 1, 
        location: "", 
        description: "", 
        price_per_day: "", 
        photo: ""
    })

    // State below allows land owners to view their listings they created/edited/deleted (.get() state)

    const [viewAdded, setViewAdded] = useState([
        {

        id: 2,
        owner_id: 2, 
        location: "", 
        description: "", 
        price_per_day: "", 

        }
    ])

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        axiosWithAuth()
        .get("https://rvbnb.herokuapp.com/api/listings", viewAdded)
        .then(res => {
            console.log("Data from useEffect on landownerform file", res)
            setViewAdded(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const postData = event => {
        event.preventDefault()
        axiosWithAuth()
        .post("https://rvbnb.herokuapp.com/api/listings", landAdd)
        .then(res => {
            console.log("Coming to you from postData", res)
            setLandAdd({landAdd: res.data})
        })
        .catch(error => {
            console.log("error from landownerform postData", error)
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
        value={landAdd.location}
        onChange={handleChange}
        />
        <input 
        type="text"
        name="description"
        placeholder="enter description"
        value={landAdd.description}
        onChange={handleChange}
        />
        <input
        type="text"
        name="price_per_day"
        placeholder="enter price per day"
        value={landAdd.price_per_day}
        onChange={handleChange}
        />
        <button> Submit </button> 
        </form>
        <div> 
        { viewAdded.map(view => (
            <LandownersFormCard key={view.id} view={view} />
        ))}
        </div> 
        </>
    )
}

export default LandownerForm; 
