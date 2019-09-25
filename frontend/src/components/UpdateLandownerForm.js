import React, { useState } from "react"; 
import axiosWithAuth from "../components/utilities/axiosWithAuth"; 
import getData from "../components/landowners/LandownerForm.js"; 
import LandownerForm from "../components/landowners/LandownerForm.js";

export const UpdateLandownerForm = props => {
    
    const [edit, setEdit] = useState({
        // id: 2,
        owner_id: 2, 
        location: "", 
        description: "", 
        price_per_day: "", 
    })
    
    const editFunction = event => {
        event.preventDefault() 
        axiosWithAuth()
        .put(`https://rvbnb.herokuapp.com/api/listings/${edit.id}`, edit)
        .then(res => {
            console.log(res)
            getData()
        })
        .catch(error => {
            console.log(error)
        }, [])
    };

//      const Delete = event => {
//         event.preventDefault();  
//         axiosWithAuth() 
//        .delete(`https://rvbnb.herokuapp.com/api/listings/SOMETHING-GOES-HERE`)
//        .then(response => {
//        console.log(response.data)
//        })
//        .catch(error => {
//           console.log(error)
//        })
//    }
    
    return(
        <>
        <form onSubmit={editFunction}> 
        <input 
        type="text"
        name="location"
        placeholder="enter location"
        value={props.location}
        onChange={event => setEdit({
            ...edit, location: event.target.value
        })}
        />
        <input 
        type="text"
        name="description"
        placeholder="enter description"
        value={props.description}
        onChange={event => setEdit({
            ...edit, description: event.target.value
        })}
        />
        <input
        type="text"
        name="price_per_day"
        placeholder="enter price per day"
        value={props.price_per_day}
        onChange={event => {
           setEdit({...edit, price_per_day: event.target.value}) 
        }}
        />
        {/* <button onclick={}> Update </button> */}
        </form>
        </>
    )
}

export default UpdateLandownerForm; 
