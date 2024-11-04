import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [mobileClass, setMobileClass] = useState("");
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (size.width <= 768) {
      setMobileClass("small-screen");
      setShow(false);
    } else {
      setMobileClass("");
      setShow(true);
    }
  }, [size]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  const isActive = (href) => router.pathname === href;

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
                      <i className="fab fa-twitter" />
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
                <Link href="/">
                  <Image src="/images/logo.png" alt="Logo" width={500} height={500} />
                </Link>
              </div>
              <div className="menu-bx">
                <nav id="cssmenu" className={`mid-menu-navbar ${mobileClass}`}>
                  <div id="menu-button" onClick={() => setShow(!show)} className={show ? "menu-opened" : ""} ></div>
                  <ul style={{ display: show ? "block" : "none" }}>
                    <li className={isActive("/") ? "active" : ""}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={isActive("/about") ? "active" : ""}>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className={isActive("/dashboard/electionresult") ? "active" : ""}>
                      <Link href="/dashboard/electionresult">Election</Link>
                    </li>
                    <li className={isActive("/news") ? "active" : ""}>
                      <Link href="/news">News</Link>
                    </li>
                    <li className={isActive("/contact") ? "active" : ""}>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li className={isActive("/donation") ? "active" : ""}>
                      <Link href="/donation">Donate</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="top-btn-bx">
                {isLoggedIn ? (
                  <Link href="/dashboard" className="btn-one">
                    <Image src="/images/enter.png" alt="Enter" width={500} height={500} />
                    <span>Dashboard</span>
                  </Link>
                ) : (
                  <>
                    <Link href="/login" className="btn-one">
                      <Image src="/images/enter.png" alt="Enter" width={500} height={500} />
                      <span>Login</span>
                    </Link>
                    <Link href="/register" className="btn-two">
                      <Image src="/images/edit.png" alt="Edit" width={500} height={500} />
                      <span>Register</span>
                    </Link>
                  </>
                )}
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
