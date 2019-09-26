import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth.js";
import RVOwnerCard from './RVOwnerCard';
// import RVReserveCard from './RVReserveCard';

const RVOwnersView = () => {

    const [find, setFind ] = useState("")

    const [owners, setOwners] = useState([
        {

            id: 1,
            owner_id: 1,
            location: "",
            description: "",
            price_per_day: "",
            photo: ""

        }
    ]);

    useEffect(() => {
        axiosWithAuth()
            .get("https://rvbnb.herokuapp.com/api/listings/", owners)
            .then(res => {
                console.log("Data from useEffect on RVownersView file", res)
                setOwners(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleChange = event => {
        setFind(
            event.target.value
        )
    } 

    const handleSubmit = event => {
        event.preventDefault()
    }

    const filterFunction = owners.filter(owner => 
        owner.location
        .toLowerCase()
        .includes(find.toLowerCase())

    ) 
    console.log(filterFunction.length)

    return (
        <div className="owner-list">

            <h2> Welcome RV Owners! </h2>
            <p> Feel free to browse around </p>

            <form onSubmit={handleSubmit}> 
            <input 
            type="text"
            name="location"
            placeholder="enter location"
            value={find}
            onChange={handleChange}
            />
            
            <button> Search </button>
            </form>
            <div> 
           {/* Below is the map that allows to render the end point */}
              {filterFunction.map(owner => {
              return  <RVOwnerCard key={owner.id} owner={owner} />
            })}
            </div>
        </div>
    );

} 

    
export default RVOwnersView; 
