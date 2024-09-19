import React from "react";
import ElectionResult from "../../../../components/dashboard/ElectionResult/ElectionResult";
import EleCountryMapResult from "../../../../components/dashboard/ElectionResult/EleCountryMapResult";
import EleCountryMap from "../../../../components/dashboard/ElectionResult/EleCountryMap";
import Eleparty from "../../../../components/dashboard/ElectionResult/Eleparty";
import ElePartyResultTable from "../../../../components/dashboard/ElectionResult/ElePartyResultTable";

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
                Election Result
              </li>
            </ol>
          </nav>
        </div>
        <div className="election-result-bx">
         <ElectionResult />
          <div className="ele-show-gh-bx">
            <div className="row">
              <div className="col-lg-6">
                <EleCountryMap />
              </div>
              <div className="col-lg-6">
                <EleCountryMapResult />
              </div>
            </div>
          </div>
          <Eleparty />
          <ElePartyResultTable />
        </div>
    </>
  );
};

export default Index;
