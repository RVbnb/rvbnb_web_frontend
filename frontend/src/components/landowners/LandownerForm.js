import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth.js";  

const LandownerForm = () => {
    
    const [landForm, setLandForm] = useState({

    })

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
        .post("", )
    } 

    return(
        <>
        <h2> Hello Land Owner! </h2>
        <p> create a listing below  </p>  
        </>
    )
}

export default LandownerForm
