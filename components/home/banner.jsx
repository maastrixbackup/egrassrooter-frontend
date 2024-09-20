import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = ({ banners }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
<<<<<<< HEAD
    nav: false,
    dots: true,
    autoplay: false,
=======
    loop:true,
    nav: false,
    dots: true,
    autoplay: true,
>>>>>>> devsinu

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section className="eg-banner-sec">
      <img src="/images/banner-shape.png" alt className="banner-shape" />
      <a href="#about" className="dn-ar">
        <img src="/images/arrow-down.png" alt />
      </a>
      <OwlCarousel className="owl-theme eg-banner-bx" {...options}>
        {banners?.map((banner, i) => (
          <div
            key={i}
            className="eg-banner-item"
            style={{ backgroundImage: `url(${banner.banner_image})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="eg-banner-cont">
                    <h3>{banner.banner_title}</h3>
                    <p>
                     {banner.banner_desc}
                    </p>
                    <a href={banner.banner_button_url} className="btn-two">
                     {banner.banner_button_name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Banner;
