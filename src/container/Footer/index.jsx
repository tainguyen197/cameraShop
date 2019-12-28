import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Fragment>
      <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
        <div className="flex-w p-b-90">
          <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
            <h4 className="s-text12 p-b-30">LIÊN LẠC</h4>
            <div>
              <p className="s-text7 w-size27">
              Bạn có thắc mắc? Hãy cho chúng tôi biết trong cửa hàng tại tầng 8, 379 Hudson St,
                New York, NY 10018 hoặc gọi cho chúng tôi theo số (+1) 96 716 6879
              </p>
              <div className="flex-m p-t-30">
                <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
                <a
                  href="#"
                  className="fs-18 color1 p-r-20 fa fa-snapchat-ghost"
                />
                <a
                  href="#"
                  className="fs-18 color1 p-r-20 fa fa-youtube-play"
                />
              </div>
            </div>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <div>
            <h4 className="s-text12 p-b-30">Thương hiệu</h4>
            <ul>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Canon
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Lenka
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Sony
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Fujji
                </a>
              </li>
            </ul>
            </div>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <h4 className="s-text12 p-b-30">Liên kết</h4>
            <ul>
              <li className="p-b-9">
                <Link to="/" className="s-text7">
                  Trang chủ
                </Link>
              </li>
              <li className="p-b-9">
                <Link to='/san-pham' className="s-text7">
                  Sản phẩm
                </Link>
              </li>
              <li className="p-b-9">
                <Link to='/gioi-thieu' className="s-text7">
                  Giới thiệu
                </Link>
              </li>
              <li className="p-b-9">
                <Link to='/lien-he' className="s-text7">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <div>
            <h4 className="s-text12 p-b-30">Thương hiệu</h4>
            <ul>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Canon
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Lenka
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Sony
                </a>
              </li>
              <li className="p-b-9">
                <a href="#" className="s-text7">
                  Fujji
                </a>
              </li>
            </ul>
            </div>
          </div>
   
          <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
            <h4 className="s-text12 p-b-30">Nhận thông báo</h4>
            <form>
              <div className="effect1 w-size9">
                <input
                  className="s-text7 bg6 w-full p-b-5"
                  type="text"
                  name="email"
                  placeholder="email@gmail.com"
                />
                <span className="effect1-line" />
              </div>
              <div className="w-size2 p-t-20">
                {/* Button */}
                <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
        
          <div className="t-center s-text8 p-t-20">
            Copyright © 2018 All rights reserved. | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
