import React, { Fragment } from "react";
import { OpitmizeNumber } from "../../config/optimizeMoney";
import "./ProductCardWithInfo.css";
import { Link } from "react-router-dom";
const ProductCardWithInfo = props => {
  const { url, name, price, id, brand,type} = props;
  const path = "/chi-tiet?id=" + id + "&brand=" + brand;
  return (
    <Fragment>
      <div className="col-sm-12 col-md-6 col-lg-4 p-b-50 response-card">
        {/* Block2 */}
        <div className="block2 ">
          <div className="block2-img wrap-pic-w of-hidden pos-relative ">
            <img src={url || "/images/item-05.jpg"} alt="IMG-PRODUCT" />
            <div className="block2-overlay trans-0-4">
              <div className="block2-btn-addcart w-size1 trans-0-4">
                {/* Button */}
                <Link to={path}>
                  <a href="#">
                    {" "}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                      Xem chi tiết
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="block2-txt p-t-20">
            <Link to={path}>
              <a href="#" className="block2-name dis-block s-text3 p-b-5 ">
                {name || "Chưa có tên"}
              </a>
            </Link>
            <span className="block2-price m-text6 p-r-5">
              {price!==0? OpitmizeNumber(price) + " VND":"Giá liên hệ"}
            </span>
            {type==='sale'?<p className='old-price-color'>{OpitmizeNumber(props.oldPrice)|| 0} VND</p>:null}

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCardWithInfo;
