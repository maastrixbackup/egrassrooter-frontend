import React from "react";
import Image from "next/image";

const AboutWhoWeAre = ({aboutmain}) => {
  return (
    <section className="about-area-seven pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about-img-seven-wrap">
              <Image src={aboutmain.who_we_are_image1} alt="abcd" width={500} height={500} data-aos="fade-right" data-aos-delay={0}  className="aos-init aos-animate" />
              <Image
                src={aboutmain.who_we_are_image2}
                alt="abcd" width={500} height={500}
                data-aos="fade-up"
                data-aos-delay={300}
                className="aos-init aos-animate"
              />
              <Image
                src="/images/inner_about_shape01.png"
                alt="abcd" width={500} height={500}
                className="shape aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={500}
              />
              <div
                className="experience-wrap aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={0}
              >
                <h2 className="title">{aboutmain.year_of_exp}</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-seven">
              <div className="section-title mb-30">
                <span className="sub-title">{aboutmain.who_we_are_heading}</span>
                <h2 className="title">
                  {aboutmain.who_we_are_title}
                </h2>
              </div>
              <p>
                {aboutmain.who_we_are_desc1}
              </p>
              <div className="success-wrap-two">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <Image src={aboutmain.revenue_image} alt="abcd" width={500} height={500} />
                    </div>
                    <div className="content">
                      <h2 className="count">{aboutmain.revenue_count}</h2>
                      <p>Total revenue</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={aboutmain.sales_image} alt="abcd" width={500} height={500} />
                    </div>
                    <div className="content">
                      <h2 className="count">{aboutmain.sales_count}</h2>
                      <p>Increase in sales</p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="info-two">
                {aboutmain.who_we_are_desc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
