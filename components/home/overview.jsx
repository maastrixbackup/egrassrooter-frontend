import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const Overview = ({ overview, softwareheading }) => {
  return (
    <section className="eg-overview-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-quick-over-cont">
              <h1>{softwareheading.overview_title}</h1>
              <p>{softwareheading.overview_desc}</p>
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
                  {overview.map((item, index) => (
                    <li className="nav-item" role="presentation" key={item.id}>
                      <button
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={`pills-tab-${item.id}`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-tab-content-${item.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-tab-content-${item.id}`}
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                {overview.map((item, index) => (
                  <div
                    key={item.id}
                    className={`tab-pane fade ${index === 0 ? "show active" : ""
                      }`}
                    id={`pills-tab-content-${item.id}`}
                    role="tabpanel"
                    aria-labelledby={`pills-tab-${item.id}`}
                    tabIndex={0}
                  >
                    <div className="tab-cont-bx">
                      <img src={item.Image} alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
