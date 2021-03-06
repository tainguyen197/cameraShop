import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../../component/ProductCard/index";
import "react-alice-carousel/lib/alice-carousel.css";
import './SectionFeaturedProducts.css'
const SectionListProducts = props => {
  const [mouseTrackingEnabled, setMouseTrackingEnabled] = useState(true);
  const [preventEventOnTouchMove, setPreventEventOnTouchMove] = useState(true);

  const responsive = {
    0: { items: 2 },
    320: {items:2},
    500: { items: 4 },
    960: { items: 5 }
  };

  const stagePadding = {
    // paddingLeft: 30,
    // paddingRight: 30
  };

  return (
    <section class="newproduct bgwhite p-t-45">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">{props.title}</h3>
        </div>
        <div className='alice-carousel-box'>
        <AliceCarousel
          buttonsDisabled={true}
          infinite={true}
          keysControlDisabled={true}
          autoPlay
          autoPlayInterval={4000}
          fadeOutAnimation={true}
          items={props.items}
          mouseTrackingEnabled={mouseTrackingEnabled}
          // onSlideChanged={console.debug}
          responsive={responsive}
          // infinite={false}
          stagePadding={stagePadding}
        ></AliceCarousel>
        </div>
      </div>
    </section>
  );
};

export default SectionListProducts;
