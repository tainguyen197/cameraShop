import React, { Fragment } from "react";

const FilterRange = props => {
  return (
    <Fragment>
      <div>
        <h4 className="m-text14 p-b-32">Filters</h4>
        <div className="filter-price p-t-22 p-b-50 bo3">
          <div className="m-text15 p-b-17">Price</div>
          <div className="wra-filter-bar">
            <div id="filter-bar" />
          </div>
          <div className="flex-sb-m flex-w p-t-16">
            <div className="w-size11">
              {/* Button */}
              <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                Filter
              </button>
            </div>
            <div className="s-text3 p-t-10 p-b-10">
              Range: $<span id="value-lower">610</span> - $
              <span id="value-upper">980</span>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

