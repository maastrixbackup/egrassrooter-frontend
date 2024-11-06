import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function RadioInputToggle() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [pollingList, setPollingList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPollingUnit, setSelectedPollingUnit] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [pollingAgentType, setPollingAgentType] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAutoComplete = async (event) => {
    const tokenData = localStorage.getItem("token");
    const data = {
      polling_units: event.query,
    };
    if (tokenData) {
      try {
        const response = await PostData("polling-units-list", data, "", `Bearer ${tokenData}`);
        setSuggestions(response.polling_units || []);
      } catch (error) {
        toast.error("An error occurred while fetching suggestions.");
      }
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const response = await PostData("add-polling-agent", {
          agent_options: selectedOption,
          polling_agents: selectedAgent,
          polling_units: selectedPollingUnit,
          polling_agent_type: pollingAgentType,
        }, "", `Bearer ${tokenData}`);

        if (response && response.message) {
          toast.success(response.message);
          router.push("/dashboard");
        } else {
          toast.error("Failed to create polling agent.");
        }
      } catch (error) {
        toast.error("An error occurred while submitting data.");
      }
    } else {
      toast.error("Authorization token missing. Please login again.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");
      if (tokenData) {
        try {
          const res = await axiosGet("polling-agent-list", `Bearer ${tokenData}`);
          setPollingList(res.polling_agents || []);
        } catch (error) {
          toast.error("An error occurred. Please login again.");
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Polling Agents
            </li>
          </ol>
        </nav>
      </div>
      <div className="cam-agent-sec">
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Polling Agents</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="event-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="survey-img">
                  <img src="/images/elec-img.jpg" alt="Election" />
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleUpdate}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-radio-bx">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="d-flex gap-2">
                                <input type="radio" name="agent_options" value="email" checked={selectedOption === "email"} onChange={handleOptionChange} />
                                <label>Email (Select Member of polling agents)</label>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="d-flex gap-2">
                                <input type="radio" name="agent_options" value="vin" checked={selectedOption === "vin"} onChange={handleOptionChange} />
                                <label>VIN number</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="input1" className="input-box" style={{ display: selectedOption === "email" ? "block" : "none" }}>
                          <label htmlFor="polling_agents_email">Polling Agent Email <span>*</span><i className="fa-solid fa-circle-info" /></label>
                          <select
                            className="form-control"
                            id="polling_agents_email"
                            name="polling_agents"
                            onChange={(e) => setSelectedAgent(e.target.value)}
                          >
                            <option value="">Select Email</option>
                            {pollingList.map((polling, i) => (
                              <option key={i} value={polling.id}>{polling.email}</option>
                            ))}
                          </select>
                        </div>
                        <div id="input2" className="input-box" style={{ display: selectedOption === "vin" ? "block" : "none" }}>
                          <label htmlFor="polling_agents_vin">Polling Agents VIN <span>*</span><i className="fa-solid fa-circle-info" /></label>
                          <select
                            className="form-control"
                            id="polling_agents_vin"
                            name="polling_agents"
                            onChange={(e) => setSelectedAgent(e.target.value)}
                          >
                            <option value="">Select VIN</option>
                            {pollingList.map((polling, i) => (
                              <option key={i} value={polling.id}>{polling.vin}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <label htmlFor="input1-box">Polling Unit <span>*</span><i className="fa-solid fa-circle-info" /></label>
                        <AutoComplete
                          name="polling_units"
                          className="w-100"
                          suggestions={suggestions}
                          completeMethod={handleAutoComplete}
                          field="polling_name" 
                          placeholder="Type to search..."
                          value={selectedPollingUnit ? selectedPollingUnit.polling_name : ''}
                          onChange={(e) => {
                            setSelectedPollingUnit(e.value ? { id: e.value.id, polling_name: e.value.id } : null); // Save the full object with id and polling_name
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 form-radio-bx mt-3">
                      <div className="form-group">
                        <label>Polling Agent Type <span>*</span><i className="fa-solid fa-circle-info" /></label>
                      </div>
                      <div className="form-group-flex">
                        <div className="form-group d-flex gap-2">
                          <input type="radio" id="tra" name="polling_agent_type" value="1" onChange={(e) => setPollingAgentType(e.target.value)} />
                          <label htmlFor="tra">Trained</label>
                        </div>
                        <div className="form-group d-flex gap-2">
                          <input type="radio" id="untra" name="polling_agent_type" value="0" onChange={(e) => setPollingAgentType(e.target.value)} />
                          <label htmlFor="untra">Untrained</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 text-end">
                      <button type="submit" className="btn-event">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
