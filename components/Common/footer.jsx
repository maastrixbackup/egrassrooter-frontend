import React, { useState, useEffect } from "react";
import { axiosGet } from "../../utils/ApiCalls";
import { useRouter } from "next/router";
import Image from "next/image";


const Footer = ({ data }) => {
  const [footerData, setFooter] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchFooter = async () => {
      if (typeof window !== "undefined") {

        const res = await axiosGet("homepage-layout");
        if (res) {
          setFooter(res || {});
        } else {
          toast.error("Failed to fetch footer data.");
        }
      }
    };

    fetchFooter();
  }, [router]);

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="footer-about">
                {/* <img src="/images/logo.png" alt="logo" /> */}
                <Image src={footerData.logo || "/images/logo.png"} alt="Candidate" width={500} height={500} />
                <p>
                  {footerData.about_us}
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
                        <Image src="/images/maps-and-flags.png" alt="maps" width={500} height={500} />
                        <span>
                          {footerData.location_address}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src="/images/telephone.png" alt="telephone" width={500} height={500} />
                        <span>{footerData.contact_number}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src="/images/mail.png" alt="mail" width={500} height={500} />
                        <span>{footerData.mail_id}</span>
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