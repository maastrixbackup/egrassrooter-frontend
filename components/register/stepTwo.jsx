import React, { useEffect, useState } from "react";
import { PostData } from "../../utils/ApiCalls";

function StepTwo({ register, errors, handleBack, watch, setValue }) {
  const title = watch("title");
  const enteredSlug = watch("slug");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await PostData(`register/get-slug/${getFullSlug()}`);
        setValid(true);
      } catch (error) {
        setValid(false);
      }
    };
    if (enteredSlug) fetch();
  }, [enteredSlug]);

  useEffect(() => {
    if(title)
    generateSlug();
  }, [title]);

  const generateSlug = () => {
    const baseSlug = title.trim().toLowerCase().replace(/\s+/g, "-");
    setValue("slug", baseSlug);
  };

  const getFullSlug = () => {
    const baseSlug = watch("slug");
    return `${baseSlug}.egrassrooter.com`;
  };

  return (
    <fieldset>
      <div className="generate_url_bx">
        <div className="gene_title">
          <h3>Generate URL</h3>
          <p>Kindly enter your campaign name to generate your URL</p>
        </div>
        <div className="gene_form register-form">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Campaign Name"
                  className={
                    errors.title ? "form-control errorBox" : "form-control"
                  }
                  {...register("title", { required: "This field is required" })}
                />
                {errors.title && (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation-triangle"></i>{" "}
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={
                      errors.slug ? "form-control errorBox" : "form-control"
                    }
                    placeholder="Campaign URL"
                    {...register("slug", {
                      required: "This field is required",
                      validate: () => valid || "The slug is already in use. Please choose a different one.",
                    })}
                  />
                  <span className="input-group-text">
                    .egrassrooter.com
                  </span>
                </div>
                {errors.slug && (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation-triangle"></i>{" "}
                    {errors.slug.message}
                  </p>
                )}
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
      <button type="submit" className="btn-login full next color-light">
        Next Step
      </button>
    </fieldset>
  );
}

export default StepTwo;
