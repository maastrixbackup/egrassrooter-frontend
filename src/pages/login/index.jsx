import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostData } from "../../../utils/ApiCalls";
import { useSnackBarContext } from "../../../context/snackbarContext/SnackbarContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../../store/store";
import ReCAPTCHA from "react-google-recaptcha";

const Index = ({ setBannerTitle }) => {
  const { setToken, setUser } = useStore();
  const { setType, setMessage } = useSnackBarContext();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoadingState] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const router = useRouter(); // Single useRouter instance
  const { status, message } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status && message) {
      toast[status](decodeURIComponent(message));
    }
  }, [status, message]);

  useEffect(() => {
    if (typeof setBannerTitle === "function") {
      setBannerTitle("Login");
    } else {
      console.error("setBannerTitle is not a function");
    }
  }, [setBannerTitle]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
    console.log("Captcha value:", value);
  };

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    try {
      setLoadingState(true);
      const res = await PostData("login", { ...data, recaptcha_token: recaptchaToken });
      if (!res.success) {
        toast.error(res.message || "Login failed");
      } else {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        if (result.error) {
          toast.error(result.error);
        } else {
          setToken(res.token);
          setUser(res.user_details);
          localStorage.setItem("token", res.token);
          localStorage.setItem("userId", res.user_details.id);
          router.push("/dashboard");
          toast.success(res.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <section className="ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-main-bx">
              <img
                src="/images/work-1.png"
                alt="Shape 1"
                className="login-shape1"
              />
              <img
                src="/images/breadcrumb_shape03.png"
                className="login-shape2"
                alt="Shape 2"
              />
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 position-relative">
                  <div className="user-log-page-img">
                    <img src="/images/login-bg.png" alt="Login Background" />
                  </div>
                  <div className="login-logo-img">
                    <img src="/images/logo.png" alt="Logo" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="use-form-page-bx">
                    <div className="title-user-log">
                      <h1>Sign in to Campaign Software</h1>
                    </div>
                    <div className="user-frm-bx">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="email"
                                {...register("email", { required: true })}
                                className="form-control"
                                placeholder="Email ID"
                              />
                              {errors.email && <span>Email is required</span>}
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group position-relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", { required: true })}
                                className="form-control"
                                placeholder="Password"
                              />
                              {errors.password && (
                                <span>Password is required</span>
                              )}
                              <i
                                className={`fa-regular ${
                                  showPassword ? "fa-eye" : "fa-eye-slash"
                                }`}
                                onClick={togglePasswordVisibility}
                                style={{
                                  position: "absolute",
                                  right: "10px",
                                  top: "17px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="forgot-password-bx">
                              <Link href="/forgotpassword">
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="captcha-img">
                              <ReCAPTCHA
                                sitekey="6Lc4yg0iAAAAADzNkFQQOL7hIE7iVBIrv9hhjvis" // Replace with your site key
                                onChange={handleRecaptchaChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="login-btn-bx text-center">
                              <button
                                type="submit"
                                className="btn-one"
                                disabled={loading}
                              >
                                {loading ? "Loading..." : "Login"}
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="signup-text">
                              <h5>
                                Already have an account?{" "}
                                <Link href="/register">Register Now</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
