import React from "react";

const Footer = () => {
  return (
    <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="footer-about">
                  <img src="/images/logo.png" alt />
                  <p>
                    Egrassrooter is a subsidiary of One Kobo Technologies, aimed
                    at revolutionizing the electioneering campaign processes in
                    Nigeria and Africa at Large. We are leveraging on technology
                    to ease and simplify campaigns for political parties and
                    aspirants to monitor and evaluate their performances in a
                    much more convenient manner for better productivity.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-menu">
                  <h4>Quick Links</h4>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <a href="about-us.html">ABOUT US</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="contact-us.html">CONTACT</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Privacy</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Terms of use</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-menu">
                  <h4>Address</h4>
                  <div className="addres-bx">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/maps-and-flags.png" alt />
                          <span>
                            16 Prince Bode Adebowale Street, <br /> Off Chief
                            Collins, Off Fola Osibo, <br /> Lekki Phase 1, Lagos
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/telephone.png" alt />
                          <span>+2349029407394</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/mail.png" alt />
                          <span>info@egrassrooter.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <p>
            © Copyright <a href="#">Egrassrooter</a> 2024. All rights Reserved.
          </p>
        </div>
    </>
  );
};

export default Footer;
