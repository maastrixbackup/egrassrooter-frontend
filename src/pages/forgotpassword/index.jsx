import React, { useState } from "react";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
    const [email_id, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = { email_id };

        try {
            setLoading(true);
            const res = await PostData("forgot-password", data);
            toast.success(res.message);
       

            } catch (error) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="ptb-100">
            <div className="container">
                <div>
                </div>
                <div className="row">
                    <div className="col-lg-9 mx-auto">
                        <div className="forgot-box-page">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="forgot-img">
                                        <img src="/images/forgot-pswd.jpg" alt="Forgot Password" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="forgot-form">
                                        <h1>Forgot your password?</h1>
                                        <p>Enter your Email and we will help you reset your password</p>
                                        <form onSubmit={onSubmit}>
                                            <div className="form-group">
                                                <label>Email ID</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="form-control"
                                                    value={email_id}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn-one"
                                                disabled={loading}
                                            >
                                                {loading ? "Processing..." : "Continue"}
                                            </button>
                                        </form>
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
