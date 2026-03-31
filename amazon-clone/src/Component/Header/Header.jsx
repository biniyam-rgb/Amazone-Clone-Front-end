import React, { useContext } from 'react'
import Classes from "./Header.module.css"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';



export default function Header() {
 const [{basket, user}, dispatch]=useContext(DataContext)
  return (
    <section className={Classes.fixed} >
      <div className={Classes.header_container}>
        {/*logo*/}
        <div className={Classes.logo_container}>

<Link to="/">
  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
</Link>
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
  
<Link to={user ? "#" : "/Auth"} className={Classes.language_selector}>
  <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="america flag" />
  <select name="" id="">
<option value="">EN</option>
  </select>
</Link>
{/* three components */}

<Link to={user ? "#" : "/Auth"}>
  <div>
    <p>{user ? `Hello, ${user.email.split("@")[0]}` : "Sign In"}</p>
    <span>Account & Lists</span>
  </div>
</Link>

{user && (
  <span onClick={() => signOut(auth)} style={{ cursor: "pointer", fontSize: "14px" }}>
    Sign Out
  </span>
)}

{/* orders */}
<Link to="/Orders">
  <p>Returns</p>
  <span>& Orders</span>
</Link>

{/* cart */}
<Link to="/cart" className={Classes.cart_container}>
  <BiCart size={35}/>
  <span>{basket?.length}</span>
</Link>
        </div>

      </div>
       <LowerHeader/>
    </section>
  )
}
