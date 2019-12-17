import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
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
              <img src="images/icons/logo.png" alt="IMG-LOGO" />
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
                    <a href="product.html">Về chúng tôi</a>
                  </li>
                  <li>
                    <Link to="/chi-tiet">Liên hệ</Link>
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
            <img src="images/icons/logo.png" alt="IMG-LOGO" />
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
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Homepage V1</a>
                  </li>
                  <li>
                    <a href="home-02.html">Homepage V2</a>
                  </li>
                  <li>
                    <a href="home-03.html">Homepage V3</a>
                  </li>
                </ul>
                <i
                  className="arrow-main-menu fa fa-angle-right"
                  aria-hidden="true"
                />
              </li>
              <li className="item-menu-mobile">
                <a href="product.html">Shop</a>
              </li>
              <li className="item-menu-mobile">
                <a href="product.html">Sale</a>
              </li>
              <li className="item-menu-mobile">
                <a href="cart.html">Features</a>
              </li>
              <li className="item-menu-mobile">
                <a href="blog.html">Blog</a>
              </li>
              <li className="item-menu-mobile">
                <a href="about.html">About</a>
              </li>
              <li className="item-menu-mobile">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
