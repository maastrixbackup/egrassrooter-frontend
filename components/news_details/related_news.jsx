import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RelatedNews = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
    
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        },
      };
  return (
    <>
      <div className="new-srl-bx">
        <div className="section-title">
          <h4>Related Posts</h4>
        </div>
        <OwlCarousel className="owl-theme newsrelatedbx" {...options}>
          <div className="item">
            <div className="card shadow">
              <img
                src="/images/ne1.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="text-danger text-uppercase fw-bold">
                  Political
                </a>
                <h5 className="card-title fw-bold">
                  Full Text Of INEC Chairman’s Speech At Meeting With AU
                  Delegation
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                    2024
                  </li>
                  <li className="list-inline-item">
                    <i className="fas color-nvyblue fa-user" /> John Doe Aliin
                  </li>
                </ul>
                <p className="card-text">
                  Sed cursus eget risus non vestibulum. Sed in molestie elit,
                  vitae condimentum justo. Aenean vulputate leo metus, sed
                  imperdiet lorem fermentum et metus, sed imperdiet.
                </p>
                <div className="d-flex justify-content-end">
                  <a href="your-target-page.html" className="btn-read-more">
                    Read More <i className="fas fa-chevron-right" />
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                src="/images/ne3.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="text-danger text-uppercase fw-bold">
                  Political
                </a>
                <h5 className="card-title fw-bold">
                  Full Text Of INEC Chairman’s Speech At Meeting With AU
                  Delegation
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                    2024
                  </li>
                  <li className="list-inline-item">
                    <i className="fas color-nvyblue fa-user" /> John Doe Aliin
                  </li>
                </ul>
                <p className="card-text">
                  Sed cursus eget risus non vestibulum. Sed in molestie elit,
                  vitae condimentum justo. Aenean vulputate leo metus, sed
                  imperdiet lorem fermentum et metus, sed imperdiet.
                </p>
                <div className="d-flex justify-content-end">
                  <a href="your-target-page.html" className="btn-read-more">
                    Read More <i className="fas fa-chevron-right" />
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                src="/images/ne2.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="text-danger text-uppercase fw-bold">
                  Political
                </a>
                <h5 className="card-title fw-bold">
                  Full Text Of INEC Chairman’s Speech At Meeting With AU
                  Delegation
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                    2024
                  </li>
                  <li className="list-inline-item">
                    <i className="fas color-nvyblue fa-user" /> John Doe Aliin
                  </li>
                </ul>
                <p className="card-text">
                  Sed cursus eget risus non vestibulum. Sed in molestie elit,
                  vitae condimentum justo. Aenean vulputate leo metus, sed
                  imperdiet lorem fermentum et metus, sed imperdiet.
                </p>
                <div className="d-flex justify-content-end">
                  <a href="your-target-page.html" className="btn-read-more">
                    Read More <i className="fas fa-chevron-right" />
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                src="/images/ne4.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="text-danger text-uppercase fw-bold">
                  Political
                </a>
                <h5 className="card-title fw-bold">
                  Full Text Of INEC Chairman’s Speech At Meeting With AU
                  Delegation
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                    2024
                  </li>
                  <li className="list-inline-item">
                    <i className="fas color-nvyblue fa-user" /> John Doe Aliin
                  </li>
                </ul>
                <p className="card-text">
                  Sed cursus eget risus non vestibulum. Sed in molestie elit,
                  vitae condimentum justo. Aenean vulputate leo metus, sed
                  imperdiet lorem fermentum et metus, sed imperdiet.
                </p>
                <div className="d-flex justify-content-end">
                  <a href="your-target-page.html" className="btn-read-more">
                    Read More <i className="fas fa-chevron-right" />
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                src="/images/ne5.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="text-danger text-uppercase fw-bold">
                  Political
                </a>
                <h5 className="card-title fw-bold">
                  Full Text Of INEC Chairman’s Speech At Meeting With AU
                  Delegation
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                    2024
                  </li>
                  <li className="list-inline-item">
                    <i className="fas color-nvyblue fa-user" /> John Doe Aliin
                  </li>
                </ul>
                <p className="card-text">
                  Sed cursus eget risus non vestibulum. Sed in molestie elit,
                  vitae condimentum justo. Aenean vulputate leo metus, sed
                  imperdiet lorem fermentum et metus, sed imperdiet.
                </p>
                <div className="d-flex justify-content-end">
                  <a href="your-target-page.html" className="btn-read-more">
                    Read More <i className="fas fa-chevron-right" />
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default RelatedNews;
