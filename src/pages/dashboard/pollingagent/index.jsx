import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function RadioInputToggle() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
    setItems2([...Array(10).keys()].map((item) => event.query + "-" + item));
    setItems3([...Array(10).keys()].map((item) => event.query + "-" + item));
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
                <div className="survet-img">
                  <img src="/images/elec-img.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="form-radio-bx">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="d-flex gap-2">
                              <input type="radio" name="option" value="email" checked={selectedOption === "email"} onChange={handleOptionChange} />
                              <label>
                                Email (Select Member of polling agents)
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="d-flex gap-2">
                              <input type="radio" name="option" value="vin" checked={selectedOption === "vin"} onChange={handleOptionChange} />
                              <label>VIN number</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="input1" className="input-box" style={{ display: selectedOption === "email" ? "block" : "none", }}>
                        <label htmlFor="input1-box"> Polling Agent Email <span>*</span>
                          <i className="fa-solid fa-circle-info" />
                        </label>
                        <AutoComplete className="w-100" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}/>
                      </div>
                      <div id="input2" className="input-box" style={{ display: selectedOption === "vin" ? "block" : "none", }}>
                        <label htmlFor="input1-box"> Polling Agents VIN <span>*</span>
                          <i className="fa-solid fa-circle-info" />
                        </label>
                        <AutoComplete className="w-100" value={value2} suggestions={items2} completeMethod={search} onChange={(e) => setValue2(e.value)}/>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mt-3">
                      <label htmlFor="input1-box"> Polling Unit <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <AutoComplete className="w-100" value={value3} suggestions={items3} completeMethod={search} onChange={(e) => setValue3(e.value)}/>
                    </div>
                  </div>
                  <div className="col-lg-12 form-radio-bx mt-3">
                    <div className="form-group">
                      <label htmlFor> Polling Agent Type <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                    </div>
                    <div className="form-group-flex">
                      <div className="form-group d-flex gap-2">
                        <input type="radio" id="tra" name="fav_language" defaultValue="Trained" />
                        <label htmlFor="tra">Trained </label>
                      </div>
                      <div className="form-group d-flex gap-2">
                        <input type="radio" id="vin" name="fav_language" defaultValue="VIN"/>
                        <label htmlFor="vin">VIN number</label>
                      </div>
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
}
