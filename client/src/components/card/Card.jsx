import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function Card({id, name, image, type}){
    return (
        <div>
        <div>
        <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{type}</h3>
            <img src={image} alt='Not Found'/>
          
        </div>
        </Link>
        </div>
        </div>
    )
}