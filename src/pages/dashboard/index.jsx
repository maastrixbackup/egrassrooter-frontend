import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/voters.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt">
                <h3>LGAs</h3>
                <p>774</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/home.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt">
                <h3>Wards</h3>
                <p>308</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/voters.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt">
                <h3>Polling Units</h3>
                <p>176,974</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box bg_drkgrbn">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/voters.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt">
                <h3>Total Registered Voters</h3>
                <p>9,378,000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 ">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/voters.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt fntsm">
                <h3>Grassrooters</h3>
                <p>3,000,000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/phone.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt fntsm">
                <h3>Contacts</h3>
                <p>100,000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/businessman.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt fntsm">
                <h3>Polling Agents</h3>
                <p>976,000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebar_sec_rgt_box">
              <div className="abstlu_dv">
                <div className="sidebar_sec_rgt_box_fig">
                  <img src="/images/stakeholder.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_box_cnt fntsm">
                <h3>Stakeholders</h3>
                <p>150,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-8 col-md-8">
            <div className="sidebar_sec_rgt_cntbx">
              <h3>Voter Turnout Trends</h3>
              <img src="/images/Total-Registered-Voters.png" alt />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="sidebar_sec_rgt_boxs">
              <div className="sidebar_sec_rgt_box_tw">
                <div className="sidebar_sec_rgt_boxs_fig">
                  <img src="/images/voters.png" alt />
                </div>
              </div>
              <div className="sidebar_sec_rgt_boxs_cnt">
                <h3>Projected Voter Turnout</h3>
                <p>2,378,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-3 col-md-3">
            <div className="sidebarbtm_sec_box1">
              <div className="sidebarbtm_sec_box1_cnt cngclr">
                <h3>
                  Social Media <span>Engagement</span>
                </h3>
              </div>
              <div className="sidebarbtm_sec_box1_prgrsbar">
                <div className="sidebarbtm_sec_box1_prgrsbar_1">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      1K-10K
                    </div>
                    <span>Twitter </span>
                  </div>
                </div>
                <div className="sidebarbtm_sec_box1_prgrsbar_2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      10K-50K
                    </div>
                    <span>Facebook </span>
                  </div>
                </div>
                <div className="sidebarbtm_sec_box1_prgrsbar_3">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      50K-500K
                    </div>
                    <span>Instagram </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebarbtm_sec_box2">
              <div className="sidebarbtm_sec_box1_cnt clrfnts">
                <h3>
                  Sentiment <span>Analysis</span>
                </h3>
              </div>
              <div className="sidebarbtm_sec_box2_btm">
                <div className="sidebarbtm_sec_box2_btm_1">
                  <img src="/images/Icons8_flat_pie_chart.png" alt />
                  <h3>Facebook</h3>
                  <span />
                  <p>Positive</p>
                </div>
                <div className="sidebarbtm_sec_box2_btm_1">
                  <img src="/images/Icons8_flat_pie_chart.png" alt />
                  <h3>Instagram</h3>
                  <span style={{ backgroundColor: "#3f51b5" }} />
                  <p>Negative</p>
                </div>
                <div className="sidebarbtm_sec_box2_btm_1">
                  <img src="/images/Icons8_flat_pie_chart.png" alt />
                  <h3>Twitter</h3>
                  <span style={{ backgroundColor: "#448aff" }} />
                  <p>Neutral</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebarbtm_sec_box3">
              <div className="sidebarbtm_sec_box3_hdng">
                <h3>Budget N200b</h3>
              </div>
              <div className="sidebarbtm_sec_box3_fig">
                <img src="/images/round.png" alt />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="sidebarbtm_sec_box4">
              <div className="sidebarbtm_sec_box4_fig">
                <img src="/images/heart.png" alt />
              </div>
              <div className="sidebarbtm_sec_box1_cnt">
                <h3>Donations</h3>
              </div>
              <div className="sidebarbtm_sec_box4_cnt">
                <h3>N80B+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
