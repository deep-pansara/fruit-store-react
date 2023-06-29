import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interva={2000}
        showIndicators={false}
        className="slider"
      >
        <div>
          <img src="images/banners/banner.jpg" alt="" />
        </div>
        <div>
          <img src="images/banners/banner-1.jpg" alt="" />
        </div>
        <div>
          <img src="images/banners/banner-2.jpg" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
