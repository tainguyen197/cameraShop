import React from "react";
import GoogleMapReact from 'google-map-react';
import {Link} from "react-router-dom"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faHome, faGlobe, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import "./ContactPage.css"
const AnyReactComponent = ({ text }) => <div style={{fontSize: '20px'}}><FontAwesomeIcon icon={faMapMarker} size={13}/></div>;

const ContactPage = () => {
  return (
    <section className="bgwhite p-t-66 p-b-60">
      <div className="container">
      <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Liên hệ</h3>
        </div>
        <div className="row">
          <div className="col-md-6 p-b-30 map-mobile">
          {/* <div className="contact-map size21"> */}
            <GoogleMapReact
              bootstrapURLKeys={{ key:"AIzaSyAoBGukMgWP82wOqAaDqkXeslb9V4jXH28" }}
              defaultCenter={{lat:10.754510,lng:106.683520}}
              defaultZoom={16}
        >
          <AnyReactComponent/>
        </GoogleMapReact>
        {/* </div> */}
          </div>
          <div className="col-md-6 p-b-30">
              <h4 className="m-text26 p-b-36 p-t-15">Địa chỉ</h4>
              <p className="p-b-28"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Chung cư 109 Cao Đạt. Quận 5. Thành phố Hồ Chí Minh</p>
              <a className="link-other" href="https://www.facebook.com/pg/shopsonynguyenduy"> <p className="p-b-28 link-other"><FontAwesomeIcon icon={faGlobe}/> FB/shopsonynguyenduy</p></a>
              <p className="p-b-28"><FontAwesomeIcon icon={faPhone}/> 090 367 16 71</p>
              <p className="p-b-28"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 09:00 - 17:30</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;