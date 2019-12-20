import React, { Fragment, useMemo, useEffect } from "react";
import Header from "../container/Header/index";
import Hero from "../container/Hero/index";
import SectionBrands from "../container/SectionBrands/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import { useDispatch, useSelector } from "react-redux";
import * as brandAction from "../action/brand";
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
  const saleListProduct = listProduct.map(product => {
    if (product.type === "sale") return <ProductCard image={product.images[0]?product.images[0]:undefined}/>;
  });

  // const listHero = brandStore.data?brandStore.data.map(item => (
  //   <div className="hero-banner">
  //     <img src={item.src[0]} alt="IMG-BENNER" />
  //   </div>
  // )):[];
  return (
    <Fragment>
      <Hero></Hero>
      <SectionBrands></SectionBrands>
      <SectionListProducts
        items={saleListProduct}
        title="Sản phẩm bán chạy"
      ></SectionListProducts>
      <SectionListProducts
        items={saleListProduct}
        title="Đang giảm giá"
      ></SectionListProducts>
    </Fragment>
  );
};

export default Homepage;
