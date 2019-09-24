import React from 'react';

const RVOwnerCard = props => {
  console.log("This is props from RVOwnerCard file", props)

  return (
      <>
    <div className="rv-owner-card">
      <div className="location">
       <p> Location: {props.owner.location} </p>
      </div>
      <div className="description">
       <h3> Description: {props.owner.description} </h3>
      <p> Price_per_day:{props.owner.price_per_day} </p>
      <img src={props.owner.photo} alt="photo of owner land"/>
    </div>
    </div>
    </>    
  );
};

export default RVOwnerCard;
