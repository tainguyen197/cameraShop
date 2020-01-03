import React from "react";

const AboutPage = () => {
  return (
    <section className="bgwhite p-t-66 p-b-38">
      <div className="container">
      <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Giới thiệu</h3>
        </div>
        <div className="row">
          <div className="col-md-4 p-b-30">
            <div className="hov-img-zoom">
              <img src="images/about-page.jpg" alt="IMG-ABOUT" />
            </div>
          </div>
          <div className="col-md-8 p-b-30">
            <h3 className="m-text26 p-t-15 p-b-16">Về chúng tôi</h3>
            <p className="p-b-28">
            Nhận mua bán, trao đổi, nâng cấp, hạ cấp máy ảnh và ống kính Sony.<br/>
            Chúng tôi luôn dành cho bạn sự phục vụ và chi phí thật tốt.<br/>
            Chúng ta là bạn bè.
            
            </p>
            <div className="bo13 p-l-29 m-l-9 p-b-10">
              <p className="p-b-11">
              "Chúng tôi luôn dành cho bạn sự phục vụ và chi phí thật tốt .
            Chúng ta là bạn bè"
              </p>
              <span className="s-text7">- Nguyễn Duy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
