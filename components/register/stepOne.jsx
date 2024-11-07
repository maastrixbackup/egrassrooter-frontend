import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function StepOne({ register, errors, data, watch }) {
  const recaptchaRef = React.createRef();
  const today = new Date().toISOString().split('T')[0];

  const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    // Store or use the reCAPTCHA token if needed
  };

  return (
    <fieldset>
      <div className="register-form">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className={errors.first_name ? "form-control errorBox" : "form-control"}
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className={errors.last_name ? "form-control errorBox" : "form-control"}
                {...register("last_name", { required: true })}
              />
              {errors.last_name && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <select
                name="campaign_type"
                className={errors.campaign_type ? "form-select errorBox" : "form-select"}
                {...register("campaign_type", { required: true })}
              >
                <option value="">Select Campaign Type</option>
                {data.electiontypedata.map((eleType, i) => (
                  <option key={i} value={eleType.id}>
                    {eleType.electiontype}
                  </option>
                ))}
              </select>
              {errors.campaign_type && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <select
                name="user_type"
                className={errors.user_type ? "form-select errorBox" : "form-select"}
                {...register("user_type", { required: true })}
              >
                <option value="">Select User Type</option>
                {data.role_type_data.map((roleType, i) => (
                  <option key={i} value={roleType.id}>
                    {roleType.role_name}
                  </option>
                ))}
              </select>
              {errors.user_type && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <select
                name="user_type"
                className={
                  errors.user_type ? "form-select errorBox" : "form-select"
                }
                {...register("user_type", { required: true })}
              >
                <option value="">Select Role Type</option>
                {data.role_type_data.map((roleType, i) => (
                  <option key={i} value={roleType.id}>
                    {roleType.role_name}
                  </option>
                ))}
              </select>
              {errors.user_type && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="date"
                className={errors.date_of_registration ? "form-control errorBox" : "form-control"}
                {...register("date_of_registration", { required: true })} max={today}
              />
              {errors.date_of_registration && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email Address"
                className={errors.email ? "form-control errorBox" : "form-control"}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter Phone Number"
                className={errors.phone_number ? "form-control errorBox" : "form-control"}
                {...register("phone_number", { required: true })}
              />
              {errors.phone_number && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter Password"
                className={errors.pass ? "form-control errorBox" : "form-control"}
                {...register("pass", { required: true, minLength: 8 })}
              />
              {errors.pass && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i> This field is required
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                className={errors.pass_confirmation ? "form-control errorBox" : "form-control"}
                {...register("pass_confirmation", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("pass") || "Passwords do not match",
                })}
              />
              {errors.pass_confirmation && (
                <p className="errorMsg">
                  <i className="fas fa-exclamation-triangle"></i>{" "}
                  {errors.pass_confirmation.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group d-flex">
              <input
                type="checkbox"
                {...register("terms", { required: true })}
              />
              <label>
                Check this box to accept the <a href="#">Terms & Conditions</a>{" "}
                and <a href="#">Privacy Policy</a>
              </label>
              {errors.terms && <span>This field is required</span>}
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="captcha-img">
              <ReCAPTCHA
                sitekey="6Lc4yg0iAAAAADzNkFQQOL7hIE7iVBIrv9hhjvis" // Replace with your site key
                onChange={handleRecaptchaChange}
                ref={recaptchaRef}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn-login full next color-light">
        Next
      </button>
    </fieldset>
  );
}

export default StepOne;
