import React, { useState } from "react"; 
import axiosWithAuth from "../components/utilities/axiosWithAuth"; 
import LandownerForm from "../components/landowners/LandownerForm.js";
 
export const UpdateLandownerForm = props => {
    
    const [edit, setEdit] = useState({
      
        location: "", 
        description: "", 
        price_per_day: "", 
    })

    const [error, setError] = useState(null)

    

    const editFunction = event => {
        event.preventDefault() 
        axiosWithAuth()
        .put(`https://rvbnb.herokuapp.com/api/listings/${props.updateId}`, edit)
        .then(res => {
            console.log("Res from editFunction", res)
            props.history.push("/landownerform")
            // getData()
        })
        .catch(error => {
            console.log(error)
            setError("Update Request Failed")
        }, [])
        
    };

   
    return(
        <>
        <h2> Update Listings </h2>
        <form onSubmit={editFunction}> 
        <input required
        type="text"
        name="location"
        placeholder="enter location"
        value={edit.location}
        onChange={event => setEdit({
            ...edit, location: event.target.value
        })}
        />
        <input required
        type="text"
        name="description"
        placeholder="Enter description"
        value={edit.description}
        onChange={event => setEdit({
            ...edit, description: event.target.value
        })}
        />
        <input required
        type="text"
        name="price_per_day"
        placeholder="Enter price per day"
        value={edit.price_per_day}
        onChange={event => {
           setEdit({...edit, price_per_day: event.target.value}) 
        }}
        />
        <button> Update </button>
        </form>
        { error && <h3> { error } </h3> }
        </>
    )
}

export default UpdateLandownerForm; 
