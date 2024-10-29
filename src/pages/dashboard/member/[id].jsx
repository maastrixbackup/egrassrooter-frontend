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
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const router = useRouter();
    const { id } = router.query;
    const [adddata, setData] = useState({ role_type: [], statedata: [], partydata: [] });
    const [senatorialData, setSenatorialData] = useState([]);
    const [lgasData, setLgasData] = useState([]);
    const [wardsData, setWardsData] = useState([]);
    const [pussData, setPusData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [member, setMember] = useState({
        id: "",
        role_type: "",
        name: "",
        gender: "",
        phone_number: "",
        email: "",
        date_of_birth: "",
        voters_id: "",
        state: "",
        senatorial_state: "",
        voting_local_government: "",
        ward: "",
        polling_unit: "",
        code: "",
        occupation: "",
        latitude: "",
        longitude: "",
        date_of_registration: "",
        party: "",
        address: "",
    });

    const watchedState = watch("state");
    const watchedLgas = watch("voting_local_government");
    const watchedWard = watch("ward");

    useEffect(() => {
        const fetchMemberData = async () => {
            const tokenData = localStorage.getItem("token");
            if (!tokenData || !id) return;

            const res = await axiosGet(`member-edit/${id}`, `Bearer ${tokenData}`);
            if (res.member_data) {
                setMember(res.member_data);
                // Set form values with member data
                Object.keys(res.member_data).forEach(key => setValue(key, res.member_data[key]));
            }
            setLoading(false);
        };

        if (id) fetchMemberData();
    }, [id, setValue]);

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
        e.preventDefault();

        if (tokenData && userId) {
            try {
                const data = {
                    id: id,
                    ...member,
                };

                const res = await PostData(`member-update`, data, "", `Bearer ${tokenData}`);
                if (res.data) {
                    toast.success(res.message);
                    router.push("/dashboard/blog");
                } else {
                    toast.error(res.message);
                }
            } catch (error) {
                toast.error("An error occurred while updating the member.");
            }
        } else {
            toast.error("No token found.");
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setMember({
            ...member,
            [name]: files ? files[0] : value,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }


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
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="campaign_type">Role Type <span>*</span></label>
                                        <select class="form-control" id="role_type" name="role_type" value={member.role_type} onChange={handleChange} required>
                                            <option value="">Select Campaign Type</option>
                                            {adddata.role_type.map((eleType, i) => (
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
                                        <input type="text" name="name" className="form-control" value={member.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label>Gender <span>*</span></label>
                                        <div className="form-group-flex">
                                            <div className="form-group">
                                                <input type="radio" id="male" name="gender" value="male" checked={member.gender === "male"} onChange={handleChange} required />
                                                <label htmlFor="male">MALE</label>
                                            </div>
                                            <div className="form-group">
                                                <input type="radio" id="female" name="gender" value="female" checked={member.gender === "female"} onChange={handleChange} required />
                                                <label htmlFor="female">FEMALE</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone Number <span>*</span></label>
                                        <input type="number" name="phone_number" className="form-control" value={member.phone_number} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Id <span>*</span></label>
                                        <input type="email" name="email" className="form-control" value={member.email_id} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="date_of_birth">Date of Birth <span>*</span></label>
                                        <input type="date" name="date_of_birth" className="form-control" value={member.dob} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="voters_id">Voters ID Number <span>*</span></label>
                                        <input type="text" name="voters_id" className="form-control" value={member.voters_id_number} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="state">Voting State <span>*</span></label>
                                        <select id="state" name="state" value={member.state} className="form-select" onChange={handleChange} required>
                                            <option value="">Select State</option>
                                            {adddata.statedata.map((state, i) => (
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
                                        <select id="senatorial_state" name="senatorial_state" value={member.senatorial} className="form-select" onChange={handleChange}>
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
                                        <input type="text" name="code" className="form-control" value={member.code} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="occupation">Occupation</label>
                                        <input type="text" name="occupation" className="form-control" value={member.occupation} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="latitude">Latitude</label>
                                        <input type="text" name="latitude" className="form-control" value={member.latitude} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="longitude">Longitude</label>
                                        <input type="text" name="longitude" className="form-control" value={member.longitude} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group"><label htmlFor="date_of_registration"> Date of Registration</label>
                                        <input type="text" name="date_of_registration" className="form-control" value={member.date_of_registration} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="party">Political Party</label>
                                        <select class="form-control" id="party" name="party" value={member.party} onChange={handleChange} required>
                                            <option value="">Select Political Party</option>
                                            {adddata.partydata && adddata.partydata.length > 0 ? (
                                                adddata.partydata.map((eleType, i) => (
                                                    <option key={i} value={eleType.id}>
                                                        {eleType.party_name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No political parties available</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="address"> Address <span>*</span></label>
                                        <textarea id="address" name="address" className="form-control" rows="4" onChange={handleChange} required>{member.address}</textarea>
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
