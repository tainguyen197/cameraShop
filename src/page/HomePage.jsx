import React, { Fragment } from "react";
import Header from "../container/Header/index";
import Hero from "../container/Hero/index";
import SectionBrands from "../container/SectionBrands/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import Footer from "../container/Footer";

const Homepage = props => {
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
  return (
    <Fragment>
      <Hero></Hero>
      <SectionBrands></SectionBrands>
      <SectionListProducts
        items={FeaturedItems}
        title="Sản phẩm bán chạy"
      ></SectionListProducts>
      <SectionListProducts
        items={SellItems}
        title="Đang giảm giá"
      ></SectionListProducts>

      <Footer></Footer>
    </Fragment>
  );
};

export default Homepage;
