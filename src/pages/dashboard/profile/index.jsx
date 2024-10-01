import React, { useState, useEffect } from "react";
import Image from "next/image";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    const [profile, setProfile] = useState([]);
    const [editprofile, setEditProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const fetchProfile = async () => {
                const tokenData = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");

                if (tokenData && userId) {
                    const data = { token: userId };
                    try {
                        const verifyTokenResponse = await PostData("verify-token", data, "", `Bearer ${tokenData}`);
                        if (verifyTokenResponse.status === 200) {
                            const res = await axiosGet("getprofile", `Bearer ${tokenData}`);
                            if (res.profile_data) {
                                setProfile(res.profile_data || []);
                            } else {
                                toast.error("Failed to fetch profile data.");
                            }

                            const result = await axiosGet(`editprofile/${userId}`, `Bearer ${tokenData}`);
                            if (result.profile) {
                                setEditProfile(result.profile || []);
                            } else {
                                toast.error("Failed to fetch edit profile data.");
                            }
                        } else {
                            toast.error("Token verification failed. Please login again.");
                            localStorage.removeItem("token");
                            localStorage.removeItem("userId");
                            router.push("/login");
                        }
                    } catch (error) {
                        toast.error("An error occurred. Please login again.");
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                        router.push("/login");
                    } finally {
                        setLoading(false);
                    }
                } else {
                    toast.error("No token or user ID found. Please login.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    router.push("/login");
                }
            };

            fetchProfile();
        }
    }, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div class="col-lg-12 col md-12">
            <div class="sidebar_sec_rgt">
                <div class="ed-pr-sec">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="ed-pr-bx">
                                <div class="ed-pr-img">
                                    <Image src={profile.candidate_image || "/images/avtar.jpg"} alt="Candidate" width={500} height={500}/>
                                </div>
                                <div class="ed-pr-title">
                                    <h4>{profile.candidate_name || "Spencer Robin"}</h4>
                                    <span class="d-block">{profile.political_party|| "Party Member"}</span>
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
                                            <a href="#"><i class="fal fa-map-marker-alt"></i><span>Germany</span></a>
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
                                                <Image src={profile.political_party_logo || "/images/blog2.jpg"} alt="political party logo" width={500} height={500}/>
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
                                            <div class="event-form">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="file-form">
                                                            <label class="form__container" id="upload-container" >Choose or Drag & Drop File</label>
                                                            <input id="upload-files" type="file" accept="image/*" multiple="multiple" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="">First Name <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.first_name}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="">Last Name <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.last_name}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="">Gender <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <div class="form-group-flex">
                                                                <div class="form-group">
                                                                    <input type="radio" id="male" name="fav_language" value="male" checked={editprofile.gender === "male"}/>
                                                                    <label for="male">MALE</label>
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="radio" id="female" name="fav_language" value="female" checked={editprofile.gender === "female"} />
                                                                    <label for="female">FEMALE</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="" >DOB <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <div class="input-icon-ab">
                                                                <input type="date" placeholder="" id="datepicker" class="form-control" value={editprofile.dob}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="">Phone Number <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <div class="input-icon-ab">
                                                                <input type="number" placeholder="" class="form-control" value={editprofile.telephone}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="" >Email Address <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="email" placeholder="" class="form-control" value={editprofile.email_id}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="form-group">
                                                            <label for="">Residential Address <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.residential_address}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8">
                                                        <div class="form-group">
                                                            <label for="">Nationality <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.nationality}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Voter Identification Number (VIN)<span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.vin}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Polling Unit Code <span>*</span><i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.pu_code}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Occupation/Employment Status<i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="text" placeholder="" class="form-control" value={editprofile.employment}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Date of Registration<i class="fa-solid fa-circle-info"></i></label>
                                                            <input type="date" placeholder="" class="form-control" value={editprofile.registration_date}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label for="">Political Party Affiliation: (Election official)<i class="fa-solid fa-circle-info"></i></label>
                                                            <select type="text" placeholder="" class="form-control" value={editprofile.political_party}>
                                                                <option value="">Select Political Party</option>
                                                                {editprofile?.allparty?.map((party, i) => (
                                                                    <option key={i} value={party.id}>
                                                                    {party.party_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 text-end">
                                                        <a href="#" class="btn-event">Update</a>
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
            </div>
        </div>
    );
};

export default Index;

