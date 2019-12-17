import React, { Fragment, useMemo, useEffect } from "react";
import Header from "../container/Header/index";
import Hero from "../container/Hero/index";
import SectionBrands from "../container/SectionBrands/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import { useDispatch, useSelector } from "react-redux";
import * as productAction from "../action/product"
const Homepage = props => {
  const dispatch = useDispatch();
  const {loading,error,data} = useSelector(store=>{
    return store.product
  })

  // useEffect(()=>{
  //   dispatch(productAction.loadProduct())
  // },[])

  const productData = useMemo(()=>{
    if(loading) return
    if(!data)
      dispatch(productAction.loadProduct())
    return data
  }
,[dispatch,data])

  console.log(productData);
  
  const FeaturedItems = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />
  ];

  const SellItems = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />
  ];

  const listHero = [0, 1, 2, 3, 4, 5].map(item => (
    <div className="hero-banner">
      <img src="images/banner-03.jpg" alt="IMG-BENNER" />
    </div>
  ));
  return (
    <Fragment>
      <Hero items={listHero}></Hero>
      <SectionBrands></SectionBrands>
      <SectionListProducts
        items={FeaturedItems}
        title="Sản phẩm bán chạy"
      ></SectionListProducts>
      <SectionListProducts
        items={SellItems}
        title="Đang giảm giá"
      ></SectionListProducts>
    </Fragment>
  );
};

export default Homepage;
