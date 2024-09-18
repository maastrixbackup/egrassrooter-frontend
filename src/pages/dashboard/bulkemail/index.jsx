import React from "react";

const Index = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Send Email
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Compose Mail</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="event-form">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="bulk_email_img">
                  <img src="/images/bulk_email.jpg" alt />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="bulk_emil_cont event-from">
                  <div className="email_filed_form">
                    <select name id className="form-select">
                      <option>-- Select Role Type --</option>
                      <option>Campaign Staff</option>
                      <option>Donors</option>
                      <option>Grassrooter</option>
                      <option>Sponsers</option>
                    </select>
                    <a href="#" className="btn-danger-big">
                      Reset
                    </a>
                  </div>
                  <div className="emil_title form-group mt-3">
                    <label htmlFor>
                      Select Emails <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                  </div>
                  <div className="email_form_box">
                    <div className="emqail_check_bx mb-3">
                      <input type="checkbox" id="toggleCheckbox" />
                      <label htmlFor="toggleCheckbox">Select All</label>
                    </div>
                    <div id="toggleDiv " className="mb-3">
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div className="email_form">
                      <img src="/images/email_form.png" alt />
                      <a href="#" className="btn-event mt-3">
                        Compose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
