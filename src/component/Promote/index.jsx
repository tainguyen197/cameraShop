import React, { Fragment } from "react";
import "./Promote.css";
const PromoteBanner = props => {
  return (
    <Fragment>
      <section className="bg-title-page flex-col-c-m">
        <img
          src="images/bannerProduct/banner-product.jpg"
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100vw"
          }}
        />
        {/* <h2 className="l-text2 t-center">Women</h2>
        <p className="m-text13 t-center">New Arrivals Women Collection 2018</p> */}
      </section>
    </Fragment>
  );
};

export default PromoteBanner;
