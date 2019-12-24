import React from "react";
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactPage = () => {
  return (
    <section className="bgwhite p-t-66 p-b-60">
      <div className="container">
      <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Liên hệ</h3>
        </div>
        <div className="row">
          <div className="col-md-6 p-b-30">
          {/* <div className="contact-map size21"> */}
            <GoogleMapReact
            
               bootstrapURLKeys={{ key:"AIzaSyAoBGukMgWP82wOqAaDqkXeslb9V4jXH28" }}
              defaultCenter={{lat:10.776530,lng:106.700980}}
              defaultZoom={16}
        >
           <AnyReactComponent
            lat={10.776530}
            lng={106.700980}
            text="My Marker"
          />
        </GoogleMapReact>
        {/* </div> */}
          </div>
          <div className="col-md-6 p-b-30">
              <h4 className="m-text26 p-b-36 p-t-15">Địa chỉ</h4>
              <p className="p-b-28">Fugit iaculis. Ultrices perferendis delectus, class placeat nam lectus</p>
              <p className="p-b-28">Fugit iaculis. Ultrices perferendis delectus, class placeat nam lectus</p>
              <p className="p-b-28">Fugit iaculis. Ultrices perferendis delectus, class placeat nam lectus</p>
              <p className="p-b-28">Fugit iaculis. Ultrices perferendis delectus, class placeat nam lectus</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;