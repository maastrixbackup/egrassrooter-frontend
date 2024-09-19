import React from "react";

const About_Category = ({aboutservices}) => {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-pr-box">
              {aboutservices?.map((aboutservice, i) => (
              <div key={i} className="eg-pr-item wow fadeInUpBig" data-wow-delay={`${(i + 1) * 0.2}s`}>
                <div className="eg-pr-title">
                  <i class={aboutservice.icon}></i>
                  <h4>{aboutservice.title}</h4>
                </div>
                <p>
                 {aboutservice.content}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Category;
