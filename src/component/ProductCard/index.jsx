import React, { Fragment } from "react";
import './ProductCard.css'
const ProductCard = props => {
  return (
    <Fragment>
      <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
        <div className="product-card-img-box">
        <img src="images/banner-05.jpg" alt="IMG-PRODUCT" />
        </div>
        <div class="block2-overlay trans-0-4">
          <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
            <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
            <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
          </a>

          <div class="block2-btn-addcart w-size1 trans-0-4">
            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
