import React, { Fragment } from "react";
import './Promote.css'
const PromoteBanner = props => {
  
  return (
    <Fragment>
      <section
        className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
        style={{ backgroundImage: "url(images/bannerProduct/banner-product.jpg)"}}
      >
        {/* <h2 className="l-text2 t-center">Women</h2>
        <p className="m-text13 t-center">New Arrivals Women Collection 2018</p> */}
      </section>
    </Fragment>
  );
};

export default PromoteBanner;
