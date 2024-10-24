import React, { useState } from "react";
import InnerBanner from "../../../components/Common/inner_banner";
import { useForm } from "react-hook-form";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "react-toastify";

const Index = ({ data }) => {
    const { register, handleSubmit, formState: { errors }, trigger, reset, getValues } = useForm();
    const [loading, setLoading] = useState(false);
    const [showOtherAmount, setShowOtherAmount] = useState(false); // State to show "Other Amount"

    const onSubmit = async (formData) => {
        const isValid = await trigger();
        if (!isValid) return;

        // Check if 'otherAmount' is selected and update the form data
        if (showOtherAmount && formData.otherAmount) {
            formData.amount = formData.otherAmount;
        }

        setLoading(true);
        try {
            const response = await PostData("donation/initiate", formData);
            window.location.href = response.authorization_url.url;
        } catch (error) {
            toast.error("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    const handleAmountChange = (event) => {
        setShowOtherAmount(event.target.value === "am6"); // Show if "Other Amount" is selected
    };

    const intitle = data?.donation?.page_name || 'Donation';
    const inimage = {
        backgroundImage: `url('images/banner2.jpg')`,
    };

    return (
        <>
            <InnerBanner intitle={intitle} inimage={inimage} />
            <section className="ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="don-title">
                                <h1>MAKE A DONATION</h1>
                                <p>Donate to your favourite Political Party/Candidate for Political Campaign.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mon-img">
                                <img src="/images/money2.jpg" alt="Donation" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mon-cont-bx">
                                <div className="event-form">
                                    <form className="contact-form-validated contact-two__form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label>Name of the Donor <span>*</span></label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Your Full Name Here"
                                                        className="form-control"
                                                        {...register("full_name", { required: "Full name is required" })}
                                                    />
                                                    {errors.full_name && <p className="text-danger">{errors.full_name.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label>Email ID <span>*</span></label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Your Email ID"
                                                        className="form-control"
                                                        {...register("email", { required: "Email is required" })}
                                                    />
                                                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label>Mobile Number <span>*</span></label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Your Mobile Number"
                                                        className="form-control"
                                                        {...register("mobile_no", { required: "Mobile number is required" })}
                                                    />
                                                    {errors.mobile_no && <p className="text-danger">{errors.mobile_no.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label>Political Party Name <span>*</span></label>
                                                    <select
                                                        className="form-select"
                                                        {...register("party", { required: "Political party is required" })}
                                                    >
                                                        <option value="">Select political party/candidate</option>
                                                        <option value="437">Young Progressive Party (BOLA TINUBU)</option>
                                                        <option value="437">Peoples Democratic Party (Sidhartha Das)</option>
                                                        <option value="437">African Action Congress (Osita Chidoka)</option>
                                                    </select>
                                                    {errors.party && <p className="text-danger">{errors.party.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-3">
                                                    <label>Comments <span>*</span></label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={4}
                                                        {...register("donation_purpose", { required: "Donation purpose is required" })}
                                                    />
                                                    {errors.donation_purpose && <p className="text-danger">{errors.donation_purpose.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-3">
                                                    <label>Choose Donation Amount <span>*</span></label>
                                                    <div className="form-group-flex-multi">
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am1"
                                                                name="amount"
                                                                value="1000"
                                                                {...register("amount", { required: !showOtherAmount && "Please choose a donation amount" })}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am1">₦ 1000</label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am2"
                                                                name="amount"
                                                                value="2000"
                                                                {...register("amount", { required: !showOtherAmount && "Please choose a donation amount" })}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am2">₦ 2000</label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am3"
                                                                name="amount"
                                                                value="3000"
                                                                {...register("amount", { required: !showOtherAmount && "Please choose a donation amount" })}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am3">₦ 3000</label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am4"
                                                                name="amount"
                                                                value="4000"
                                                                {...register("amount", { required: !showOtherAmount && "Please choose a donation amount" })}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am4">₦ 4000</label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am5"
                                                                name="amount"
                                                                value="5000"
                                                                {...register("amount", { required: !showOtherAmount && "Please choose a donation amount" })}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am5">₦ 5000</label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                id="am6"
                                                                name="amount"
                                                                value="am6"
                                                                {...register("amount")}
                                                                onChange={handleAmountChange}
                                                            />
                                                            <label htmlFor="am6">Other Amount</label>
                                                        </div>
                                                    </div>
                                                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                                                </div>

                                                {showOtherAmount && (
                                                    <div id="otherAmountContainer" className="mt-3 mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Your Amount in ₦"
                                                            {...register("otherAmount", { required: showOtherAmount && "Please enter the amount" })}
                                                        />
                                                        {errors.otherAmount && <p className="text-danger">{errors.otherAmount.message}</p>}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group form-check-bx">
                                                    <input
                                                        type="checkbox"
                                                        {...register("confirmation", { required: "You must certify the information" })}
                                                    />
                                                    <label>
                                                        I certify that the above information is correct and that all further communication will be done with the provided details.
                                                    </label>
                                                    {errors.confirmation && <p className="text-danger">{errors.confirmation.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-end">
                                                <button type="submit" className="btn-event" disabled={loading}>
                                                    {loading ? "Processing..." : "DONATE NOW"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
