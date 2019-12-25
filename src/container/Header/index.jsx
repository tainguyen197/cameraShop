import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";
const Header = props => {
  const [mobileMenuShow, setmobileMenuShow] = useState(false);
  const [selected, setSelect] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelect(0);
        break;
      case "/san-pham":
        setSelect(1);
        break;
      case "/gioi-thieu":
        setSelect(2);
        break;
      case "/lien-he":
        setSelect(3);
        break;
      default:
        setSelect(-1);
        break;
    }
  }, []);

  return (
    <Fragment>
      <header className="header1">
        {/* Header desktop */}
        <div className="container-menu-header">
          <div className="wrap_header">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src="images/icons/logo.jpg" alt="IMG-LOGO" />
            </Link>
            {/* Menu */}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li
                    key={0}
                    className={selected === 0 ? "sale-noti" : ""}
                    onClick={() => setSelect(0)}
                  >
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li
                    key={1}
                    className={selected === 1 ? "sale-noti" : ""}
                    onClick={() => setSelect(1)}
                  >
                    <Link to="/san-pham">Sản phẩm</Link>
                  </li>
                  <li
                    key={2}
                    className={selected === 2 ? "sale-noti" : ""}
                    onClick={() => setSelect(2)}
                  >
                    <Link to="/gioi-thieu">Về chúng tôi</Link>
                  </li>
                  <li
                    key={3}
                    className={selected === 3 ? "sale-noti" : ""}
                    onClick={() => setSelect(3)}
                  >
                    <Link to="/lien-he">Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Icon */}
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap_header_mobile">
          {/* Logo moblie */}
          <Link to="/" className="logo-mobile">
            <img src="images/icons/logo.jpg" alt="IMG-LOGO" />
          </Link>
          {/* Button show menu */}
          <div className="btn-show-menu">
            {/* Header Icon mobile */}
            <div
              onClick={e => setmobileMenuShow(oldValue => !oldValue)}
              className={
                !mobileMenuShow
                  ? "btn-show-menu-mobile hamburger hamburger--squeeze"
                  : "btn-show-menu-mobile hamburger hamburger--squeeze is-active"
              }
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </div>
        </div>
        {/* Menu Mobile */}
        <div
          className={
            mobileMenuShow
              ? "wrap-side-menu animation-menu active-menu"
              : "wrap-side-menu"
          }
          style={{ display: mobileMenuShow ? "block" : "none" }}
        >
          <nav className="side-menu">
            <ul className="main-menu">
            <li key={0} className="item-menu-mobile" onClick={()=>{setmobileMenuShow(false)}}>
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li key={1} className="item-menu-mobile" onClick={()=>{setmobileMenuShow(false)}}>
                <Link to="/san-pham">Sản phẩm</Link>
              </li>
              <li key={2} className="item-menu-mobile" onClick={()=>{setmobileMenuShow(false)}}>
                <Link to="/gioi-thieu">Về chúng tôi</Link>
              </li>
              <li key={3} className="item-menu-mobile" onClick={()=>{setmobileMenuShow(false)}}>
                <Link to="/lien-he">Liên hệ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
