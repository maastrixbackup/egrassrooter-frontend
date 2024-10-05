import React, { useState, useEffect } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Wards = () => {
    const [wardsData, setWards] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { id } = router.query; 

    useEffect(() => {
        const fetchWards = async () => {
            if (typeof window !== "undefined" && id) {
                const tokenData = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");
    
                const cachedWards = localStorage.getItem(`pollingData_${id}`);
                if (cachedWards) {
                    setWards(JSON.parse(cachedWards));
                    return;
                }
    
                if (tokenData && userId) {
                    setLoading(true);
                    try {
                        const res = await axiosGet(`election-campaign/polling-unit/${id}`, `Bearer ${tokenData}`);
                        if (res?.wardwisepu) {
                            setWards(res || []);
                            localStorage.setItem(`pollingData_${id}`, JSON.stringify(res)); // Cache the data
                        } else {
                            toast.error("Failed to fetch LGA data.");
                        }
                    } catch (error) {
                        toast.error("An error occurred. Please login again.");
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                        router.push("/login");
                    } finally {
                        setLoading(false); // Hide loading spinner
                    }
                } else {
                    toast.error("No token or user ID found. Please login.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    router.push("/login");
                }
            }
        };
    
        fetchWards();
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
                    <h3>{wardsData?.electionwarddata?.ward_name || "All LGAs"}</h3>
                    <p>View results by polling units</p>
                </div>
                {loading ? (
                    <div>Loading...</div> // Show a loading spinner or message
                ) : (
                    <div className="election_cont_bx">
                        <div className="row">
                            {wardsData?.wardwisepu?.map((ward, index) => (
                                <div key={index} className="col-lg-3">
                                    <div className="elec_cont_details">
                                        <h2>{ward.polling_unit_name}</h2>
                                        <p>PU Code: {ward.pu_code}</p>
                                        <div className="quick_icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Quick View
                                        </div>
                                    </div>                           
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wards;
