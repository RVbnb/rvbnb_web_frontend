import React, { useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom"; 
import NavBar from "../NavBar";

const LandownerLogin = props => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [landLogin, setLandLogin] = useState({
        username: "", 
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        setIsLoading(true)
        axios 
        .post("https://rvbnb.herokuapp.com/api/auth/login", landLogin) 
        .then(res => {
            console.log(res)
            setIsLoading(false)
            localStorage.setItem("token", res.data.token)
            props.history.push("/landownerform")
        })
        .catch(error => {
            setIsError(true)
            console.log("Error from Landowner Login handleSubmit", error)
        }, [])
        setIsLoading(false)
        setIsError(false)
    }

    const handleChange = event => {
        setLandLogin({
            ...landLogin, 
            [event.target.name]: event.target.value
        })
    }

    const loading = () => {
        if(isLoading) {
            return(
                <>
                    <h2> Loading New Account </h2>
                </>
            )
        }
    }

    const error = () => {
        if(isError) {
            return(
            <>
                <h2> Something Went Wrong </h2> 
            </>
            )
        }
    }

    return(
        <>
        { loading() }
        { error() }
        <div> 
        <p> Login As Landowner </p>
        <form onSubmit={handleSubmit}> 
        <NavBar />
        <input 
        type="text"
        name="username"
        placeholder="enter username"
        value={props.username}
        onChange={handleChange}
        />
        <input 
        type="password"
        name="password"
        placeholder="enter password"
        value={props.password}
        onChange={handleChange}
        />
        <button> Login </button> 
        <Link to="/landowners"> <div> Don't have an account? </div> </Link>
        </form>
        </div>
        </>
    )
}

export default LandownerLogin; 