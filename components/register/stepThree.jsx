import React, { useEffect, useState } from "react";
import { axiosGet } from "../../utils/ApiCalls";

const StepThree = ({
  register,
  errors,
  handleBack,
  campaignId,
  data,
  watch,
}) => {
  const state = watch("state");
  const [senatorialStates, setSenatorialStates] = useState([]);
  const [federalContituencies, setFederalContituencies] = useState([]);
  const [localContituencies, setLocalContituencies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axiosGet("getsenatorial-states/" + state);
        setSenatorialStates(data.senatorialstatedata);
        const data1 = await axiosGet("getfederal-constituency/" + state);
        setFederalContituencies(data1.federalconstituencydata);
        const data2 = await axiosGet("getlocal-constituency/" + state);
        setLocalContituencies(data2.localconstituencydata);
      } catch (error) {}
    };
    fetch();
  }, [state]);
  return (
    <fieldset>
      <div class="generate_url_bx">
        <div class="gene_title">
          <h3>Create Your Campaign</h3>
          <p>Kindly Fill with appropriate details</p>
        </div>
        <div class="gene_form register-form">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label for="">
                  What political office are you campaigning for <span>*</span>
                </label>
                <select name="" id="" class="form-select" disabled>
                  {data.electiontypedata.map((eleType, i) => (
                    <option
                      key={i}
                      value={eleType.id}
                      selected={campaignId == eleType.id ? "selected" : ""}
                    >
                      {eleType.electiontype}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {campaignId != 1 && (
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label for="">
                    Select State <span>*</span>
                  </label>
                  <select
                    className={
                      errors.state ? "form-select errorBox" : "form-select"
                    }
                    {...register("state", {
                      required: "This field is required",
                    })}
                  >
                    <option value="">-Select a state-</option>
                    {data.statedata.map((eleType, i) => (
                      <option key={i} value={eleType.id}>
                        {eleType.name}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>{" "}
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {campaignId == 3 && (
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label for="">
                    Select Senatorial District <span>*</span>
                  </label>
                  <select
                    className={
                      errors.senatorial_district_id
                        ? "form-select errorBox"
                        : "form-select"
                    }
                    {...register("senatorial_district_id", {
                      required: "This field is required",
                    })}
                    class="form-select"
                  >
                    <option value="">Select a Senatorial state</option>
                    {senatorialStates.map((state, i) => (
                      <option key={i} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.senatorial_district_id && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>{" "}
                      {errors.senatorial_district_id.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {campaignId == 4 && (
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label for="">
                    Select Federal constituency <span>*</span>
                  </label>
                  <select
                    className={
                      errors.federal_constituency_id
                        ? "form-select errorBox"
                        : "form-select"
                    }
                    {...register("federal_constituency_id", {
                      required: "This field is required",
                    })}
                    class="form-select"
                  >
                    <option value="">Select a Senatorial state</option>
                    {federalContituencies.map((state, i) => (
                      <option key={i} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.federal_constituency_id && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>{" "}
                      {errors.federal_constituency_id.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {campaignId == 6 && (
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label for="">
                    Select Local constituency <span>*</span>
                  </label>
                  <select
                    className={
                      errors.local_constituency_id
                        ? "form-select errorBox"
                        : "form-select"
                    }
                    {...register("local_constituency_id", {
                      required: "This field is required",
                    })}
                    class="form-select"
                  >
                    <option value="">Select a Senatorial state</option>
                    {localContituencies.map((state, i) => (
                      <option key={i} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.local_constituency_id && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>{" "}
                      {errors.local_constituency_id.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {campaignId != 7 && (
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label for="">What is the name of your political party</label>
                  <select name="political_party" id="" class="form-select">
                    <option value="">SELECT PARTY</option>
                    {data.partydata.map((party, i) => (
                      <option key={i} value={party.id}>
                        {party.party_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {campaignId == 7 && (
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="NGO Name"
                    className={
                      errors.ngo ? "form-control errorBox" : "form-control"
                    }
                    {...register("ngo", { required: "This field is required" })}
                  />
                  {errors.ngo && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle">
                        {errors.ngo.message}
                      </i>
                    </p>
                  )}
                </div>
              </div>
            )}
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
      <button type="submit" className="btn-login full next color-light">
        Next Step
      </button>
    </fieldset>
  );
};

export default StepThree;
