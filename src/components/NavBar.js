import React from "react"
import { Link } from "react-router-dom"
import { NavBarStyled, NavBarHeading, HeaderDiv } from "./styling/styled"

const NavBar = (props) => {
  return (
    <>
      <NavBarStyled>
        <Link to="/" onClick={() => localStorage.removeItem('token')}>
          <i className="fas fa-home fa-5x">
          </i>
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