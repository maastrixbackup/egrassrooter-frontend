import React from "react";

const AddMember = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Member
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Member</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="event-form">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Role Type <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>Select Role Type</option>
                    <option>campaign</option>
                    <option>Donor</option>
                    <option>campaign</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Member Name <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Gender <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <div className="form-group-flex">
                    <div className="form-group">
                      <input
                        type="radio"
                        id="male"
                        name="fav_language"
                        defaultValue="MALE"
                      />
                      <label htmlFor="male">MALE</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="radio"
                        id="female"
                        name="fav_language"
                        defaultValue="FEMALE"
                      />
                      <label htmlFor="female">FEMALE</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Phone Number <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Email Id <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Date of Birth <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <div className="input-icon-ab">
                    <input
                      type="text"
                      placeholder
                      id="datepicker"
                      className="form-control"
                    />
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Voters ID Number <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <div className="input-icon-ab">
                    <input type="text" placeholder className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Voting State <span>*</span>
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>Select State</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Senatorial State
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>--Select Senatorial State--</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Voting Local Government
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>--Select LGA--</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <label htmlFor>
                    Voting Registration Area (Ward)
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>--Select Ward--</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Polling Unit <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>--Select Polling Unit--</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Code <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Occupation <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Lattitude <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Longitude <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="form-group">
                  <label htmlFor>
                    Date of Registration
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <input type="text" placeholder className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor>
                    Political Party
                    <i className="fa-solid fa-circle-info" />
                  </label>
                  <select name id className="form-select">
                    <option>--Select Political Party--</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor>
                    Address <span>*</span>
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
                  Create Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;
