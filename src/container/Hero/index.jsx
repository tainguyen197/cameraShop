import React, { Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import * as heroAction from "../../action/hero";
import './hero.css'
const Hero = props => {
  const dispatch = useDispatch();

  const heroStore = useSelector(store => {
    return store.hero;
  });

  useEffect(() => {
    dispatch(heroAction.loadHero());
  }, []);

  const data = heroStore.data
    ? heroStore.data.map(item => <img src={item} alt="banner" />)
    : [1, 2, 3].map(item => (
        <img src="/images/hero/banner2.jpg" alt="banner" />
      ));

  return (
    <Fragment>
      <Carousel
        showThumbs={props.showThumbs ? props.showThumbs : false}
        showStatus={false}
        // autoPlay
        interval={1000}
        infiniteLoop
      >
        {data}
      </Carousel>
    </Fragment>
  );
};

export default Hero;
