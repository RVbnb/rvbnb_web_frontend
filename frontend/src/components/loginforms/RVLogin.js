import React from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom"; 
import NavBar from '../NavBar';
import {
    RVRegisterHeading,
    Label,
    Button,
    ReRouteLogin,
    ReRouteDiv,
    ButtonDiv
  } from "../styling/styled"
  

class RVLogin extends React.Component {
    state = {
        credentials: {
            username:"", 
            password:""
        }
    }

 handleSubmit = event => {
    event.preventDefault() 
    axios
    .post('https://rvbnb.herokuapp.com/api/auth/login', this.state.credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        this.props.history.push("/rvownersview")
    })
    .catch(error => {
        console.log("This is an error from RVRegister", error)
    }, [])
}


    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(

            <div className="rv-owner"> 
                <NavBar />
                <form onSubmit={this.handleSubmit}>

                <RVRegisterHeading> Login As An RV Owner </RVRegisterHeading> 
                    <Label>UserName</Label>
                <input type="text" name="username" placeholder="UserName"
                onChange={this.handleChange} value={this.state.credentials.username}/>

                <Label>Password</Label>
                
                <input type="text" name="password" placeholder="password"
                onChange={this.handleChange} value={this.state.credentials.password} 
                />

                        <ButtonDiv> 
                        <Button> Login </Button>
                        </ButtonDiv>
                        <ReRouteLogin>                     
                        <Link to="/rv">
                        <ReRouteDiv> Already have an account? </ReRouteDiv>
                        </Link>
                        </ReRouteLogin>
                        </form>
                    </div>
        )
    }
}

export default RVLogin; 