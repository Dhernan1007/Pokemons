import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, type, attack }) {
  console.log(type);
  const formType = typeof type === "string" ? type.charAt(0).toUpperCase() + type.slice(1) : type.map(type=>type.charAt(0).toUpperCase() + type.slice(1)).join(' / ');

  return (
    <div>
      <div >
        <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
           <div className="card-img">
            <span><h3>Id: {id}</h3></span>
            <h3>Name: {name}</h3>
            <span className=""><h3>Type: {formType}</h3></span>
            <h3>Attack: {attack}</h3>
            <div>
            <img src={image} alt='Not Found' />
            </div>
          </div> 
         </Link>
    </div>
    </div>
  );
}
