import React from "react";

const About = ({about}) => {
  
  // const { about_title, about_heading, about_desc} = about;
  return (
    <section className="eg-about-sec ptb-100" id="about">
      <div id="circle" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="about-img wow fadeInLeft" data-wow-delay="0.2s">
              <div className="dot-shape">
                <img src="/images/about_shape01.png" alt />
              </div>
              <img src={about.about_image} alt />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-cont">
              <div className="sort-title wow fadeInRight" data-wow-delay="0.2s">
                <p>{about.about_heading}</p>
              </div>
              <h1 className="wow fadeInRight" data-wow-delay="0.4s">
                {about.about_title}
              </h1>
              <p className="wow fadeInRight" data-wow-delay="0.6s">
                {about.about_desc}
              </p>
              <a
                href={about.about_btn_url}
                className="btn-two wow fadeInRight"
                data-wow-delay="0.8s"
              >
              {about.about_btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
