import React from "react";

const AddSurvey = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Survey
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Survey</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="event-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="survet-img">
                  <img src="/images/survey2.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor>
                        Title <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor>
                        Description <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <textarea
                        name
                        id
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-end">
                    <a href="#" className="btn-event">
                      Create
                    </a>
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

export default AddSurvey;
