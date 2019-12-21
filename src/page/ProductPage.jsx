import React, { Fragment, useEffect, useState } from "react";
import PromoteBanner from "../component/Promote/index";
import FilterList from "../component/FilterList/index";
import ProductCardWithInfo from "../component/ProductCardWithInfo/index";
import Pagination from "../component/Nagination/index";
import { storage } from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import * as productAction from "../action/product";
import ReactLoading from "react-loading";
import brands from "../data/data.json";
import "./ProductPage.css";

const ProductPage = props => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(store => {
    return store.product;
  });

  const [brandFilter, setBrandFilter] = useState("All");
  const [moneyFilter, setmoneyFilter] = useState("All");

  useEffect(() => {
    dispatch(productAction.loadProduct());
  }, []);

  const listBrandOptions = brands.brands.map(item => item.name);

  const listMoneyRangeOptions = [
    "Từ 0 - 5 triệu",
    "Từ 5 - 10 triệu",
    "Từ 10 - 20 triệu",
    "Trên 20 triệu"
  ];

  const listCardFilter = (data || []).filter(
    item =>
      item.brand === brandFilter.toLocaleLowerCase()
  );

  const listCardWithInfoList = listCardFilter.map((item, index) => (
    <ProductCardWithInfo
      key={index}
      url={item.images[0]}
      name={item.name}
      price={item.price}
    />
  ));
  const onBrandChange = e => {
    console.log(e.target.textContent);

    setBrandFilter(e.target.textContent);
  };

  const onMoneyChange = e => {
    console.log(e.target.textContent);
  };

  return (
    <Fragment>
      <PromoteBanner></PromoteBanner>
      <div className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            {/* left section */}
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
              <div className="leftbar p-r-20 p-r-0-sm">
                <FilterList
                  values={listBrandOptions}
                  onChange={onBrandChange}
                  label="Thương hiệu"
                />
                <FilterList
                  values={listMoneyRangeOptions}
                  onChange={onMoneyChange}
                  label="Giá tiền"
                />
              </div>
            </div>
            {/* end left section */}
            {/* rigth section */}
            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
              {loading ? (
                <ReactLoading type="bubbles" color="#e65540" />
              ) : (
                <Fragment>
                  <div className="flex-sb-m flex-w p-b-35">
                    <span className="s-text8 p-t-5 p-b-5">
                      Đang hiển thị 1–15 trong {listCardWithInfoList.length} kết
                      quả
                    </span>
                    <span className="s-text8 p-t-5 p-b-5">
                      <strong>Xóa tất cả tìm kiếm</strong>
                    </span>
                  </div>

                  {/* Product */}
                  <div className="row">{listCardWithInfoList}</div>
                  <Pagination />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
      }
    </Fragment>
  );
};

export default ProductPage;
