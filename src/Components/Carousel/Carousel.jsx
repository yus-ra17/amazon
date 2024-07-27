import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Carousel/Carousel.module.css";
import { img } from "./img/data";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img?.map((imageItemLink, i) => {
          return <img src={imageItemLink} key={i} />;
        })}
      </Carousel>

      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
