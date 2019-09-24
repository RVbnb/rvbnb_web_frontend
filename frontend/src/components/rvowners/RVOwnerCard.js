import React from 'react';

const RVOwnerCard = props => {
  console.log("This is props from RVOwnerCard file", props)

  return (
      <>
    <div className="rv-owner-card">
        {/* <h2>ID: {id} </h2> */}
      {/* <p>owner_id:{owner_id}</p> */}

      <div className="location">
       <p> Location: {props.owner.location} </p>
      </div>
      <div className="description">
       <h3> Description: <strong> {props.owner.description} </strong></h3>
      <p> Price_per_day:{props.owner.price_per_day} </p>
      <img src={props.owner.photo} alt="photo of owner land"/>
    </div>
    </div>
    </>    
  );
};

export default RVOwnerCard;
