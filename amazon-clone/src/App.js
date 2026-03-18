import React from 'react'
import Header from './Component/Header/Header'
import CarouselEffect from './Component/Carousel/CarouselEffect'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  return (
    <div>
      <Header/>
      <CarouselEffect/>
    </div>
  )
}
