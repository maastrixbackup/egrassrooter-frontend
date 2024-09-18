import React from "react";

const DashBoardTopBar = () => {
  return (
    <section className="topbar_sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="topbar_sec_fig">
              <a href>
                <img src="/images/logo.png" alt />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="topbar_sec_rgt">
              {/* <a href>
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </a> */}
              <a href>
                <div className="topbar_sec_rgt_fig">
                  <img src="/images/logo-pic.jpg" alt />
                </div>
              </a>
              <h3>Kesiena Manager</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoardTopBar;
