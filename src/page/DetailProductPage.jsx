import React, { Fragment } from "react";
import Hero from '../container/Hero/index'
import SectionListProducts from "../container/SectionListProducts";
import ProductCard from "../component/ProductCard/index";
import DropdownContent from "../component/DropdownContent/index"
import Breakcumb from "../component/Breadcrumb/index";
import './DetailProductPage.css'
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
            <DropdownContent></DropdownContent>
            <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
              <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                Thông tin thêm
                <i
                  className="down-mark fs-12 color1 fa fa-minus dis-none"
                  aria-hidden="true"
                />
                <i  
                  className="up-mark fs-12 color1 fa fa-plus"
                  aria-hidden="true"
                />
              </h5>
              <div className="dropdown-content dis-none p-t-15 p-b-23">
                <p className="s-text8">
                  Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus
                  at ipsum blandit ornare vel sed velit. Proin gravida arcu
                  nisl, a dignissim mauris placerat
                </p>
              </div>
            </div>
            <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
              <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                Reviews (0)
                <i
                  className="down-mark fs-12 color1 fa fa-minus dis-none"
                  aria-hidden="true"
                />
                <i
                  className="up-mark fs-12 color1 fa fa-plus"
                  aria-hidden="true"
                />
              </h5>
              <div className="dropdown-content dis-none p-t-15 p-b-23">
                <p className="s-text8">
                  Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus
                  at ipsum blandit ornare vel sed velit. Proin gravida arcu
                  nisl, a dignissim mauris placerat
                </p>
              </div>
            </div>
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
