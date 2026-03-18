import React from 'react'
import Classes from "./Header.module.css"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';


export default function Header() {
  return (
    <section>
      <div className={Classes.header_container}>
        {/*logo*/}
        <div className={Classes.logo_container}>

<a href="#">
  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
</a>
{/*delivery */}
<div className={Classes.delivery}>
  <span>
  <SlLocationPin size={18}/>
</span>
<div>
  <p>Delivered to</p>
  <span>Ethiopia</span>
</div>
</div>
        </div>

{/*search */}
        <div className={Classes.search}>

<select name="" id="">
  <option value="">All</option>
</select>
<input type="text" name='' id='' placeholder='Search Product' /> 
 <BsSearch size={38} />

        </div>


{/*right side link*/}
        <div className={Classes.order_container}>
  
<a href="#" className={Classes.language_selector}>
  <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="america flag" />
  <select name="" id="">
<option value="">EN</option>
  </select>
</a>
{/* three components */}

<a href="#">
  <div>
    <p>Sign In</p>
    <span>Account & Lists</span>
  </div>
</a>

{/* orders */}
<a href="#">
  <p>Returns</p>
  <span>& Orders</span>
</a>

{/* cart */}
<a href="#" className={Classes.cart_container}>
  <BiCart size={35}/>
  <span>0</span>
</a>
        </div>

      </div>
       <LowerHeader/>
    </section>
  )
}
