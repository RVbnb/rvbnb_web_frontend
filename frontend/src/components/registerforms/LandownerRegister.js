import React, {useState} from "react"; 
import axios from "axios"; 


const LandownerRegister = props => {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [landRegister, setLandRegister] = useState({
        username: "", 
        password: "",  
        is_land_owner: true
    })

    const handleSubmit = event => {
        event.preventDefault()
        setIsLoading(true)
        axios 
        .post("https://rvbnb.herokuapp.com/api/auth/register", landRegister) 
        .then(res => {
            console.log(res)
            setIsLoading(false)
            localStorage.setItem("token", res.data.token)
            props.history.push("/login")
        })
        .catch(error => {
            setIsError(true)
            console.log("Error from Landowner Register handleSubmit", error)
        })
        setIsLoading(false)
        setIsError(false)
    }

    const handleChange = event => {
        setLandRegister({
            ...landRegister, 
            [event.target.name]: event.target.value
        })
    }

    const loading = () => {
        if(isLoading) {
            return(
                <>
                    <h2> Loading </h2>
                </>
            )
        }
    }

    const error = () => {
        if(isError) {
            return(
            <>
                <h2> Error </h2> 
            </>
            )
        }
    }

    return(
        <>
        { loading() }
        { error() }
        <div> 
        <form onSubmit={handleSubmit}> 
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
        <button> Submit </button> 
        </form>
        </div>
        </>
    )
}

export default LandownerRegister; 