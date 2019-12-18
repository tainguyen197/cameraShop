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
  // const dispatch = useDispatch();
  // const productStore = useSelector(store => {
  //   return store.product;
  // });

  // const brandStore = useSelector(store => {
  //   return store.brand;
  // });


  // useEffect(()=>{
  //   dispatch(brandAction.loadBrand());
  // },[])

  // const productData = useMemo(() => {
  //   if (productStore.loading) return;
  //   if (!productStore.data) {
  //     dispatch(productAction.loadProduct());
  //     return;
  //   }
  //   return productStore.data;
  // }, [dispatch, productStore.data, productStore.loading]);

  
  // const brandData = useMemo(() => {
  //   if (brandStore.loading) return;
  //   if (!brandStore.data) {
      
  //     return;
  //   }
  //   return brandStore.data;
  // }, [dispatch, brandStore.data, brandStore.loading]);

  // console.log(productStore);
  // console.log(brandStore);


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
