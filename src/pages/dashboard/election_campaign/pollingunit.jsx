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
    const [selectedPollingUnit, setSelectedPollingUnit] = useState(null);
    const { id } = router.query;

    const handleQuickView = (pollingUnit) => {
        setSelectedPollingUnit(pollingUnit);
    };

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
                                        <Link href="#" className="quick_icon" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleQuickView(ward)}>
                                            Quick View
                                        </Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                )}
                <div className="modal elec-bx-data-mod fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="elec-mod">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="elec-img-mod">
                                                <img src="/images/elec-img.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="elec-mod-cont">
                                                <h2>{selectedPollingUnit?.polling_unit_name}</h2>
                                            </div>
                                            <div className="elec-mod-tb">
                                                <table width="100%">
                                                    <tr>
                                                        <td>Code :</td>
                                                        <td>{selectedPollingUnit?.pu_code}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ward</td>
                                                        <td>{wardsData?.electionwarddata?.ward_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>LGA</td>
                                                        <td>{wardsData?.lgadata?.lga_name}</td>
                                                    </tr>
                                                </table>
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

export default Wards;
