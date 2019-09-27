import React, {useState} from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom"; 
import NavBar from "../NavBar"
import {
  RVRegisterHeading,
  Label,
  Description,
  Button,
  ReRouteLogin,
  ButtonDiv,
  ReRouteDiv
} from "../styling/styled"

const RVRegister = props => {
    const [RVOwners, setRVOwners]= useState({ username:"", password:"", is_land_owner: false});

    
const handleSubmit = event => {
    event.preventDefault() 
    axios
    .post('https://rvbnb.herokuapp.com/api/auth/register', RVOwners)
    .then(res => {
        console.log("", res)
        localStorage.setItem("token", res.data.token)
        props.history.push("/rvlogin")
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
        <NavBar />
    <RVRegisterHeading> Register As RV Owner </RVRegisterHeading>
    <Description>
          To Register your RV, you will need to create a username and password.
          <br />
          The password must contain at least 8 characters.
        </Description>
    <form onSubmit={handleSubmit}>
    <Label>Username</Label>
    <input type="text" name="username" placeholder="UserName"
    onChange={handleChange} value={props.username}/>
        <Label>Password</Label>
    <input type="text" name="password" placeholder="password"
    onChange={handleChange} value={props.password} />

        <ButtonDiv> 
          <Button> Register </Button>
        </ButtonDiv>
        <ReRouteDiv>
        <ReRouteLogin> <Link to="/rvlogin"> Already have an account? 
         </Link>
         </ReRouteLogin>
         </ReRouteDiv>
        </form>
      </div>
    ) 
}

export default RVRegister;