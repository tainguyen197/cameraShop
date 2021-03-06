import React, { Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../container/Header/index";
import ProductBanner from "../container/ProductBanner"
import PromoteBanner from "../component/Promote"
import Hero from "../container/Hero/index";
import SectionBrands from "../container/SectionBrands/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import * as productAction from "../action/product";
const Homepage = props => {
  const dispatch = useDispatch();
  const productStore = useSelector(store => {
    return store.product;
  });

  useEffect(() => {
    dispatch(productAction.loadProduct());
  }, []);

  const listProduct = productStore.data ? productStore.data : [];

  const saleList = listProduct.filter(product => {
    return product.type === "sale";
  });

  const saleListProduct = saleList.map(product => (
    <ProductCard
      {...product}
      image={product.images[0] ? product.images[0] : "images/banner-05.jpg"}
    />
  ));

  const featuredList = saleList.filter(product => {
    return product.type === "sale";
  });

  const featuredListProduct = featuredList.map(product => (
    <ProductCard
      {...product}
      // name={product.name}
      image={product.images[0] ? product.images[0] : "images/banner-05.jpg"}
    />
  ));
  const listHero = new Array();
  listHero.push("images/hero/banner2.jpg");
  listHero.push("images/hero/banner3.jpg");

  return (
    <Fragment>
      <Hero values={listHero}></Hero>
      <SectionBrands></SectionBrands>
      <PromoteBanner></PromoteBanner>

      <SectionListProducts
        items={saleListProduct}
        title="Sản phẩm bán chạy"
      ></SectionListProducts>
      <ProductBanner/>
      <SectionListProducts
        items={featuredListProduct}
        title="Đang giảm giá"
      ></SectionListProducts>
    </Fragment>
  );
};

export default Homepage;
