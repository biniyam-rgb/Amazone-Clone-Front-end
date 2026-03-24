import React from 'react'
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Classes from "./Product.module.css"


export default function ProductCard({product}) {
  const { id, image,title,  rating, price } = product;
  return (
    <div className={Classes.card_container}>
      <Link to={`/products/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={title}/>
        <div>
          <h3>{title}</h3>
          <div className={Classes.rating}>                                       
            <Rating value={rating.rate} precision={0.1} />
            <small>{60}</small>
          </div>
          <div>
            <div>${price.toFixed(2)}</div>
          </div>
        </div>
      </Link>
      <button className={Classes.button}>
        add to cart
      </button>
    </div>
  )
}
