import React, { useState, useEffect } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const States = () => {
    const [statesData, setStates] = useState([]);
    const router = useRouter();
	const [loading, setLoading] = useState(false);
    const { id } = router.query;

	useEffect(() => {
		const fetchStates = async () => {
			if (typeof window !== "undefined" && id) {
				const tokenData = localStorage.getItem("token");
				const userId = localStorage.getItem("userId");
	
				if (tokenData && userId) {
					setLoading(true); // Set loading to true when starting fetch
					try {
						const res = await axiosGet(`election-campaign/states/${id}`, `Bearer ${tokenData}`);
						if (res.campaignwisestate) {
							setStates(res || []);
						} else {
							toast.error("Failed to fetch state data.");
						}
					} catch (error) {
						toast.error("An error occurred. Please login again.");
						localStorage.removeItem("token");
						localStorage.removeItem("userId");
					} finally {
						setLoading(false); // Set loading to false when done
					}
				} else {
					localStorage.removeItem("token");
					localStorage.removeItem("userId");
				}
			}
		};
	
		fetchStates();
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
					<h3>{statesData?.electioncampaign?.election_campaign || "Election Campaign"}</h3>
					<p>View results by state</p>
				</div>
				{loading ? (
					<div>Loading...</div> // Show loading message or spinner
				) : (
					<div className="election_cont_bx">
						<div className="row">
							{statesData?.campaignwisestate?.map((state, index) => (
								<div key={index} className="col-lg-3">
									<Link href={`/dashboard/election_campaign/lga?id=${state.id}`}>
										<div className="elec_cont_details">
											<h2>{state.state}</h2>
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

export default States;
