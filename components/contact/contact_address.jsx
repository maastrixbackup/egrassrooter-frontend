import React from "react";

const ContactAddress = ({contactmain}) => {
  return (
    <section className="contact-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">{contactmain.page_banner_text}</span>
          </div>
          <h2 className="section-title__title">Get in Touch With Us</h2>
        </div>
        <div className="contact-one__inner">
          <ul className="contact-one__contact-list list-unstyled">
            <li>
              <div className="icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="content">
                <h3>Lets Talk us</h3>
                <p>
                Phone number: <a href={`tel:${contactmain.contact_phone}`}>{contactmain.contact_phone}</a>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="content">
                <h3>Address</h3>
                <p>
                  {contactmain.contact_address}
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="content">
                <h3>Send us email</h3>
                <p>
                  <a href={`mailto:${contactmain.contact_email}`}>{contactmain.contact_email}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactAddress;
