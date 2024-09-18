import React from "react";
import InnerBanner from "../../../components/Common/inner_banner";

const Index = ({ data }) => {  
    const intitle = data?.donation?.page_name || 'Donation';
    const inimage = {
      backgroundImage: `url(${data?.donation?.banner_image})`,
    };
  return (
    <>
    <InnerBanner intitle={intitle} inimage={inimage} />
    <section className="ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="don-title">
              <h1>MAKE A DONATION</h1>
              <p>
                Donate to your favourite Political Party/Candidate for Political
                Campaign.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mon-img">
              <img src="/images/money2.jpg" alt />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mon-cont-bx">
              <div className="event-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Name of the Donor <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Full Name Here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Email ID <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Email ID"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Mobile Number <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Mobile Number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Political Party Name <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <select name id className="form-select">
                        <option>Select political party/candidate</option>
                        <option>Young Progressive Party (BOLA TINUBU)</option>
                        <option>
                          Peoples Democratic Party (Sidhartha Das)
                        </option>
                        <option>African Action Congress (Osita Chidoka)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Comments <span>*</span>
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
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor>
                        Choose Donation Amount<span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <div className="form-group-flex-multi">
                        <div>
                          <input
                            type="radio"
                            id="am1"
                            name="amount"
                            defaultValue="am1"
                          />
                          <label htmlFor="am1">₦ 1000 </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="am2"
                            name="amount"
                            defaultValue="am2"
                          />
                          <label htmlFor="am2">₦ 2000 </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="am3"
                            name="amount"
                            defaultValue="am3"
                          />
                          <label htmlFor="am3">₦ 3000 </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="am4"
                            name="amount"
                            defaultValue="am4"
                          />
                          <label htmlFor="am4">₦ 4000 </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="am5"
                            name="amount"
                            defaultValue="am5"
                          />
                          <label htmlFor="am5">₦ 5000 </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="am6"
                            name="amount"
                            defaultValue="am6"
                          />
                          <label htmlFor="am6">Other Amount</label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="otherAmountContainer"
                      className="mt-3 mb-3"
                      style={{ display: "none" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Amount in ₦"
                        id="otherAmount"
                        name="otherAmount"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group form-check-bx">
                      <input type="checkbox" />
                      <label htmlFor>
                        I certify that above provided information is correct and
                        there is no mistake. I know that all further
                        communication will be done on above provided details.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 text-end">
                    <a href="#" className="btn-event">
                      DONATE NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Index;
