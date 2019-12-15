import React, { Fragment } from "react";
import PromoteBanner from "../component/Promote/index";
import FilterList from "../component/FilterList/index";
import ProductCardWithInfo from "../component/ProductCardWithInfo/index";
import Pagination from "../component/Nagination/index"
const ProductPage = props => {
  const listCardWithInfo = [
    <ProductCardWithInfo />,
    <ProductCardWithInfo />,
    <ProductCardWithInfo />,
    <ProductCardWithInfo />,
    <ProductCardWithInfo />,
    <ProductCardWithInfo />
  ];

  const listBrandOptions = [
    "Canon",
    "Nikon",
    "Sony",
    "Fujifilm",
    "Olympus",
    "Pentax "
  ];
  const listMoneyRangeOptions = [
    "Từ 0 - 5 triệu",
    "Từ 5 - 10 triệu",
    "Từ 10 - 20 triệu",
    "Trên 20 triệu"
  ];

  return (
    <Fragment>
      <PromoteBanner></PromoteBanner>
      <div className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            {/* left section */}
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
              <div className="leftbar p-r-20 p-r-0-sm">
                <FilterList values={listBrandOptions} label="Thương hiệu" />
                <FilterList values={listMoneyRangeOptions} label="Giá tiền" />
              </div>
            </div>
            {/* end left section */}
            {/* rigth section */}
            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
              <div className="flex-sb-m flex-w p-b-35">

                <span className="s-text8 p-t-5 p-b-5">
                  Showing 1–12 of 16 results
                </span>
                <span className="s-text8 p-t-5 p-b-5">
                  <strong>Xóa tất cả tiềm kiếm</strong>
                </span>
              </div>

              {/* Product */}
              <div className="row">{listCardWithInfo}</div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
