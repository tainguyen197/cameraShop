import React, { Fragment } from "react";
import { OpitmizeNumber } from "../../config/optimizeMoney";
import {Link} from "react-router-dom"
import "./ProductCard.css";
const ProductCard = props => {
  const { image, name, price,id,brand,type } = props;

  const path = "/chi-tiet?id=" + id + "&brand=" + brand;
  return (
    <Fragment>
      <Link to={path}>
      <div class="block2-img wrap-pic-w of-hidden pos-relative" >
        <div className="product-card-img-box">
          <div className="img-product">
            <img
              src={image ? image : "images/banner-05.jpg"}
              alt="IMG-PRODUCT"
            />
          </div>
          <div className="content-product-card">
            <p>{name !== undefined ? name : "Chưa đặt tên"}</p>
            <strong><p className='price-color'>{price !==0 ? OpitmizeNumber(price) + " VND" : "Giá liên hệ"}</p></strong>
            {type==='sale'?<p className='old-price-color'>{OpitmizeNumber(props.oldPrice)|| 0} VND</p>:null}
          </div>
        </div>
        <div class="block2-overlay trans-0-4">

          <div class="block2-btn-addcart w-size1 trans-0-4">
            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
