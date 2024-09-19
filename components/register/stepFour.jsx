import Image from "next/image";
import React from "react";

const StepFour = ({ register, errors, handleBack }) => {
  return (
    <fieldset>
      <div className="generate_url_bx">
        <div className="gene_title sub_title">
          <h3>Subscription</h3>
          <h4>Start your 7 Day Free Trial</h4>
          <p>Enter your card details to get started</p>
        </div>
        <div className="gene_form register-form">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-box">
                <input type="radio" id="card1" name="radio-group" />
                <label htmlFor="card1">
                  <Image
                    width={300}
                    height={300}
                    src="/images/mastercard.png"
                    alt="ss"
                  />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-box">
                <input type="radio" id="card2" name="radio-group" />
                <label htmlFor="card2">
                  <Image
                    width={300}
                    height={300}
                    src="/images/visa.jpg"
                    alt="ss"
                  />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-box">
                <input type="radio" id="card3" name="radio-group" />
                <label htmlFor="card3">
                  <Image
                    width={300}
                    height={300}
                    src="/images/verve.jpg"
                    alt="ss"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Card Number <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Card Holder <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor>
                  Expiry Date <span>*</span>
                </label>
                <div className="row">
                  <div className="col-lg-6">
                    <select name id className="form-select">
                      <option value>Select Month</option>
                      <option value>01</option>
                      <option value>02</option>
                      <option value>03</option>
                      <option value>04</option>
                      <option value>05</option>
                      <option value>06</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <select name id className="form-select">
                      <option value>Select Year</option>
                      <option value>2020</option>
                      <option value>2021</option>
                      <option value>2022</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Cv Code <span>*</span>
                </label>
                <input type="text" placeholder="000" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleBack}
        className="previous btn-prev full"
      >
        Back Step
      </button>
      <button type="submit" className="btn-con">
        Skip to Continue
      </button>
      &nbsp;&nbsp;&nbsp;
      <button type="submit" className="btn-login full next color-light" disabled>
        Subscribe Now
      </button>
    </fieldset>
  );
};

export default StepFour;
