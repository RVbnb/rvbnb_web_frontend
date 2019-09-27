import styled from "styled-components"

//******************************************
//******************************************
//******************************************
//     ~~~~~  Home Page   ~~~~~
//******************************************
//******************************************
//******************************************

export const HomePageHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
  font-family: "Sans";

  @media (max-width: 840px) {
    font-size: 2rem;
  }
`
export const ContainerDiv = styled.div`
  display: flex;
  align-content: center;
  /* justify-content: center; */
  width: 90%;
  background: white;
  padding: 55px 30px 55px 30px;
  align-items: center;
  margin: 5px 45px 5px 65px;
  justify-content: space-between;

  @media (max-width: 840px) {
      display: flex; 
    flex-direction: column;
  }
`

export const HomeBox = styled.div`
  border: 8px solid #136414;
  padding: 100px 50px 100px 50px;
  margin: 0px 150px 0px 150px;
  background: #f9c100;
  width: 33%;
  height: 33%;
  box-shadow: 1px 1px 2px #000000, 0 0 15px #000000;
`

export const Paragraph = styled.p`
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
  text-shadow: 1px 1px 2px #f1f1f1, 0 0 10px #f1f1f1;
`

//******************************************
//******************************************
//******************************************
//     ~~~~~  NAV BAR    ~~~~~
//******************************************
//******************************************
//******************************************

export const NavBarStyled = styled.div`
  background: linear-gradient(#f9c100, #f1f1f1);
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const HeaderDiv = styled.div`
  display: flex;
`

export const NavBarHeading = styled.h2`
  font-family: "Sans";
  font-size: 2rem;
  color: #57606f;
  margin-right: 25px;
`

//******************************************
//******************************************
//******************************************
//       ~~~~~  REGISTRATION PAGES ~~~~~
//             ~~~~~  AND ~~~~~
//          ~~~~~  LOGIN PAGES ~~~~~
//******************************************
//******************************************
//******************************************

export const RVRegisterHeading = styled.p`
  font-family: "Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
`
export const LandOwnerRegisterHeading = styled.p`
  font-family: "Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: white;
`
export const Label = styled.label`
  font-size: 0.8rem;
  color: white;
  padding: 0px 5px 0px 5px;
  margin: 5px;
  font-family: "Sans";
`
export const Description = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 45px;
  font-family: "Sans";
`

export const ButtonDiv = styled.div`
display: flex; 
align-content: center;
justify-content: center; 
`
export const Button = styled.button`
  font-family: "Sans";
  margin: 35px 5px 5px 5px;
  padding: 10px;
  width: 30%;
  border-radius: 5px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
`
export const ReRouteDiv = styled.div`
display: flex; 
align-content: center;
justify-content: center; 
`
export const ReRouteLogin = styled.div`
  font-family: "Sans";
  margin: 35px 5px 5px 5px;
  padding: 10px;
  width: 30%;
  border-radius: 5px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  background: #dddddd;
  flex-wrap: wrap;
  text-decoration: none;
`
//******************************************
//******************************************
//******************************************
//    ~~~~~  LANDOWNER FORM/CARD ~~~~~
//******************************************
//******************************************
//******************************************

export const LandOwnerHeading = styled.p`
  font-family: "Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
`
export const Description2 = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: "Sans";
  padding-bottom: 15px;
  justify-content: center;
`
export const Description3 = styled.p`
  color: black;
  font-size: 1.2rem;
  font-family: "Sans";
  justify-content: center;
`
export const Button2 = styled.button`
  font-family: "Sans";
  margin: 5px 5px 0px 5px;
  width: 15%;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
`
export const CardDiv = styled.div`
  background: linear-gradient(#f1f1f1, #f9c100);
  width: 45%;
  align-items: center;
  box-shadow: 10px 10px 5px #01311e;
  margin: 15px;
  font-size: 1rem;
  margin-bottom: 25px;
  font-family: "Sans";
  padding: 25px;
  display: flex;
  flex-direction: column;
`

//******************************************
//******************************************
//******************************************
//    ~~~~~  RV FORM/CARD ~~~~~
//******************************************
//******************************************
//******************************************
export const RVHeading = styled.p`
  font-family: "Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  color: white;
`
export const SearchBar = styled.input`
width: 46%;
margin: 10px;
padding: 18px 10px;
border-radius: 4px;
border: 1px solid #4e5766;
box-shadow: 1px 0.5px #888888;
font-size: 18px;
border-radius: 15px;
`

export const LandImage = styled.img`
border-radius: 4px;
padding: 5px;
width: 589px;
box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
box-shadow: 1px 1px 2px #000000, 0 0 15px #000000;
`