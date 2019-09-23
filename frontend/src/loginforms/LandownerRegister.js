import React, {useState} from "react"; 
import axios from "axios"; 


function landownerRegister() {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [landRegister, setLandRegister] = useState({register: {
        username: "", 
        password: "", 
        is_land_owner: true
       }
    })

    const handleSubmit = event => {
        event.preventDefault()
        setIsLoading(true)
        axios 
        .post("https://rvbnb.herokuapp.com/api/auth/register", landRegister) 
        .then(res => {
            console.log(res)
            setLandRegister(res.data)
        })
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
                    <h2> Loading New Account </h2>
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
        <form onSubmit={}> 
        <input 
        type="text"
        name="username"
        placeholder="enter username"
        value={props.register.username}
        onChange={}
        />
        <input 
        type="password"
        name="password"
        placeholder="enter password"
        value={props.register.password}
        onChange={}
        />

        </form>
        </>
    )
}

export default landownerRegister; 