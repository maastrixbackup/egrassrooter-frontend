import React, { useEffect, useState } from "react";
import { axiosGet } from "../../utils/ApiCalls";

export default () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentYear = new Date().getFullYear();

  // Fetch the data from the API on component mount
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await axiosGet("/homepage-layout"); // Call axiosGet from ApiCalls.jsx
        setFooterData(data); // Set the footer data
        setLoading(false); // Stop loading once data is received
      } catch (err) {
        setError("Failed to load footer data");
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchFooterData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="footer-about">
                {/* Dynamically render the logo */}
                <img src={footerData?.logo} alt="Logo" />
                {/* Render the about us content safely */}
                {footerData?.about_us && <div
                  dangerouslySetInnerHTML={{ __html: footerData?.about_us }}
                ></div>}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-menu">
                <h4>Quick Links</h4>
                <div className="menu-list">
                  <ul>
                    {footerData?.quicklinks.map((link, index) => (
                      <li key={index}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
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
                        <img src="/images/maps-and-flags.png" alt="Map" />
                        <span>
                          {footerData?.location_address
                            .split("\r\n")
                            .map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/telephone.png" alt="Phone" />
                        <span>{footerData?.contact_number}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/mail.png" alt="Mail" />
                        <span>{footerData?.mail_id}</span>
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
          © Copyright <a href="#">Egrassrooter</a> {currentYear}. All rights Reserved.
        </p>
      </div>
    </>
  );
};

// export default Footer;
