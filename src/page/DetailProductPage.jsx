import React, { Fragment, useMemo, useEffect } from "react";
import Hero from "../container/Hero/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import DropdownContent from "../component/DropdownContent/index";
import Breakcumb from "../component/Breadcrumb/index";
import "./DetailProductPage.css";
import { useSelector,useDispatch } from "react-redux";
import {loadProductWithIdAndBrand} from '../action/product'
import {OpitmizeNumber} from "../config/optimizeMoney"
import ReactHtmlParser from "react-html-parser"
const DetailProductPage = () => {
  const dispatch = useDispatch();
  const {loading,data,error} = useSelector(store=>{
    return store.product;
  },[])

  useEffect(()=> {
    // if(window.location.search==="")
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const id = urlParams.get('id');
    // console.log(brand,id);

    TODO: //Redirec sang trang sản phẩm
    dispatch(loadProductWithIdAndBrand(id,brand))
  },[])

  // console.log(data);
  
  const FeaturedItems = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />
  ];

  const listHero =data? (data.images || []).map(item => {
    console.log(item);
    
    return(
    <div className="product-detail-banner">
      <img src={item.url} alt="IMG-BENNER" />
    </div>
    )
  }):undefined;

  // console.log(listHero);
  
  const listIntroduction = (
    <div>
      <p>
        <p>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </p>
      </p>
    </div>
  );
  return (
    <Fragment>
      {/* <Breakcumb /> */}
      <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
          <div className="w-size13 p-t-30 respon5">
            <Hero className="detail-product-img" showThumbs={true} values={data?data[0].images:null}></Hero>
          </div>
          <div className="w-size14 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-13">
              {data?data.name:"Chưa có tên"}
            </h4>
            <span className="m-text17">{data?OpitmizeNumber(data[0].price) + " VND":"Giá liên hệ"}</span>

            <p className="s-text8 p-t-10">
              <strong>Tương hiệu:</strong>  {data?ReactHtmlParser(data[0].brand):"Chưa xác định"}
            </p>
            <p className="s-text8 p-t-10">
              <strong>Tình trạng:</strong> {data?ReactHtmlParser(data[0].status):"Chưa xác định"}
            </p>
            <p className="s-text8 p-t-10">
              <strong>Xuất xứ:</strong> {data?ReactHtmlParser(data[0].origin):"Chưa xác định"}
            </p>
            <p className="s-text8 p-t-10">
              <strong>Phụ kiện:</strong> {data?ReactHtmlParser(data[0].subItems):"Chưa xác định"}
            </p>
            <p className="s-text8 p-t-10">
              <strong>Khuyến mãi:</strong> {data?ReactHtmlParser(data[0].promote):"Chưa xác định"}
            </p>
            <p className="s-text8 p-t-10">
              <strong>Tóm tắt sản phẩm:</strong> {data?ReactHtmlParser(data[0].summary):"Chưa xác định"}
            </p>
            {/*  */}
            <div className="p-t-33 p-b-60"></div>
            {/*  */}
            <DropdownContent content={data?ReactHtmlParser(data[0].description):""} label="Giới thiệu"></DropdownContent> 
            <DropdownContent content={listIntroduction} label="Mô tả"></DropdownContent> 

          </div>
        </div>
      </div>
      <SectionListProducts
        items={FeaturedItems}
        title="Sản phẩm bán chạy"
      ></SectionListProducts>
    </Fragment>
  );
};

export default DetailProductPage;
