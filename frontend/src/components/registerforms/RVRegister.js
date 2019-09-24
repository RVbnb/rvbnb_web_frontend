import React, {useState} from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom"; 

const RVRegister = props => {
    const [RVOwners, setRVOwners]= useState({ username:"", password:"", is_land_owner: false});

    
const handleSubmit = event => {
    event.preventDefault() 
    axios
    .post('https://rvbnb.herokuapp.com/api/auth/register', RVOwners)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        props.history.push("/login")
    })
    .catch(error => {
        console.log("This is an error from RVRegister", error)
    }, [])
}


const handleChange = event =>{ setRVOwners({...RVOwners, [event.target.name]: event.target.value

    }); 
};
    
    return (
<div className="rv-owner"> 
    <form onSubmit={handleSubmit}>
        <label>UserName</label>
    <input type="text" name="username" placeholder="UserName"
    onChange={handleChange} value={props.username}/>
    <label>Password</label>
    <input type="text" name="password" placeholder="password"
    onChange={handleChange} value={props.password} />
    <button type="submit"> Register </button>
    <Link to="rvlogin"> <div> Already have an account? </div> </Link>
        </form>
      </div>
    ) 
}

export default RVRegister;