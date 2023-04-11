import React from "react";
import Pin from "../images/pin.png";

export default function Destination(props) {
  return (
    <div className="full-card">
      <img className="cover-photo" src={props.imageUrl} alt="landscape" />
      <div className="card-info-container">
        <div className="mini-header">
          <h4>
            <img className="pin" src={Pin} alt="pin" width="10px" />
            {props.location}
          </h4>
          <p>
            <a className="link" href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <br />
        <br />
        <h1 className="title">{props.title}</h1>
        <br />
        <p>
          <b>
            {props.startDate} - {props.endDate}
          </b>
        </p>
        <br />
        <p>{props.description}</p>
      </div>
    </div>
  );
}
