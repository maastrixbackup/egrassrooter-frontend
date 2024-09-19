import React from "react";

const WhyChoose = ({ whychoose }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-revol-box">
              <div className="eg-why-title">
                <h4>{whychoose.why_choose_us_title}</h4>
              </div>
              <div className="eg-why-list">
                <div
                  dangerouslySetInnerHTML={{
                    __html: whychoose.why_choose_us_desc,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
