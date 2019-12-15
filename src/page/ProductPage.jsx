import React, { Fragment } from "react";
import PromoteBanner from "../component/Promote/index";
import FilterList from "../component/FilterList/index";
import ProductCardWithInfo from "../component/ProductCardWithInfo/index";

const ProductPage = props => {
  const listCardWithInfo = [<ProductCardWithInfo/>,<ProductCardWithInfo/>,<ProductCardWithInfo/>,<ProductCardWithInfo/>,<ProductCardWithInfo/>,<ProductCardWithInfo/>]
  return (
    <Fragment>
      <PromoteBanner></PromoteBanner>
      <div className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            {/* left section */}
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
              <div className="leftbar p-r-20 p-r-0-sm">
                <FilterList></FilterList>
              </div>
            </div>
            {/* end left section */}
            {/* rigth section */}
            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
              {/*  */}
              {/* <div class="flex-sb-m flex-w p-b-35">
						<div class="flex-w">
							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" name="sorting">
									<option>Default Sorting</option>
									<option>Popularity</option>
									<option>Price: low to high</option>
									<option>Price: high to low</option>
								</select>
							</div>

							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" name="sorting">
									<option>Price</option>
									<option>$0.00 - $50.00</option>
									<option>$50.00 - $100.00</option>
									<option>$100.00 - $150.00</option>
									<option>$150.00 - $200.00</option>
									<option>$200.00+</option>

								</select>
							</div>
						</div>

						<span class="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>
					</div> */}
              {/* Product */}
              <div className="row">
                {listCardWithInfo}
                 </div>
              {/* Pagination */}
              <div className="pagination flex-m flex-w p-t-26">
                <a
                  href="#"
                  className="item-pagination flex-c-m trans-0-4 active-pagination"
                >
                  1
                </a>
                <a href="#" className="item-pagination flex-c-m trans-0-4">
                  2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
