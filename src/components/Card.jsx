import React from "react";
import Photo from "./Photo";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Photo image={props.img} />
      </div>
      <div className="bottom">
        <Detail data={props.tel} />
        <Detail data={props.email} />
      </div>
    </div>
  );
}

export default Card;
