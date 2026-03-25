import React from 'react'
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Classes from "./Product.module.css"
import { useContext } from 'react'; 
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/Actiontype';


export default function ProductCard({product,flex}) {
  const { id, image,title,  rating, price,describtion } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({ type: Type.ADD_TO_BASKET, item: { id, image, title, rating, price } });
  };

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
      <button className={Classes.button} onClick={addToCart}>
        add to cart
      </button>
    </div>
  )
}
