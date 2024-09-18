import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {

  const [mobileClass, setMobileClass] = useState("");
  const size = useWindowSize();
  const [show, setShow] = useState(false);
 
  useEffect(() => {
    if (size.width <= 768) {
      setMobileClass("small-screen");
      setShow(false);
    } else {
      setMobileClass("");
      setShow(true);
    }
  }, [size]);
  
  return (
  
      <header className="header">
        <div className="topheader">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-6 col-md-8">
                <div className="contact-top-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-envelope" />
                        <span>info@egrassrooter.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-phone-alt" />
                        <span>+2349029407394</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-6 col-md-4">
                <div className="social-media-top">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-box-header">
                <div className="logo">
                <Link href="/"><img src="/images/logo.png" alt /></Link>
                </div>
                <div className="menu-bx">
                    <nav
                        id="cssmenu"
                        className={`mid-menu-navbar ${mobileClass}`}
                      >
                        <div
                          id="menu-button"
                          onClick={() => setShow(!show)}
                          className={show ? "menu-opened" : ""}
                        ></div>
                        <ul style={{ display: show ? "block" : "none" }}>

                      <li className="active">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <a href="#">Election</a>
                      </li>
                      <li>
                        <Link href="/news">News</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <a href="#">Donate</a>
                      </li>
                      <li className="mob-mode">
                        <a href="#">Login</a>
                      </li>
                      <li className="mob-mode">
                        <a href="#">Register</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="top-btn-bx">
                  <Link href="/login" className="btn-one">
                    <img src="/images/enter.png" alt />
                    <span>Login</span>
                  </Link>
                  <Link href="/register" className="btn-two">
                    <img src="/images/edit.png" alt />
                    <span>Register</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
  );
};


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Header;
