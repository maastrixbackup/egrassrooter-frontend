import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = ({ Testimonials }) => {
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
    <section className="ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testi-bx">
              <div className="testi-short-title">
                <span>Client Feedback</span>
              </div>
              <h1>Customer Review</h1>
            </div>
          </div>
          <div className="col-lg-12">
            <OwlCarousel className="owl-theme test-slider" {...options}>
              {Testimonials?.map((clientReview, i) => (
                <div key={i} className="testi-item">
                  <div className="quote-img">
                    <Image src={clientReview.client_image} alt="abcd" width={500} height={500} />
                  </div>
                  <p>
                    {clientReview.description}
                  </p>
                  <div className="client-img">
                    <Image src="/images/avtar.jpg" alt="abcd" width={500} height={500} className="" />
                  </div>
                  <h2>{clientReview.client_name}</h2>
                  <span>{clientReview.position}</span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
