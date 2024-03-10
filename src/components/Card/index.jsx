import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Card(props) {
  return (
    <div className="card col-sm-12 col-md-3 col-lg-3 mx-auto my-5 d-flex flex-column">
    <div className="img-container">
      <img className="img" alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
        {props.name}
        </li>
        <li>
        {props.description}
        </li>
      </ul>
    </div>
    <Link className="btn btn-outline-dark btn-md mt-auto mb-4" role="button" to={props.link} target="_blank">Visit Website</Link>
  </div>
  );
}

export default Card;
