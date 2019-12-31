import React, { Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import * as heroAction from "../../action/hero";
import "./hero.css";
const Hero = props => {
  // const dispatch = useDispatch();

  // const heroStore = useSelector(store => {
  //   return store.hero;
  // });

  // useEffect(() => {
  //   dispatch(heroAction.loadHero());
  // }, []);
  const data = props.values
    ? props.values.map(item => {
        return <img src={item} alt="banner" />;
      })
    : [];
const onChange = (data) =>{
  // console.log(data);
  // props.onChangeImage(data)
}
  return (
    <Fragment>
      <Carousel
        className={props.className}
        showThumbs={props.showThumbs ? props.showThumbs : false}
        showStatus={false}
        selectedItem={props.value}
        autoPlay={true}
        // onChange={onChange}
        // interval="100"
        // transitionTime={50}
        infiniteLoop
      >
        {data}
      </Carousel>
    </Fragment>
  );
};

export default Hero;
