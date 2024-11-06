import React, { useEffect, useState } from "react";
import Management from "../../../components/dashboard/Management";
import ElectionResultData from "../../../components/dashboard/ElectionResultData";
import { axiosGet } from '../../../utils/ApiCalls';

const DashBoard = () => {
  const [dashboard, dashboardData] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchElections = async () => {
        try {
            const response = await axiosGet("dashboardget-data", `Bearer ${token}`);
            if (response) {
              dashboardData(response);
            } else {
                toast.error("Failed to fetch election data.");
            }
        } catch (error) {
            console.error("Error fetching election data:", error);
            toast.error("An error occurred while fetching election data.");
        }
    };

    fetchElections();
}, []);

  return (
    <>
      <div className="sidebar_sec_rgt">
        <Management dashboard={dashboard} />
        <ElectionResultData />
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
                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} >
                      1K-10K
                    </div>
                    <span>Twitter </span>
                  </div>
                </div>
                <div className="sidebarbtm_sec_box1_prgrsbar_2">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} >
                      10K-50K
                    </div>
                    <span>Facebook </span>
                  </div>
                </div>
                <div className="sidebarbtm_sec_box1_prgrsbar_3">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} >
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
