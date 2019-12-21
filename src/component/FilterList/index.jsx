import React, { Fragment, useState } from "react";
import './FilterList.css'
const FilterList = props => {
  const {onChange} = props;
  const [selectedItem, setSelectedItem] = useState(-1);
  const onChangeValue= (e,index) =>{
    onChange(e);
    setSelectedItem(index)
  }
  const listOption = (Array.isArray(props.values)?props.values:[]).map((item, index) => (
    <li className="p-t-4" key={index}>
      <p onClick={e=>onChangeValue(e,index)} href="#" className={selectedItem === index?"s-text13 filter-active" : "s-text13"}> 
        {item}
      </p>
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
