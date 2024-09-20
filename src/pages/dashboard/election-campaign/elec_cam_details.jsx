import React from "react";

const elec_cam_details = () => {
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
            <h3>Governorship Election</h3>
            <p>Ward / RA: Arege</p>
            <p>16 Polling Units</p>
          </div>
          <div className="election_cont_bx">
            <div className="row">
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
                {/* Modal */}
                <div
                  className="modal elec-bx-data-mod fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                        <div className="elec-mod">
                          <div className="row align-items-center">
                            <div className="col-lg-6">
                              <div className="elec-img-mod">
                                <img src="assets/images/elec-img.jpg" alt />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="elec-mod-cont">
                                <h2>Arege pri. sch.</h2>
                              </div>
                              <div className="elec-mod-tb">
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td>Code :</td>
                                      <td>08-01-01-001</td>
                                    </tr>
                                    <tr>
                                      <td>Ward</td>
                                      <td>AREGE</td>
                                    </tr>
                                    <tr>
                                      <td>LGA</td>
                                      <td>ABADAM</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="elec_cont_details">
                  <h2>Arege pri. sch.</h2>
                  <p>PU Code: 08-01-01-001</p>
                  <a
                    href="#"
                    className="quick_icon"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Quick View
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

export default elec_cam_details;
