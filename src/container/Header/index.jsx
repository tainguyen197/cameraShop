import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = props => {
  const [mobileMenuShow, setmobileMenuShow] = useState(false);

  return (
    <Fragment>
      <header className="header1">
        {/* Header desktop */}
        <div className="container-menu-header">
          <div className="wrap_header">
            {/* Logo */}
            <a href="index.html" className="logo">
              <img src="images/icons/logo.jpg" alt="IMG-LOGO" />
            </a>
            {/* Menu */}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/san-pham">Sản phẩm</Link>
                  </li>
                  <li className="sale-noti">
                    <Link to="/gioi-thieu">Về chúng tôi</Link>
                  </li>
                  <li>
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
          <a href="index.html" className="logo-mobile">
            <img src="images/icons/logo.jpg" alt="IMG-LOGO" />
          </a>
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
              <li className="item-menu-mobile">
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li className="item-menu-mobile">
                <Link to="/san-pham">Sản phẩm</Link>
              </li>
              <li className="item-menu-mobile">
                <Link to="/gioi-thieu">Về chúng tôi</Link>
              </li>
              <li className="item-menu-mobile">
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
