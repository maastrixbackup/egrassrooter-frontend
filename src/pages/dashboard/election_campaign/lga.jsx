import React, { useState, useEffect } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Lgas = () => {
    const [lgasData, setLgas] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { id } = router.query; 

    useEffect(() => {
        const fetchLgas = async () => {
            if (typeof window !== "undefined" && id) {
                const tokenData = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");
    
                // Check if cached data exists
                const cachedLgas = localStorage.getItem(`lgasData_${id}`);
                if (cachedLgas) {
                    setLgas(JSON.parse(cachedLgas)); // Load cached data
                    return;
                }
    
                if (tokenData && userId) {
                    setLoading(true); // Show loading spinner
                    try {
                        const res = await axiosGet(`election-campaign/lga/${id}`, `Bearer ${tokenData}`);
                        if (res?.lgawisestate) {
                            setLgas(res || []);
                            localStorage.setItem(`lgasData_${id}`, JSON.stringify(res)); // Cache the data
                        } else {
                            toast.error("Failed to fetch LGA data.");
                        }
                    } catch (error) {
                        toast.error("An error occurred. Please login again.");
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                    } finally {
                        setLoading(false); // Hide loading spinner
                    }
                } else {
                    toast.error("No token or user ID found. Please login.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                }
            }
        };
    
        fetchLgas();
    }, [router, id]);

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Election Campaign
                    </li>
                </ol>
            </nav>
            <div className="election_sec">
                <div className="election_title_bx">
                    <h3>{lgasData?.electionstatedata?.state_name || "All LGAs"}</h3>
                    <p>View results by LGAs</p>
                </div>
                {loading ? (
                    <div>Loading...</div> // Show a loading spinner or message
                ) : (
                    <div className="election_cont_bx">
                        <div className="row">
                            {lgasData?.lgawisestate?.map((lga, index) => (
                                <div key={index} className="col-lg-3">
                                    <Link href={`/dashboard/election_campaign/ward?id=${lga.id}`}>
                                        <div className="elec_cont_details">
                                            <h2>{lga.lga_name}</h2>
                                            <p>Wards Count: {lga.wards_count}</p>
                                            <p>Polling Units Count: {lga.polling_units_count}</p>
                                            <div className="quick_icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Quick View
                                            </div>
                                        </div>
                                    </Link>                            
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lgas;
