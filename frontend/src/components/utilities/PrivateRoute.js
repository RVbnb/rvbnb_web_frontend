import React from "react"; 
import { Route, Redirect } from "react-router-dom"; 

const PrivetRoute = ({component: Component, setUpdateId, updateId, ...rest }) => {
    return(
        <Route 
        { ...rest }
        render={props => {
            if(localStorage.getItem("token")) {
                return <Component setUpdateId={setUpdateId} updateId={updateId} {...props} />
            } else {
                return <Redirect to="login" />
            }
        }}
        />
    )
}

export default PrivetRoute; 