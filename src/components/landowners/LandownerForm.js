import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth.js"; 
import LandownersFormCard from "./LandownersFormCard.js";
import NavBar from "../NavBar"
import {
    LandOwnerHeading,
    Description2,
    Button,
    ButtonDiv,
    SearchBar,
      } from "../styling/styled"

  const LandownerForm = props => {
    console.log("landownerform props", props)
    // State below is set to add to the listings (.post() state)
    const [landAdd, setLandAdd] = useState({

        location: "", 
        description: "", 
        price_per_day: "", 
        photo: ""
    })

    // State below allows land owners to view their listings they created/edited/deleted (.get() state)

    const [viewAdded, setViewAdded] = useState([
        {
            
        // id: 2,
        // owner_id: 2,     
        location: "", 
        description: "", 
        price_per_day: "",
        photo: ""
        }
    ])

    useEffect(() => {
        getData()
    }, [landAdd])


    const getData = () => {
        axiosWithAuth()
        .get("https://rvbnb.herokuapp.com/api/listings")
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
        <NavBar/>
        <LandOwnerHeading> Hello Land Owner! </LandOwnerHeading>
        <Description2>
        Please use the following form to create your listing! Please remember to
        be accurate in your location and descriptions as this will help match
        you with the perfect renter.
        </Description2>

        <form onSubmit={postData}> 
        <ButtonDiv>
        <SearchBar 
        type="text"
        name="location"
        placeholder="Enter location"
        value={landAdd.location}
        onChange={handleChange}
        />
        </ButtonDiv>
        <ButtonDiv>
       <SearchBar
       type="text"
       name="price_per_day"
       placeholder="Please enter how much you would like to charge per day"
       value={landAdd.price_per_day}
       onChange={handleChange}
       />
       </ButtonDiv>
       <ButtonDiv>
        <SearchBar 
        type="text"
        name="description"
        placeholder="Please enter a description of your land"
        value={landAdd.description}
        onChange={handleChange}
        />
    </ButtonDiv>
        <ButtonDiv>
        <Button type="submit"> Submit </Button> 
        </ButtonDiv>
        </form>
        <div> 
        { viewAdded.map(view => (
            <LandownersFormCard key={view.id} view={view} history={props.history} setUpdateId={props.setUpdateId} setViewAdded={setViewAdded}  />
        ))}
        </div>
        </>
    )
}

export default LandownerForm; 
