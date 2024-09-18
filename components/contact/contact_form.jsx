import React, { useState } from "react";
import { PostData } from "../../utils/ApiCalls";
import { toast } from "react-toastify";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await PostData("contact-us-form", formData);
      toast.success(response.message);
      location.reload();
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-two">
      <div className="container">
        <div>
        </div>
        <div className="row">
          <div className="col-xl-7">
            <div className="contact-two__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Contact</span>
                </div>
                <h2 className="section-title__title">Get in Touch Here</h2>
              </div>
              <form
                className="contact-form-validated contact-two__form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-two__input-box">
                      <input
                        type="text"
                        name="contact_name"
                        placeholder="Name"
                        required
                        aria-required="true"
                        value={formData.contact_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-two__input-box">
                      <input
                        type="email"
                        name="contact_email"
                        placeholder="E-mail"
                        required
                        aria-required="true"
                        value={formData.contact_email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="contact-two__input-box">
                      <input
                        type="text"
                        name="contact_subject"
                        placeholder="Subject"
                        required
                        aria-required="true"
                        value={formData.contact_subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-two__input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
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
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="contact-two__right">
              <div className="contact-two__img">
                <img src="/images/contact.jpg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
