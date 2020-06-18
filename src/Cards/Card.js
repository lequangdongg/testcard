import React from "react";
import ima from "../asset/1.jpg";
function Card(props) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={ima} style={{ width: "100%" }} />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text text-secondary">
          Is a member of the computer science department of Da Nang Pedagogical
          University
        </p>
        <a href="#" className="btn btn-outline-success">
          {" "}
          Go Anywhere
        </a>
      </div>
    </div>
  );
}

export default Card;
