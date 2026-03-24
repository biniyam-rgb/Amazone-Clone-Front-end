import React from 'react'
import SignUp from './Pages/Auth/SignUp'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Order'
import Landing from './Pages/Landing/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

export default function Routering() {
  return (
   <Router>
       <Routes>
         <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders/>} />
         <Route path="/category/:categoryName" element={<Results />} />
         <Route path="/products/:productId" element={<ProductDetail />} />
       </Routes>
   </Router>
  )
}
