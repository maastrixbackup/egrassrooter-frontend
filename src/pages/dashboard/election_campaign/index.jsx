import React, { useState, useEffect } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
	const [electionCampaign, setElectionCampaign] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const fetchElectionCampaign = async () => {
			if (typeof window !== "undefined") {
				const tokenData = localStorage.getItem("token");
				const userId = localStorage.getItem("userId");
	
				if (tokenData && userId) {
					const cachedData = localStorage.getItem("electionCampaignData");
					if (cachedData) {
						setElectionCampaign(JSON.parse(cachedData));
					} else {
						try {
							const res = await axiosGet("election-campaign", `Bearer ${tokenData}`);
							if (res.campaigntypedata) {
								setElectionCampaign(res.campaigntypedata || []);
								localStorage.setItem("electionCampaignData", JSON.stringify(res.campaigntypedata));
							} else {
								toast.error("Failed to fetch profile data.");
							}
						} catch (error) {
							toast.error("An error occurred. Please login again.");
							localStorage.removeItem("token");
							localStorage.removeItem("userId");
						}
					}
				} else {
					toast.error("No token or user ID found. Please login.");
					localStorage.removeItem("token");
					localStorage.removeItem("userId");
				}
			}
		};
		fetchElectionCampaign();
	}, [router]);

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
					<h3>Select Election type</h3>
					<p>Select any election to view results.</p>
				</div>
				<div className="election_cont_bx">
					<div className="row">
						{electionCampaign.map((campaign, index) => (
							<div key={index} className="col-lg-3">
								<Link href={`/dashboard/election_campaign/states?id=${campaign.id}`} className="elec_cont_bx">
									<h2>{campaign.campaign_type}</h2>
									<div className="ar-icon">
										<i className="fal fa-chevron-double-right" />
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
