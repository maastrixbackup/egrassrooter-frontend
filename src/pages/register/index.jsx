import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StepOne from "../../../components/register/stepOne";
import StepTwo from "../../../components/register/stepTwo";
import StepThree from "../../../components/register/stepThree";
import StepFour from "../../../components/register/stepFour";
import { axiosGet, PostData } from "../../../utils/ApiCalls";
import { useSnackBarContext } from "../../../context/snackbarContext/SnackbarContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Index = ({ data }) => {
  const { setType, setMessage } = useSnackBarContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const campaignId = watch("campaign_type");

  const onSubmit = (data) => {
    console.log(data);
    if (step < 4) {
      setStep(step + 1);
    } else {
      fetch(data);
      console.log("Final form data:", data);
    }
  };
  const fetch = async (formData) => {
    try {
      const data = await PostData("register", {
        ...formData,
        slug: formData.slug + ".egrassrooter.com",
      });
      toast.success(data?.message);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="ptb-50">
      <div className="container">
        <div className="row" id="msform">
          <div className="col-lg-4">
            <ul id="progressbar">
              <li className={step >= 1 ? "active" : ""} id="account">
                <div className="pt-pr-img">
                  <span>1</span>
                  <img src="/images/register_step1.jpg" alt="Step 1" />
                </div>
                <div className="pro-txt-cl">
                  <h6>Register</h6>
                </div>
              </li>
              <li className={step >= 2 ? "active" : ""} id="personal">
                <div className="pt-pr-img">
                  <span>2</span>
                  <img src="/images/generate_url.png" alt="Step 2" />
                </div>
                <div className="pro-txt-cl">
                  <h6>Generate URL</h6>
                </div>
              </li>
              <li className={step >= 3 ? "active" : ""} id="payment">
                <div className="pt-pr-img">
                  <span>3</span>
                  <img src="/images/phone-book.png" alt="Step 3" />
                </div>
                <div className="pro-txt-cl">
                  <h6>Your contact details</h6>
                </div>
              </li>
              <li className={step >= 4 ? "active" : ""} id="subscription">
                <div className="pt-pr-img">
                  <span>4</span>
                  <img src="/images/subscription.png" alt="Step 4" />
                </div>
                <div className="pro-txt-cl">
                  <h6>Subscription</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit(onSubmit)} className="get_filed_box">
              {step === 1 && (
                <StepOne
                  register={register}
                  errors={errors}
                  data={data}
                  watch={watch}
                />
              )}
              {step === 2 && (
                <StepTwo
                  handleBack={handleBack}
                  register={register}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                />
              )}
              {step === 3 && (
                <StepThree
                  handleBack={handleBack}
                  register={register}
                  errors={errors}
                  campaignId={campaignId}
                  data={data}
                  watch={watch}
                />
              )}
              {step === 4 && (
                <StepFour
                  handleBack={handleBack}
                  register={register}
                  errors={errors}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const data = await axiosGet("getcampaign");

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data shop page:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
