import React from "react"; 
import { Link } from "react-router-dom";
import {
    HomeBox,
    HomePageHeading,
    ContainerDiv,
    Paragraph
  } from "./styling/styled.js"

const Home = () => {

    return(
        <>
        <div>
            <HomePageHeading> Welcome To RV-bnb </HomePageHeading>
                {/* Links */}
            <ContainerDiv>
            <HomeBox>
            <Link to="/rv">
                <Paragraph> RV Owners</Paragraph>
                </Link>
            </HomeBox>
            <HomeBox>
            <Link to="/landowners"> <Paragraph> Land Owners </Paragraph>
            </Link>
            </HomeBox>
            </ContainerDiv>
      </div>
        </>
    )
}

export default Home; 