import React, { Fragment, useEffect, useState } from "react";
import PromoteBanner from "../component/Promote/index";
import FilterList from "../component/FilterList/index";
import ProductCardWithInfo from "../component/ProductCardWithInfo/index";
import Pagination from "../component/Nagination/index";
import FilterName from "../component/FilterName/index";
import {useLocation,useHistory, useParams} from 'react-router-dom'
import { storage } from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import * as productAction from "../action/product";
import ReactLoading from "react-loading";
import useInput from "../hooks/useInput"
import useSearchParams from "../hooks/useSearchParams"

import brands from "../data/data.json";
import "./ProductPage.css";

const ProductPage = props => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(store => {
    return store.product;
  });

  const [brandFilter, setBrandFilter] = useState("All");
  const [moneyFilter, setmoneyFilter] = useState(-1);
  const [isResetFilter, setIsResetFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const {reset,onChange,value} = useInput();

  
  useEffect(() => {
    dispatch(productAction.loadProduct());
  }, []);

  const itemPerPage = 12;

  const listBrandOptions = brands.brands.map(item => item.name);

  const listMoneyRangeOptions = [
    "Từ 0 - 10 triệu",
    "Từ 10 - 20 triệu",
    "Từ 20 - 40 triệu",
    "Trên 40 triệu"
  ];

  const listMoneyRange = [
    { from: 0, to: 10 },
    { from: 10, to: 20 },
    { from: 20, to: 40 },
    { from: 40, to: 1000 }
  ];

  const unitVND = 1000000;

  const listCardFilter = data?data.filter(
    (item, index) =>{
      if((item.brand === brandFilter.toLocaleLowerCase() ||
        brandFilter === "All") &&
      (moneyFilter === -1 ||
        (item.price >= listMoneyRange[moneyFilter].from * unitVND &&
          item.price <= listMoneyRange[moneyFilter].to * unitVND)) 
      )
      
      return item;
        }
  ):[];

  let listCard = listCardFilter?listCardFilter.filter((item,index)=>{
    if (index >= currentPage * itemPerPage - itemPerPage &&
          index < currentPage * itemPerPage){
           return item;  

          }
  }):[];

  const listCardWithInfoList = listCard.map((item, index) => (
    <ProductCardWithInfo
    {...item}
    brand={item.brand}
    id={item.id}
      key={index}
      url={item.images[0]}
      name={item.name}
      price={item.price}
    />
  ));

  const searchByName = ()=>{
      
      
  }

  const onBrandChange = e => {
    setIsResetFilter(false);
    setBrandFilter(e.target.textContent);
    
  };

  const onMoneyChange = (e, index) => {
    setIsResetFilter(false);
    setmoneyFilter(index);
  };

  const resetFilter = () => {
    setBrandFilter("All");
    setmoneyFilter(-1);
    setIsResetFilter(true);
    setCurrentPage(1)
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
            {/* <FilterName onChange={onChange} reset={reset} value={value} searchByName={searchByName}/> */}
            </div>
              <div className="leftbar p-r-20 p-r-0-sm">
                <FilterList
                  values={listBrandOptions}
                  onChange={onBrandChange}
                  label="Thương hiệu"
                  isReset={isResetFilter}
                />
                <FilterList
                  values={listMoneyRangeOptions}
                  onChange={onMoneyChange}
                  label="Giá tiền"
                  isReset={isResetFilter}
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
                      Đang hiển thị {listCard.length} trong {listCardFilter.length} kết
                      quả
                    </span>
                    <span
                      onClick={resetFilter}
                      style={{ cursor: "pointer" }}
                      className="s-text8 p-t-5 p-b-5 reset-filter"
                    >
                      <button style={{width:'85px'}} className="hov1 bo-rad-23 size1 bg4 "><p style={{color: '#fff'}}> Đặt lại</p></button>
                    </span>
                  </div>

                  {/* Product */}
                  <div className="row">{listCardWithInfoList}</div>
                  <Pagination
                    onChange={e=>setCurrentPage(e.target.textContent)}
                    total={Math.ceil(listCardFilter ? listCardFilter.length / itemPerPage : 0)}
                    currentPage={currentPage}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
