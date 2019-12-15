import React, { Fragment } from "react";

import { Carousel } from "react-responsive-carousel";
import './hero.css'
const Hero = props => {
  return (
    <Fragment>
      <Carousel showStatus={false} showThumbs={false} autoPlay interval={1000} infiniteLoop>
        <div className="hero-banner">
          <img src="images/banner-03.jpg" alt="IMG-BENNER" />
          <p className="legend">Legend</p>
        </div>
        <div className="hero-banner">
          <img src="images/banner-02.jpg" alt="IMG-BENNER" />
          <p className="legend">Legend</p>
        </div>
        <div className="hero-banner">
          <img src="images/banner-02.jpg" alt="IMG-BENNER" />
          <p className="legend">Legend</p>
        </div>
        <div className="hero-banner">
          <img src="images/banner-02.jpg" alt="IMG-BENNER" />
          <p className="legend">Legend</p>
        </div>
        <div className="hero-banner">
          <img src="images/banner-02.jpg" alt="IMG-BENNER"/>
          <p className="legend">Legend</p>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Hero;
