import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const verifyToken = async (token, userId) => {
  try {
    const response = await PostData("verify-token", { token: userId }, "", `Bearer ${token}`);
    if (response.status === 200) {
      return true;
    } else {
      toast.error("Token verification failed. Please login again.");
      return false;
    }
  } catch (error) {
    toast.error("An error occurred. Please login again.");
    return false;
  }
};

const Add = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const [data, setData] = useState({ role_type: [], statedata: [], partydata: [] });
  const [senatorialData, setSenatorialData] = useState([]);
  const [lgasData, setLgasData] = useState([]);
  const [wardsData, setWardsData] = useState([]);
  const [pussData, setPusData] = useState([]);

  const watchedState = watch("state");
  const watchedLgas = watch("voting_local_government");
  const watchedWard = watch("ward");

  useEffect(() => {
    const fetchInitialData = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId && await verifyToken(tokenData, userId)) {
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

      if (tokenData && userId && await verifyToken(tokenData, userId)) {
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

      if (tokenData && userId && await verifyToken(tokenData, userId)) {
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

      if (tokenData && userId && await verifyToken(tokenData, userId)) {
        try {
          const res = await axiosGet(`member/get-pollingunit/${watchedWard}`, `Bearer ${tokenData}`);
          setPusData(res.wardwise_pollingunit || []);
        } catch (error) {
          console.error("Error handling Wards change:", error);
          toast.error("Failed to fetch wards.");
        }
      } else {
        handleLogout();
      }
    };

    if (watchedWard) handleWardsChange();
  }, [watchedWard]);

  const onSubmit = async (formData) => {
    const tokenData = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!formData.name || !formData.task || !formData.description) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (tokenData && userId && await verifyToken(tokenData, userId)) {
      try {
        const response = await PostData("team-add", formData, "", `Bearer ${tokenData}`);
        if (response.data) {
          toast.success(response.message);
          router.push("/dashboard/team");
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Something went wrong, please try again.");
      }
    } else {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
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
                    <select
                        id="campaign_type" name="campaign_type" className={errors.campaign_type ? "form-select errorBox" : "form-select"} {...register("campaign_type", { required: true })}>
                        <option value="">Select Campaign Type</option>
                        {data.role_type.map((eleType, i) => (
                          <option key={i} value={eleType.role_id}>
                            {eleType.role_name}
                          </option>
                        ))}
                    </select>
                    {errors.campaign_type && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="name"> Member Name <span>*</span></label>
                    <input id="name" type="text" name="name" placeholder="" className="form-control" {...register("name", { required: true })}/>
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
                    <input id="phone_number" type="number" name="phone_number" placeholder="" className="form-control" {...register("phone_number", { required: true })}/>
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
                    <input id="email" type="email" name="email" placeholder="" className="form-control" {...register("email", { required: true })}/>
                    {errors.email && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="date_of_birth">Date of Birth <span>*</span></label>
                    <input id="date_of_birth" type="date" name="date_of_birth" className="form-control" {...register("date_of_birth", { required: true })}/>
                    {errors.date_of_birth && (
                      <p className="errorMsg">                       
                       <i className="fas fa-exclamation-triangle"></i> This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="voters_id">Voters ID Number <span>*</span></label>
                    <input id="voters_id" type="text" name="voters_id" placeholder="" className="form-control" {...register("voters_id", { required: true })}/>
                    {errors.voters_id && (
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
                    <input id="code" type="text" name="code" placeholder="" className="form-control" {...register("code")}/>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input id="occupation" type="text" name="occupation" placeholder="" className="form-control" {...register("occupation")}/>
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
                    <input id="date_of_registration" type="text" name="date_of_registration" placeholder="" className="form-control" {...register("date_of_registration")} />
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
