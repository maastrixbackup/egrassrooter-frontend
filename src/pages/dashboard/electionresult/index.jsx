import React, { useEffect, useState } from "react";
import ElectionResult from "../../../../components/dashboard/ElectionResult/ElectionResult";
import EleCountryMapResult from "../../../../components/dashboard/ElectionResult/EleCountryMapResult";
import EleCountryMap from "../../../../components/dashboard/ElectionResult/EleCountryMap";
import Eleparty from "../../../../components/dashboard/ElectionResult/Eleparty";
import ElePartyResultTable from "../../../../components/dashboard/ElectionResult/ElePartyResultTable";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [electionresults, setElectionresultsList] = useState({
    electiontype: [],
    statedata: [],
    electionyears: [],
  });
  const [selectedElectionType, setSelectedElectionType] = useState("");
  const [electionResultsData, setElectionresultsData] = useState(null);
  
  const [getdata, setData] = useState({
    election_type: "",
    state_id: "",
    election_year: "",
  });

  // Fetch initial data for election options
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchElections = async () => {
      try {
        const response = await axiosGet("election-results", `Bearer ${token}`);
        if (response) {
          setElectionresultsList(response);
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

  // Fetch election results on getdata change (triggered only when `getdata` is complete)
  useEffect(() => {
    if (getdata.election_type && getdata.election_year) {
      handleSubmit();
    }
  }, [getdata]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const resData = await PostData(
          "filter/election-results",
          getdata,
          "",
          `Bearer ${token}`
        );
        setElectionresultsData(resData);
      } catch (error) {
        toast.error("An error occurred while adding the blog.");
      }
    } else {
      toast.error("No token found.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleElectionTypeChange = (event) => {
    setSelectedElectionType(event.target.value);
    handleChange(event);
  };

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
        <div className="ele-re-bx">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="ele-re-title">
                  <h3>Election</h3>
                  <p>General Election conducted by INEC</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="ele-yr-select">
                  <label>Election Type</label>
                  <select className="form-select" name="election_type"  value={getdata.election_type} onChange={handleElectionTypeChange}>
                    <option value="">Select Election Type</option>
                    {electionresults.electiontype.map((eleType, i) => (
                      <option key={i} value={eleType.id}>
                        {eleType.election_type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {selectedElectionType !== "1" && (
                <div className="col-lg-4">
                  <div className="ele-yr-select">
                    <label>State</label>
                    <select className="form-select" name="state_id" value={getdata.state_id} onChange={handleChange}>
                      <option value="">Select State</option>
                      {electionresults.statedata.map((state, i) => (
                        <option key={i} value={state.id}>
                          {state.state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <div className="col-lg-4">
                <div className="ele-yr-select">
                  <label>Election Year</label>
                  <select className="form-select" name="election_year" value={getdata.election_year} onChange={handleChange}>
                    <option value="">Select Election Year</option>
                    {electionresults.electionyears.map((yeardata, i) => (
                      <option key={i} value={yeardata.year}>
                        {yeardata.year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ElectionResult data={electionresults} resultsData={electionResultsData} />
        <div className="ele-show-gh-bx">
          <div className="row">
            <div className="col-lg-6">
              <EleCountryMap resultsData={electionResultsData} state={'ng-on'} 
                // state={getdata.state_id}
              />
            </div>
            <div className="col-lg-6">
              <EleCountryMapResult resultsData={electionResultsData} />
            </div>
          </div>
        </div>
        <Eleparty data={electionresults} resultsData={electionResultsData} />
        <ElePartyResultTable data={electionresults} resultsData={electionResultsData} />
      </div>
    </>
  );
};

export default Index;
