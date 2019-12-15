import React, { Fragment } from "react";

const FilterList = props => {
  const listOption = (Array.isArray(props.values)?props.values:[]).map(item => (
    <li className="p-t-4">
      {/* active1 */}
      <a href="#" className="s-text13"> 
        {item}
      </a>
    </li>
  ))
  return (
    <Fragment>
      <h4 className="m-text14 p-b-7">{props.label}</h4>
      <ul className="p-b-54">
        {listOption}
      </ul>
    </Fragment>
  );
};

export default FilterList;
