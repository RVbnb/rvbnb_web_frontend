import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth.js";
import RVOwnerCard from './RVOwnerCard';
// import RVReserveCard from './RVReserveCard';
import NavBar from "../NavBar"
import { RVHeading, Description2, SearchBar, ButtonDiv } from "../styling/styled"

const RVOwnersView = () => {

    const [find, setFind ] = useState("")

    const [owners, setOwners] = useState([
        {

            id: 1,
            owner_id: 1,
            location: "",
            description: "",
            price_per_day: "",

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
            <NavBar/>
            <RVHeading> Welcome RV Owners! </RVHeading>
            <Description2> Browse for your desired location </Description2>

            <form onSubmit={handleSubmit}> 
            <SearchBar 
            type="text"
            name="location"
            placeholder="Search for your dream destination"
            value={find}
            onChange={handleChange}
            />     
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
