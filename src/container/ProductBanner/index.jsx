import React, { Fragment } from "react";
import "./styles.css";

const ProductBanner = props => {
  return (
    <Fragment>
      <section className="product-banner-section">
        <div className="content-product-box">
          <div className="product-title-box">
            <h3>Title</h3>
          </div>
          <p>Phasellus? Praesentium occaecati diam molestias suspendisse eius eos repudiandae? Omnis tincidunt deserunt quas montes saepe autem? Tenetur molestiae? Necessitatibus class voluptatem nulla mollis velit, condimentum. Nibh consectetur iusto numquam iaculis ullam egestas deleniti, sed nisl egestas, odit sollicitudin, adipiscing malesuada aut accumsan ornare mollis. Taciti ullamco nonummy blanditiis fames morbi.</p>
        </div>
        <div className="img-product-box">
            <button className="title-propduct s-text1 bg4 bo-rad-23 m-text3 size2" >
              Xem chi tiết
            </button>
          </div>
      </section>
    </Fragment>
  );
};

export default ProductBanner;
