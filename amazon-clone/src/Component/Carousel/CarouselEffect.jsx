import React from 'react'
import { img } from "./image/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Classes from "./Carousel.module.css"

export default function CarouselEffect() {
  return (
    <div className={Classes.carousel__wrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} alt="con"/>;
        })}
      </Carousel>
      <div className={Classes.hero__img}></div>
    </div>
  );
};
