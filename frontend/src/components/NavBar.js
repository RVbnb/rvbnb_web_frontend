import React from "react"
import { Link } from "react-router-dom"
import { NavBarStyled, NavBarHeading, HeaderDiv } from "./styling/styled"

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <Link to="/">
          <i className="fas fa-home fa-5x"></i>
        </Link>
        <HeaderDiv>
          <NavBarHeading>RV-bnb</NavBarHeading>
          <Link to="home"> </Link>
        </HeaderDiv>
      </NavBarStyled>
    </>
  )
}

export default NavBar