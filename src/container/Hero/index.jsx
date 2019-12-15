import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "./hero.css";

const Hero = props => {
  return (
    <Fragment>
      <Carousel
        showThumbs={props.showThumbs?props.showThumbs:false}
        showStatus={false}
        autoPlay
        interval={1000}
        infiniteLoop
      >
        {props.items}
      </Carousel>
    </Fragment>
  );
};

export default Hero;
