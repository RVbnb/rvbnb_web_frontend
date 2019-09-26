import React from "react"; 
import { Link } from "react-router-dom";
import {HomeBox, BoarderBox, HomePageHeading, ContainerDiv } from "./styling/styled.js"; 

const Home = () => {

    return(
        <>
        <div>
            <HomePageHeading> Welcome To RVbnb </HomePageHeading>
                {/* Links */}
            <ContainerDiv>
            <BoarderBox>
            <Link to="/rv"> <HomeBox> RV Owners </HomeBox> </Link>
            </BoarderBox>
            <BoarderBox>
            <Link to="/landowners"> <HomeBox> Land Owners </HomeBox> </Link>
            </BoarderBox>
            </ContainerDiv>
      </div>
        </>
    )
}

export default Home; 