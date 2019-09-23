import React, {useState} from 'react';
import axios from "axios"; 

function RVLogin(props) {
    const [RVOwners, setRVOwners]= useState({ username:"", password:""});

    
const handleSubmit = event => {
    event.preventDefault() 
    axios
    .post('https://rvbnb.herokuapp.com/api/auth/login')
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        props.history.push("/login")
    })
    .catch(error => {
        console.log("This is an error from RVRegister", error)
    }, [])
}


 const handleChange = event =>{ setRVOwners ({ ...RVOwners, [event.target.name]: event.target.value

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
    <button type="submit">Register</button>
        </form>
      </div>
    ) 
}

export default RVLogin;