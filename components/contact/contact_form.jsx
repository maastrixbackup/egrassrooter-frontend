import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PostData } from "../../utils/ApiCalls";
import { toast } from "react-toastify";
import Image from "next/image";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const isValid = await trigger(); // Manually trigger validation on form submit
    if (!isValid) return;

    setLoading(true);
    try {
      const response = await PostData("contact-us-form", data);
      toast.success(response.message);
      reset(); // Reset the form after successful submission
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-form">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="contact-two__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Contact</span>
                </div>
                <h2 className="section-title__title">Get in Touch Here</h2>
              </div>
              <form className="contact-form-validated contact-two__form" onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className={errors.contact_name ? "form-control errorBox" : "form-control"}
                        {...register("contact_name", { required: "Name is required" })}
                      />
                      {errors.contact_name && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i> {errors.contact_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className={errors.contact_email ? "form-control errorBox" : "form-control"}
                        {...register("contact_email", { required: "Email is required" })}
                      />
                      {errors.contact_email && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i> {errors.contact_email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter Subject"
                        className={errors.contact_subject ? "form-control errorBox" : "form-control"}
                        {...register("contact_subject", { required: "Subject is required" })}
                      />
                      {errors.contact_subject && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i> {errors.contact_subject.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Enter Message"
                        className={errors.message ? "form-control errorBox" : "form-control"}
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i> {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-two__btn-box">
                      <button
                        type="submit"
                        className="btn-one"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Now"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="contact-two__right">
              <div className="contact-two__img">
                <Image src="/images/contact.jpg" alt="Contact" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
