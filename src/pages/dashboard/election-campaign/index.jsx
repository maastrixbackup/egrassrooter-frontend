import React from "react";

const index = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Election Campaign
            </li>
          </ol>
        </nav>
        <div className="election_sec">
          <div className="election_title_bx">
            <h3>Select Election type</h3>
            <p>Select any election to view results.</p>
          </div>
          <div className="election_cont_bx">
            <div className="row">
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Governorship Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Senatorial Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_bx">
                  <h2>Presidential Campaign</h2>
                  <a href="#" className="ar-icon">
                    <i className="fal fa-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
