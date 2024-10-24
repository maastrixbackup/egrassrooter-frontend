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

const Edit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState({ role_type: [], statedata: [], partydata: [] });
    const [senatorialData, setSenatorialData] = useState([]);
    const [lgasData, setLgasData] = useState([]);
    const [wardsData, setWardsData] = useState([]);
    const [pussData, setPusData] = useState([]);
    const [member, setMember] = useState({});
    const [loading, setLoading] = useState(true);

    const watchedState = watch("state");
    const watchedLgas = watch("voting_local_govt");
    const watchedWard = watch("ward");

    useEffect(() => {
        const fetchMemberData = async () => {
            const tokenData = localStorage.getItem("token");
            if (!tokenData || !id) return;

            const res = await axiosGet(`member-edit/${id}`, `Bearer ${tokenData}`);
            setMember(res.member_data || {});
            setLoading(false);
        };

        if (id) fetchMemberData();
    }, [id]);

    useEffect(() => {
        const fetchInitialData = async () => {
            const tokenData = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (tokenData && userId && await verifyToken(tokenData, userId)) {
                try {
                    const res = await axiosGet("add-member", `Bearer ${tokenData}`);
                    setData(res || {});
                } catch (error) {
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
            if (!watchedState) return;

            const tokenData = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (tokenData && userId && await verifyToken(tokenData, userId)) {
                try {
                    const senatorialRes = await axiosGet(`member/get-senatorialstates/${watchedState}`, `Bearer ${tokenData}`);
                    const lgaRes = await axiosGet(`member/get-lga/${watchedState}`, `Bearer ${tokenData}`);

                    setSenatorialData(senatorialRes.senatorialstatedata);
                    setLgasData(lgaRes.statewiselga);
                } catch (error) {
                    toast.error("Failed to fetch senatorial states or LGAs.");
                }
            } else {
                handleLogout();
            }
        };

        handleStateChange();
    }, [watchedState]);

    useEffect(() => {
        const handleLgasChange = async () => {
            if (!watchedLgas) return;

            const tokenData = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (tokenData && userId && await verifyToken(tokenData, userId)) {
                try {
                    const res = await axiosGet(`member/get-ward/${watchedLgas}`, `Bearer ${tokenData}`);
                    setWardsData(res.lgawiseward || []);
                } catch (error) {
                    toast.error("Failed to fetch wards.");
                }
            } else {
                handleLogout();
            }
        };

        handleLgasChange();
    }, [watchedLgas]);

    useEffect(() => {
        const handleWardsChange = async () => {
            if (!watchedWard) return;

            const tokenData = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (tokenData && userId && await verifyToken(tokenData, userId)) {
                try {
                    const res = await axiosGet(`member/get-pollingunit/${watchedWard}`, `Bearer ${tokenData}`);
                    setPusData(res.wardwise_pollingunit || []);
                } catch (error) {
                    toast.error("Failed to fetch polling units.");
                }
            } else {
                handleLogout();
            }
        };

        handleWardsChange();
    }, [watchedWard]);

    const handleUpdate = async (formData) => {
        const tokenData = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (tokenData && userId) {
            try {
                const data = { ...formData, id, token: userId };
                const res = await PostData("member-update", data, "", `Bearer ${tokenData}`);
                toast.success(res.message);
                router.push("/dashboard/event");
            } catch (error) {
                toast.error("An error occurred while updating the member.");
            }
        } else {
            toast.error("No token found.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember((prev) => ({ ...prev, [name]: value }));
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
                        <h4>Edit Member</h4>
                        <Link href="/dashboard/member" className="btn-back"><i className="fal fa-angle-double-left"></i></Link>
                    </div>
                    <div className="event-form">
                        <form onSubmit={handleUpdate}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="campaign_type">Role Type <span>*</span></label>
                                        <select class="form-control" id="campaign_type" name="campaign_type" value={member.role_type} onChange={handleChange} required>
                                            <option value="">Select Campaign Type</option>
                                            {data.role_type.map((eleType, i) => (
                                                <option key={i} value={eleType.role_id}>
                                                    {eleType.role_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Member Name <span>*</span></label>
                                        <input id="name" type="text" name="name" value={member.name} placeholder="" className="form-control" {...register("name", { required: true })} />
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
                                                <input type="radio" id="male" name="gender" checked={member.gender === "male"} value="male" {...register("gender", { required: true })} />
                                                <label htmlFor="male">MALE</label>
                                            </div>
                                            <div className="form-group">
                                                <input type="radio" id="female" name="gender" checked={member.gender === "female"} value="female" {...register("gender", { required: true })} />
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
                                        <input id="phone_number" type="number" value={member.phone_number} name="phone_number" placeholder="" className="form-control" {...register("phone_number", { required: true })} />
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
                                        <input id="email" type="email" name="email" placeholder="" value={member.email_id} className="form-control" {...register("email", { required: true })} />
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
                                        <input id="date_of_birth" type="date" name="date_of_birth" value={member.dob} className="form-control" {...register("date_of_birth", { required: true })} />
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
                                        <input id="voters_id" type="text" name="voters_id" value={member.voters_id_number} placeholder="" className="form-control" {...register("voters_id", { required: true })} />
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
                                        <select id="state" name="state" value={member.state} className={`form-select ${errors.state ? "errorBox" : ""}`} {...register("state", { required: true })}>
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
                                        <select id="senatorial_state" name="senatorial_state" value={member.senatorial} className={`form-select ${errors.senatorial_state ? "errorBox" : ""}`} {...register("senatorial_state", { required: true })}>
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
                                        <select id="voting_local_government" name="voting_local_government" value={member.voting_local_govt} className={`form-select ${errors.voting_local_government ? "errorBox" : ""}`} {...register("voting_local_government", { required: true })}>
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
                                        <select id="ward" name="ward" value={member.ward} className={`form-select ${errors.ward ? "errorBox" : ""}`} {...register("ward", { required: true })}>
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
                                        <select id="polling_unit" name="polling_unit" value={member.polling_unit} className={`form-select ${errors.ward ? "errorBox" : ""}`} {...register("polling_unit", { required: true })}>
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
                                        <input id="code" type="text" name="code" value={member.code} placeholder="" className="form-control" {...register("code")} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="occupation">Occupation</label>
                                        <input id="occupation" type="text" name="occupation" value={member.occupation} placeholder="" className="form-control" {...register("occupation")} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="latitude">Latitude</label>
                                        <input id="latitude" type="text" name="latitude" placeholder="" value={member.latitude} className="form-control" {...register("latitude")} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="longitude">Longitude</label>
                                        <input id="longitude" type="text" name="longitude" placeholder="" value={member.longitude} className="form-control" {...register("longitude")} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group"><label htmlFor="date_of_registration"> Date of Registration</label>
                                        <input id="date_of_registration" type="text" name="date_of_registration" value={member.date_of_registration} placeholder="" className="form-control" {...register("date_of_registration")} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="party">Political Party</label>
                                        <select id="party" name="party" value={member.political_party} className={errors.party ? "form-select errorBox" : "form-select"} {...register("party", { required: true })}>
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
                                        <textarea id="address" name="address" className="form-control" rows="4" {...register("address", { required: true })}>{member.address}</textarea>
                                        {errors.address && (
                                            <p className="errorMsg">
                                                <i className="fas fa-exclamation-triangle"></i> This field is required
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
