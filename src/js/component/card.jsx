import React from "react";

const Card = ({ imageUrl, name }) => {
  return (
    <div className="card mb-3" >
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;
