import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const router = useRouter();
  const [data, setData] = useState({ role_type: [], statedata: [], partydata: [] });
  const [senatorialData, setSenatorialData] = useState([]);
  const [lgasData, setLgasData] = useState([]);
  const [wardsData, setWardsData] = useState([]);
  const [pussData, setPusData] = useState([]);

  const watchedState = watch("state");
  const watchedLgas = watch("voting_local_government");
  const watchedWard = watch("ward");
  const vinValue = watch("voters_id_number");

  useEffect(() => {
    const fetchInitialData = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId) {
        try {
          const res = await axiosGet("add-member", `Bearer ${tokenData}`);
          if (res) {
            setData(res);
          } else {
            toast.error("Failed to fetch initial data.");
          }
        } catch (error) {
          console.error("Error fetching initial data:", error);
          toast.error("Failed to fetch initial data.");
        }
      } else {
        handleLogout();
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const handleStateChange = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId) {
        try {
          const senatorialRes = await axiosGet(`member/get-senatorialstates/${watchedState}`, `Bearer ${tokenData}`);
          const lgaRes = await axiosGet(`member/get-lga/${watchedState}`, `Bearer ${tokenData}`);

          setSenatorialData(senatorialRes.senatorialstatedata);
          setLgasData(lgaRes.statewiselga);
        } catch (error) {
          console.error("Error handling state change:", error);
          toast.error("Failed to fetch senatorial states or LGAs.");
        }
      } else {
        handleLogout();
      }
    };

    if (watchedState) handleStateChange();
  }, [watchedState]);

  useEffect(() => {
    const handleLgasChange = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId) {
        try {
          const res = await axiosGet(`member/get-ward/${watchedLgas}`, `Bearer ${tokenData}`);
          setWardsData(res.lgawiseward || []);
        } catch (error) {
          console.error("Error handling LGAs change:", error);
          toast.error("Failed to fetch wards.");
        }
      } else {
        handleLogout();
      }
    };

    if (watchedLgas) handleLgasChange();
  }, [watchedLgas]);

  useEffect(() => {
    const handleWardsChange = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId) {
        try {
          const res = await axiosGet(`member/get-pollingunit/${watchedWard}`, `Bearer ${tokenData}`);
          setPusData(res.wardwise_pollingunit || []);
        } catch (error) {
          console.error("Error handling Wards change:", error);
          toast.error("Failed to fetch wards.");
        }
      }
    };

    if (watchedWard) handleWardsChange();
  }, [watchedWard]);

  const formatVIN = (value) => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    let formatted = "";
    for (let i = 0; i < cleaned.length; i++) {
      if (i > 0 && i % 4 === 0 && i < 20) {
        formatted += "-";
      }
      formatted += cleaned.charAt(i);
      if (formatted.length >= 24) {
        break;
      }
    }
    return formatted;
  };

  useEffect(() => {
    if (vinValue) {
      const formattedVIN = formatVIN(vinValue);
      if (vinValue !== formattedVIN) {
        setValue("voters_id_number", formattedVIN);
      }
    }
  }, [vinValue, setValue]);

  const onSubmit = async (formData) => {
    const tokenData = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (tokenData && userId) {
      const response = await PostData("member-add", formData, "", `Bearer ${tokenData}`);
      if (response.data) {
        toast.success(response.message);
        router.push("/dashboard/member");
      } else {
        toast.error(response.message);
      }
    }
  };


  return (
    <div className="col-lg-12 col-md-12">
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Member
            </li>
          </ol>
        </nav>

        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Member</h4>
            <Link href="/dashboard/member" className="btn-back"><i className="fal fa-angle-double-left"></i></Link>
          </div>
          <div className="event-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="campaign_type">Role Type <span>*</span></label>
                    <select id="role_type" name="role_type" className={errors.role_type ? "form-select errorBox" : "form-select"} {...register("role_type", { required: true })}>
                      <option value="">Select Campaign Type</option>
                      {data.role_type.map((eleType, i) => (
                        <option key={i} value={eleType.role_id}>
                          {eleType.role_name}
                        </option>
                      ))}
                    </select>
                    {errors.role_type && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="name"> Member Name <span>*</span></label>
                    <input id="name" type="text" name="name" placeholder="" className="form-control" {...register("name", { required: true })} />
                    {errors.name && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender <span>*</span></label>
                    <div className="form-group-flex">
                      <div className="form-group">
                        <input type="radio" id="male" name="gender" value="MALE" {...register("gender", { required: true })} />
                        <label htmlFor="male">MALE</label>
                      </div>
                      <div className="form-group">
                        <input type="radio" id="female" name="gender" value="FEMALE" {...register("gender", { required: true })} />
                        <label htmlFor="female">FEMALE</label>
                      </div>
                    </div>
                    {errors.gender && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="phone_number">Phone Number <span>*</span></label>
                    <input id="phone_number" type="number" name="phone_number" placeholder="" className="form-control" {...register("phone_number", { required: true })} />
                    {errors.phone_number && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="email">Email Id <span>*</span></label>
                    <input id="email_id" type="email" name="email_id" placeholder="" className="form-control" {...register("email_id", { required: true })} />
                    {errors.email_id && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="date_of_birth">Date of Birth <span>*</span></label>
                    <input id="dob" type="date" name="dob" className="form-control" {...register("dob", { required: true })} />
                    {errors.dob && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="voters_id_number">Voters ID Number <span>*</span></label>
                    <input
                      id="voters_id_number"
                      type="text"
                      placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"
                      className={errors.voters_id_number ? "form-control errorBox" : "form-control"}
                      {...register("voters_id_number", { required: true })}
                      pattern="[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}"
                    />
                    {errors.voters_id_number && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="state">Voting State <span>*</span></label>
                    <select id="state" name="state" className={`form-select ${errors.state ? "errorBox" : ""}`} {...register("state", { required: true })}>
                      <option value="">Select State</option>
                      {data.statedata.map((state, i) => (
                        <option key={i} value={state.id}>
                          {state.state_name}
                        </option>
                      ))}
                    </select>
                    {errors.state && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="senatorial_state">Senatorial State</label>
                    <select id="senatorial_state" name="senatorial_state" className={`form-select ${errors.senatorial_state ? "errorBox" : ""}`} {...register("senatorial_state", { required: true })}>
                      <option value="">Select Senatorial State</option>
                      {senatorialData.map((senatorial, i) => (
                        <option key={i} value={senatorial.id}>
                          {senatorial.senatorial_state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="voting_local_government">Voting Local Government</label>
                    <select id="voting_local_government" name="voting_local_government" className={`form-select ${errors.voting_local_government ? "errorBox" : ""}`} {...register("voting_local_government", { required: true })}>
                      <option value=""> Select LGA </option>
                      {lgasData.map((lga, i) => (
                        <option key={i} value={lga.id}>
                          {lga.lga_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-group">
                    <label htmlFor="ward">Voting Registration Area (Ward)</label>
                    <select id="ward" name="ward" className={`form-select ${errors.ward ? "errorBox" : ""}`} {...register("ward", { required: true })}>
                      <option value=""> Select Ward </option>
                      {wardsData.map((ward, i) => (
                        <option key={i} value={ward.id}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="polling_unit">Polling Unit</label>
                    <select id="polling_unit" name="polling_unit" className={`form-select ${errors.ward ? "errorBox" : ""}`} {...register("polling_unit", { required: true })}>
                      <option value=""> Select Polling Unit </option>
                      {pussData.map((pollunit, i) => (
                        <option key={i} value={pollunit.id}>
                          {pollunit.polling_unit_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input id="code" type="text" name="code" placeholder="" className="form-control" {...register("code")} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input id="occupation" type="text" name="occupation" placeholder="" className="form-control" {...register("occupation")} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="latitude">Latitude</label>
                    <input id="latitude" type="text" name="latitude" placeholder="" className="form-control" {...register("latitude")} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="longitude">Longitude</label>
                    <input id="longitude" type="text" name="longitude" placeholder="" className="form-control" {...register("longitude")} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group"><label htmlFor="date_of_registration"> Date of Registration</label>
                    <input id="date_of_registration" type="date" name="date_of_registration" placeholder="" className="form-control" {...register("date_of_registration")} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="party">Political Party</label>
                    <select id="party" name="party" className={errors.party ? "form-select errorBox" : "form-select"} {...register("party", { required: true })}>
                      <option value="">Select Political Party</option>
                      {data.partydata && data.partydata.length > 0 ? (
                        data.partydata.map((eleType, i) => (
                          <option key={i} value={eleType.id}>
                            {eleType.party_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No political parties available</option>
                      )}
                    </select>
                    {errors.party && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="address"> Address <span>*</span></label>
                    <textarea id="address" name="address" className="form-control" rows="4" {...register("address", { required: true })}></textarea>
                    {errors.address && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-12 text-end">
                  <button type="submit" className="btn-event">Create Member</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
