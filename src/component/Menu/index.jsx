import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Collapse, Button } from "react-bootstrap";
import "./styles.css";
const MenuMobile = props => {
  const [open, setOpen] = useState(false);
  const { value, title } = props;
  const data = Array.isArray(value)
    ? value.map(item => (
        <div>
          <p className="s-text13">{item}</p>
        </div>
      ))
    : undefined;
  return (
    <Fragment>
      <div className="menu-mobile">
        <h4 className="m-text14 p-b-7">{title}</h4>
        <div className="burger-menu" onClick={() => setOpen(val => !val)}>
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* <Button onClick={()=>setOpen(value=>!value)}/> */}
      <Collapse in={open}>
        <div>{data}</div>
      </Collapse>
    </Fragment>
  );
};

export default MenuMobile;
