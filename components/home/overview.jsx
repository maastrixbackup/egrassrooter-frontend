import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const Overview = ({overview}) => {
  return (
    <section className="eg-overview-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-quick-over-cont">
              <h1>{overview.overview_title}</h1>
              <p>
               { overview.overview_desc}
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="overview-tab">
              <div className="overview-nav-tab">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Collaboration
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Technology
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Customize
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex={0}
                >
                  <div className="tab-cont-bx">
                    <img src="/images/tab-img.jpg" alt />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-disabled"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabIndex={0}
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
