import React, { Fragment } from "react";
import Header from "../container/Header/index";
import Hero from "../container/Hero/index";
import SectionBrands from "../container/SectionBrands/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";

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

  const listHero = [0, 1, 2, 3, 4, 5].map(item => (
    <div className="hero-banner">
      <img src="images/banner-03.jpg" alt="IMG-BENNER" />
      <p className="legend">Legend</p>
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
