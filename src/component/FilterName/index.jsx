import React, { Fragment } from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.css'


const FilterName = (props) =>{
    const {onChange, value,searchByName} = props;
    
    
    return(
        <Fragment><div className="input-name"><input onChange={onChange} value={value} className="s-text7  p-b-5 input-box" placeholder="Nhập tên sản phẩm..."></input><button onClick={searchByName} ><FontAwesomeIcon icon={faSearch}/></button></div></Fragment>
    )
}

export default FilterName