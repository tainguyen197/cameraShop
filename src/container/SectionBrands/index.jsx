import React, { Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as brandAction from "../../action/brand";

const SectionBrand = props => {
  const dispatch = useDispatch();

  const brandStore = useSelector(store => {
    return store.brand;
  });

  useEffect(() => {
    dispatch(brandAction.loadBrand());
  }, []);

  const data = brandStore.data;

  return (
    <Fragment>
      <section className="banner bgwhite p-t-40 p-b-40">
        <div className="container">
          <div className="sec-title p-b-60">
            <h3 className="m-text5 t-center">Các thương hiệu</h3>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
              {/* block1 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[0].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[0].name : "unName"}
                  </a>
                </div>
              </div>
              {/* block1 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[1].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[1].name : "unName"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
              {/* block1 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[2].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[2].name : "unName"}
                  </a>
                </div>
              </div>
              {/* block1 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[3].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[3].name : "unName"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
              {/* block1 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[3].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[4].name : "unName"}
                  </a>
                </div>
              </div>
              {/* block2 */}
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img
                  src={data ? data[3].src[0] : "images/banner-05.jpg"}
                  alt="IMG-BENNER"
                />
                <div className="block1-wrapbtn w-size2">
                  {/* Button */}
                  <a
                    href="#"
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {data ? data[4].name : "unName"}
                  </a>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionBrand;
