import React, { useState, useEffect } from "react";
import Image from "next/image";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    const [profile, setProfile] = useState({});
    const [editProfile, setEditProfile] = useState({});
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            if (typeof window !== "undefined") {
                const tokenData = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");

                if (tokenData && userId) {
                    const res = await axiosGet("getprofile", `Bearer ${tokenData}`);
                    if (res.profile_data) {
                        setProfile(res.profile_data || {});
                    } else {
                        toast.error("Failed to fetch profile data.");
                    }

                    const result = await axiosGet(`editprofile/${userId}`, `Bearer ${tokenData}`);
                    if (result.profile) {
                        setEditProfile(result.profile || {});
                    } else {
                        toast.error("Failed to fetch edit profile data.");
                    }
                } else {
                    toast.error("No token or user ID found. Please login.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                }
            }
        };

        fetchProfile();
    }, [router]);

    const formatVIN = (value) => {
        const cleaned = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
        let formatted = "";
        for (let i = 0; i < cleaned.length; i++) {
            if (i > 0 && i % 4 === 0 && i <= 24) {
                formatted += "-";
            }
            formatted += cleaned.charAt(i);
            if (formatted.length >= 24) {
                break;
            }
        }
        return formatted;
    };

    const handleVinChange = (e) => {
        const formattedVin = formatVIN(e.target.value);
        setEditProfile((prev) => ({ ...prev, vin: formattedVin }));
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setEditProfile((prev) => ({
            ...prev,
            [name]: files && files.length > 0 ? files[0] : value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const tokenData = localStorage.getItem("token");
        console.log(editProfile);

        try {
            const response = await PostData("updateprofile", editProfile, "", `Bearer ${tokenData}`);
            if (response.success == true) {
                toast.success("Profile updated successfully!");
                router.push("/dashboard/profile");
            } else {
                toast.error("Failed to update profile.");
            }
        } catch (error) {
            toast.error("An error occurred while updating profile.");
        }
    };

    return (
        <div class="col-lg-12 col md-12">
            <div class="sidebar_sec_rgt">
                <div class="ed-pr-sec">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="ed-pr-bx">
                                <div class="ed-pr-img">
                                    <Image src={profile.profile_photo || "/images/avtar.jpg"} alt="Candidate" width={500} height={500} />
                                </div>
                                <div class="ed-pr-title">
                                    <h4>{profile.profile_name || "Spencer Robin"}</h4>
                                    <span class="d-block">{profile.role_type || "Party Member"}</span>
                                </div>
                                <div class="ed-pr-info">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fal fa-envelope"></i><span>{profile.email_id || "pres@gmail.com"}</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fal fa-phone-alt"></i><span>{profile.telephone || "021245869"}</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fal fa-map-marker-alt"></i><span>{profile.state || "N/A"}</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="ed-pr-tab-sec">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                            Campaign Details
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                            Edit Profile
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div class="campaign-sec">
                                            <div class="ed-cam-title">
                                                <h4>{profile.campaign_name || "Campaign Name"}</h4>
                                                <p>{profile.campaign_type || "Presidential"}</p>
                                            </div>
                                            <div class="ed-cam--logo">
                                                <Image src={profile.political_party_logo || "/images/blog2.jpg"} alt="political party logo" width={500} height={500} />
                                            </div>
                                            <div class="ed-cam-tag">
                                                <ul>
                                                    <li>{profile.role_type || "Grassrooters"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="campaign-sec mt-4">
                                            <div class="ed-cam-title">
                                                <h4 class="text-center">Political Area</h4>
                                                <div class="ed-pol-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>
                                                                What political office are you
                                                                campaigning for :
                                                            </h5>
                                                            <span>{profile.campaign_name || "Presidential"}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0" >
                                        <div class="campaign-sec">
                                            <div className="event-form">
                                                <form onSubmit={handleUpdate}>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="file-form">
                                                                {/* <label className="form__container" id="upload-container">Choose or Drag & Drop File</label> */}
                                                                <input name="profile_photo" id="upload-files" type="file" accept="image/*" multiple="multiple" onChange={handleChange}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>First Name <span>*</span></label>
                                                                <input type="text" name="first_name" className="form-control" value={editProfile.first_name} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Last Name <span>*</span></label>
                                                                <input type="text" name="last_name" className="form-control" value={editProfile.last_name} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Gender <span>*</span></label>
                                                                <div className="form-group-flex">
                                                                    <div className="form-group">
                                                                        <input type="radio" id="male" name="gender" value="male" checked={editProfile.gender === "male"} onChange={handleChange} required />
                                                                        <label htmlFor="male">MALE</label>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="radio" id="female" name="gender" value="female" checked={editProfile.gender === "female"} onChange={handleChange} required />
                                                                        <label htmlFor="female">FEMALE</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>DOB <span>*</span></label>
                                                                <div className="input-icon-ab">
                                                                    <input type="date" name="dob" className="form-control" value={editProfile.dob} onChange={handleChange} required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Phone Number <span>*</span></label>
                                                                <div className="input-icon-ab">
                                                                    <input type="number" name="telephone" className="form-control" value={editProfile.telephone} onChange={handleChange} required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Email Address <span>*</span></label>
                                                                <input type="email" name="email_id" className="form-control" value={editProfile.email_id} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Residential Address <span>*</span></label>
                                                                <input type="text" name="residential_address" className="form-control" value={editProfile.residential_address} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="form-group">
                                                                <label>Nationality <span>*</span></label>
                                                                <input type="text" name="nationality" className="form-control" value={editProfile.nationality} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Voter Identification Number (VIN)<span>*</span></label>
                                                                <input type="text" name="vin" className="form-control" value={editProfile.vin} onChange={handleVinChange} pattern="[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Polling Unit Code <span>*</span></label>
                                                                <input type="text" name="pu_code" className="form-control" value={editProfile.pu_code} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Occupation/Employment Status</label>
                                                                <input type="text" name="employment" className="form-control" value={editProfile.employment} />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label for="">Date of Registration</label>
                                                                <input type="date" name="registration_date" class="form-control" value={editProfile.registration_date} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label for="">Political Party Affiliation: (Election official)</label>
                                                                <select type="text" name="political_party" class="form-control" value={editProfile.political_party} onChange={handleChange} required>
                                                                    <option value="">Select Political Party</option>
                                                                    {editProfile?.allparty?.map((party, i) => (
                                                                        <option key={i} value={party.id}>
                                                                            {party.party_name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 text-end">
                                                            <button type="submit" className="btn-event">
                                                                Update
                                                            </button>
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
            </div>
        </div>
    );
};

export default Index;

