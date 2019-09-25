import React from "react"; 
import axiosWithAuth from "../components/utilities/axiosWithAuth"; 
import getData from "../components/landowners/LandownerForm.js"; 

const UpdateLandownerForm = () => {
    
    const [edit, setEdit] = useState({
        id: 2,
        owner_id: 2, 
        location: "", 
        description: "", 
        price_per_day: "", 
    })

    const Edit = event => {
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
    }
        
//     const Delete = event => {
//      event.preventDefault();   
//     .delete(``)
//     .then(response => {
//     console.log(response.data)
//     })
//     .catch(error => {
//        console.log(error)
//     })
// }

    return(
        <>
        <form onSubmit={Edit}> 
            
            
        </form>
        </>
    )
}

export default UpdateLandownerForm; 

