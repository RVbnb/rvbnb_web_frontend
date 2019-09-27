import React, {useState, useEffect} from "react"; 
import { CardDiv, Description3, ButtonDiv, Button, LandImage} from "../styling/styled"
import NavBar from "../NavBar"
import axiosWithAuth from "../utilities/axiosWithAuth";



const RVOwnerCard = props => {
    console.log(props)
// Do not forget to pass down props here 
  const [reservations, setReservations] = useState([])

useEffect(() => {
  axiosWithAuth()
    .get(`https://rvbnb.herokuapp.com/api/listings/${props.owner.id}/reservations`)
    .then(res => {
      setReservations(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}, [])


const settingUpDate = event => {
  console.log(props)
  props.history.push({
    pathname: `/RVScheduleDate/${props.owner.id}`,
    props: { listingId: props.owner.id }
  })
  console.log(event)
}


  return(
    <>
      <ButtonDiv>
      <CardDiv>
      <LandImage src="https://www.nationalgeographic.com/content/dam/travel/2017-digital/french-riviera/villefranche-sur-mer-harbour-france.jpg" alt="This is a generic image of land"/>
        <Description3> Location: {props.owner.location} </Description3>
        <Description3> Description: {props.owner.description} </Description3>
        <Description3>Price Per Day: {props.owner.price_per_day}</Description3>
        <Button onClick={settingUpDate}> Schedule Date </Button>
        {
          reservations.map(reservation => {
            return <p>{reservation.reserve_date_start} to {reservation.reserve_date_end}</p>
          })
        }
        </CardDiv>
      </ButtonDiv>
    </>
  )
}

export default RVOwnerCard; 