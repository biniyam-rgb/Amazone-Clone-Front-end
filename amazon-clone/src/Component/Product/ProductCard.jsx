import React from 'react'
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Classes from "./Product.module.css"


export default function ProductCard({product}) {
  const { id, image,title,  rating, price } = product;
  return (
    <div className={Classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title}/>
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={Classes.rating}>
          <Rating  value={rating.rate} precision={0.1} />
          {/* count */ }
          <small>{60}</small>
        </div>
        
        <div>
          {/* price */ }
          <div>${price.toFixed(2)}</div>
        </div>
        <button className={Classes.button}>
          add to cart
        </button>
      </div>
    </div>
  )
}
