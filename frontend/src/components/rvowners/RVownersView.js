import React, {useState, useEffect} from "react";
import { axiosWithAuth }  from "../utilities/axiosWithAuth.js"; 
import RVOwnerCard from './RVOwnerCard';

const RVOwnersView = (props) => {

const [owners, setOwners]= useState({
    id: 1, 
    owner_id: 1, 
    location: "",
    description: "", 
    price_per_day: "", 
    photo: ""
});

useEffect(() => {
    axiosWithAuth()
    .get("https://rvbnb.herokuapp.com/api/listings", owners)
    .then(res => {
        console.log("Data from useEffect on RVownersView file", res)
        setOwners({owners: res.data})
    })
    .catch(error => {
        console.log(error)
    }, [])
})

return(
    <div className="owner-list">
    <h2> Welcome RV Owners! </h2>
    <p> Feel free to browse around</p> 

    {props.owners.map(owner => (
      <RVOwnerCard key={owner.id} owner={owner} />
    ))}
  </div>
);

}
    
export default RVOwnersView; 