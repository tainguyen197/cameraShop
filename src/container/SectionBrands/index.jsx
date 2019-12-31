import React, { Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import * as brandAction from "../../action/brand";

const SectionBrand = props => {
  const dispatch = useDispatch();

  const brandStore = useSelector(store => {
    return store.brand;
  });

  useEffect(() => {
    dispatch(brandAction.loadBrand());
  }, []);

  const data = (Array.isArray(brandStore.data)?brandStore.data:[]);
// console.log(data);

  const listBrand = data.map(item=>{
    return(
      <div className="brand-box"><img src={item.src[0]}></img></div>
    )
  })

  
  return (
    <Fragment>
      <section className="banner bgwhite p-t-40 p-b-40">
        <div className="container">
          <div className="sec-title p-b-60">
            <h3 className="m-text5 t-center">Các thương hiệu</h3>
          </div>
          <div className="row section-brand-box">
            {listBrand}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionBrand;
