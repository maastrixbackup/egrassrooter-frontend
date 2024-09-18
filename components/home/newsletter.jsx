import React from "react";

const Newsletter = () => {
  return (
    <section className="ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-update">
              <h4>stay update with us</h4>
              <p>
                Be in the know of the latest updates and infomation needed to
                keep you abreast with our operations and activities. Subscribe
                to our newsletter.
              </p>
              <div className="eg-input-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your e-mail here"
                />
                <a href="#" className="up-btn">
                  Get It Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
