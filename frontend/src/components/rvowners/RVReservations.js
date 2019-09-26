// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utilities/axiosWithAuth.js";
// import RVReserveCard from './RVReserveCard';
// import Owner from '../OwnerSearch';

// const RVReservations = (props) => {

//     const [users, setUsers] = useState([
//         {

//             id: "",
//             listing_id: "",
//             user_id: "",
//             reserve_date_start: "",
//             reserve_date_end: "",


//         }
//     ]);
//     console.log(users)

//     useEffect(() => {
//         axiosWithAuth()
//             .get("https://rvbnb.herokuapp.com/api/listings/:id/reservations", users)
//             .then(res => {
//                 localStorage.setItem("token", res.data.token)
//         props.history.push("/rvownersview")
//     })

//     setUsers(res.data)
//             })
//             .catch(error => {
//                 console.log(error)
//             }, [])
//     }, []),

//     return (
//         <div className="reserve-list">
//             <h2> Reserve Now! </h2>
//             <p> Feel free to reserve your land here </p>

//             {console.log(props.user)}
//             {users.map(user => (
//                 <RVReserveCard key={user.id} user={user} />
//             ))}
//         </div>
//     );

// }

// export default RVReservations; 