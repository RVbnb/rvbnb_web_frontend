import React, { useState } from "react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosWithAuth from "./utilities/axiosWithAuth";
import NavBar from "./NavBar"

const RVScheduleDate = props => {
    
    const [startDate, setStartDate ] = useState('')
    const [endDate, setEndDate] = useState('')

const handleStartChange = date => {
    console.log("start date",date)
    setStartDate(date)
}

const handleEndChange = date => {
    console.log("end date",date)
    setEndDate(date)
}

const submitReservation = () => {
    const reservation = {reserve_date_start: startDate, reserve_date_end: endDate}
    axiosWithAuth()
    .post(`https://rvbnb.herokuapp.com/api/listings/${props.location.props.listingId}/reservations/`, reservation)
        .then(res => {
            console.log(res)
        })        
        .catch(error => {
            console.log(error)
            alert('Date Conflicting')
        })
}

    return(
 <>
   
   <div>
       <NavBar/>
    <DatePicker
        selected={startDate}
        onChange={handleStartChange}
        />
        ----
        <DatePicker
        selected={endDate}
        onChange={handleEndChange}
        />
        {/* <input placeholder='mm/dd/yyyy' onChange={handleStartChange} />
        <input placeholder='mm/dd/yyyy' onChange={handleEndChange} /> */}
        <button onClick={submitReservation}>Submit Reservation</button>
   </div>
    
</>
    )
}

export default RVScheduleDate