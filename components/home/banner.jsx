import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = ({ banners }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    loop:true,
    nav: false,
    dots: true,
    autoplay: true,

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
      <Image src="/images/banner-shape.png" className="banner-shape" alt="Contact" width={500} height={500} />
      <a href="#about" className="dn-ar">
        <Image src="/images/arrow-down.png" alt="Contact" width={500} height={500}  />
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
