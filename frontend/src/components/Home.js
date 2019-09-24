import React from "react"; 
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <>
        <div>
            <h1> Welcome To RVbnb </h1>
                {/* Links */}
            <Link to="/rv"> <div> RV Owners </div> </Link>
            <Link to="/landowners"> <div> Land Owners </div> </Link>
      </div>
        </>
    )
}

export default Home; 