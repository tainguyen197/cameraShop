import React, { Fragment } from "react";

const Pagination = props => {
  const { total, onChange, currentPage } = props;
  const listPagination = [];

  for (let index = 0; index < total; index++) {
    listPagination.push(
      <div style={{cursor:"pointer"}}
        className={
          Number(currentPage) === index+1
            ? "item-pagination flex-c-m trans-0-4 active-pagination"
            : "item-pagination flex-c-m trans-0-4"
        }
        onClick={onChange}
      >
        {index + 1}
      </div>
    );
  }
  return (
    <Fragment>
      {" "}
      <div className="pagination flex-m flex-w p-t-26">{listPagination}</div>
    </Fragment>
  );
};

export default Pagination;
