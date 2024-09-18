import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PopularPost = ({ popposts }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="col-12">
        <div className="new-srl-bx">
          <div className="section-title">
            <h4>Popular Posts</h4>
          </div>
          <OwlCarousel className="owl-theme newscarouselbx" {...options}>
            {popposts?.map((poppost, i) => (
              <div key={i} className="item">
                <div className="card shadow">
                  <img
                    src={poppost.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                  <div className="card-body">
                    <a href="#" className="text-danger text-uppercase fw-bold">
                      {poppost.category_name}
                    </a>
                    <h5 className="card-title fw-bold">
                     {poppost.title}
                    </h5>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="far color-nvyblue fa-calendar-alt" /> {poppost.date}
                      </li>
                      <li className="list-inline-item">
                        <i className="fas color-nvyblue fa-user" /> {poppost.created_by}
                      </li>
                    </ul>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: poppost.news_description,
                      }}
                    />
                   
                    <div className="d-flex justify-content-end">
                      <a href="your-target-page.html" className="btn-read-more">
                        Read More <i className="fas fa-chevron-right" />
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default PopularPost;
