import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import LayOut from "../../Component/LayOut/LayOut";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import { Type } from "../../Utility/Actiontype";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../Component/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

export default function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);

  const increment = (item) =>
    dispatch({ type: Type.ADD_TO_BASKET, item });

  const decrement = (id) =>
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });

  return (
    <LayOut>
      <div className={Classes.cart__container}>
        {/* Left - cart items */}
        <div className={Classes.cart__left}>
          <h2 className={Classes.title}>Shopping Cart</h2>
          <hr />
          {basket.length === 0 ? (
            <div className={Classes.empty}>
              <p>Your cart is empty.</p>
              <Link to="/">Continue Shopping</Link>
            </div>
          ) : (
            basket.map((item) => (
              <div key={item.id} className={Classes.cart__item}>
                <img src={item.image} alt={item.title} />
                <div className={Classes.item__info}>
                  <p className={Classes.item__title}>{item.title}</p>
                  <div className={Classes.item__rating}>
                    <Rating value={item.rating?.rate} precision={0.1} readOnly size="small" />
                  </div>
                  <p className={Classes.item__price}>
                    ${(item.price * item.amount).toFixed(2)}
                  </p>
                  <div className={Classes.item__controls}>
                    <button onClick={() => decrement(item.id)}>−</button>
                    <span>{item.amount}</span>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right - subtotal */}
        {basket.length > 0 && (
          <div className={Classes.cart__right}>
            <h3>
              Subtotal ({basket.reduce((sum, i) => sum + i.amount, 0)} items):
              <strong> <CurrencyFormat amount={total} /></strong>
            </h3>
            <Link to="/payment">
              <button className={Classes.checkout__btn}>Proceed to Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </LayOut>
  );
}
