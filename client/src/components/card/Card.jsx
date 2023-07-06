import React from "react";
import { Link } from "react-router-dom";
import style from './card.module.css'

export default function Card({ id, name, image, type, attack }) {
  console.log(type);
  const formType = typeof type === "string" ? type.charAt(0).toUpperCase() + type.slice(1) : type.map(type=>type.charAt(0).toUpperCase() + type.slice(1)).join(' / ');

  return (
    <div>
      <div className={style.cardN} >
        <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
           <div className="card-img">
            {/* <span>{'000'+id}</span> */}
            <img src={image} alt='Not Found' />
            <div className={style.cardInfo}>
            <h3>Name: {name}</h3>
            <p>Attack: {attack}</p>
            <p>Type: {formType}</p>
            </div>
            <div>
            </div>
          </div> 
         </Link>
    </div>
    </div>
  );
}
