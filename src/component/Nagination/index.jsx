import React, { Fragment } from 'react'

const Pagination = (props) =>{
    return(<Fragment> <div className="pagination flex-m flex-w p-t-26">
    <a
      href="#"
      className="item-pagination flex-c-m trans-0-4 active-pagination"
    >
      1
    </a>
    <a href="#" className="item-pagination flex-c-m trans-0-4">
      2
    </a>
  </div></Fragment>)
   
} 

export default Pagination
