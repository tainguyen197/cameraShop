import React, { Fragment } from "react";
import Hero from "../container/Hero/index";
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import DropdownContent from "../component/DropdownContent/index";
import Breakcumb from "../component/Breadcrumb/index";
import "./DetailProductPage.css";
const DetailProductPage = () => {
  const FeaturedItems = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />
  ];

  const listHero = [0, 1, 2, 3, 4, 5].map(item => (
    <div className="product-detail-banner">
      <img src="images/banner-03.jpg" alt="IMG-BENNER" />
    </div>
  ));

  const listIntroduction = (
    <div>
      <p>
        <p>
          Porttitor natus arcu aptent convallis volutpat hendrerit molestie
          doloribus molestie esse imperdiet praesent ratione! Tempore, illo,
          iste ducimus adipisicing officia tortor per, sapiente odit,
          adipiscing! Delectus, vero nascetur! Iure, morbi eos vitae vivamus
          nostra perspiciatis itaque explicabo nonummy quia quisquam viverra
          possimus, saepe ultrices? Illum tempus eum aperiam? Inventore euismod.
        </p>
      </p>
    </div>
  );
  return (
    <Fragment>
      <Breakcumb />
      <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
          <div className="w-size13 p-t-30 respon5">
            <Hero showThumbs={true} items={listHero}></Hero>
          </div>
          <div className="w-size14 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-13">
              Boxy T-Shirt with Roll Sleeve Detail
            </h4>
            <span className="m-text17">$22</span>
            <p className="s-text8 p-t-10">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            {/*  */}
            <div className="p-t-33 p-b-60"></div>
            {/*  */}
            <DropdownContent content={listIntroduction} label="Giới thiệu"></DropdownContent> 
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
