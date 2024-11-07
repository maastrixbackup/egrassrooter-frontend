import React from "react";
import Link from "next/link";

const Management = ({ dashboard }) => {
    console.log(dashboard);
    return (
        <div className="row">
            {dashboard?.campaign_data?.statescount != 0 && (
                <div className="col-lg-4 col-md-4">
                    <Link href="/dashboard/state">
                        <div className="sidebar_sec_rgt_box">
                            <div className="abstlu_dv">
                                <div className="sidebar_sec_rgt_box_fig">
                                    <img src="/images/voters.png" alt="" />
                                </div>
                            </div>
                            <div className="sidebar_sec_rgt_box_cnt">
                                <h3>States</h3>
                                <p>{dashboard?.campaign_data?.statescount || "N/A"}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {dashboard?.campaign_data?.senatorialStatescount != 0 && (
                <div className="col-lg-4 col-md-4">
                    <Link href="/dashboard/senatorialzone">
                        <div className="sidebar_sec_rgt_box">
                            <div className="abstlu_dv">
                                <div className="sidebar_sec_rgt_box_fig">
                                    <img src="/images/voters.png" alt="" />
                                </div>
                            </div>
                            <div className="sidebar_sec_rgt_box_cnt">
                                <h3>Senatorial Zone</h3>
                                <p>{dashboard?.campaign_data?.senatorialStatescount || "N/A"}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {dashboard?.campaign_data?.federalStatescount != 0 && (
                <div className="col-lg-4 col-md-4">
                    <Link href="/dashboard/federal">
                        <div className="sidebar_sec_rgt_box">
                            <div className="abstlu_dv">
                                <div className="sidebar_sec_rgt_box_fig">
                                    <img src="/images/voters.png" alt="" />
                                </div>
                            </div>
                            <div className="sidebar_sec_rgt_box_cnt">
                                <h3>Federal Constituency</h3>
                                <p>{dashboard?.campaign_data?.federalStatescount || "N/A"}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {dashboard?.campaign_data?.lgacount != 0 && (
                <div className="col-lg-4 col-md-4">
                    <Link href="/dashboard/lgas">
                        <div className="sidebar_sec_rgt_box">
                            <div className="abstlu_dv">
                                <div className="sidebar_sec_rgt_box_fig">
                                    <img src="/images/voters.png" alt="" />
                                </div>
                            </div>
                            <div className="sidebar_sec_rgt_box_cnt">
                                <h3>LGAs</h3>
                                <p>{dashboard?.campaign_data?.lgacount || "N/A"}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {dashboard?.campaign_data?.wardscount != 0 && (
            <div className="col-lg-4 col-md-4">
                <Link href="/dashboard/ward">
                    <div className="sidebar_sec_rgt_box">
                        <div className="abstlu_dv">
                            <div className="sidebar_sec_rgt_box_fig">
                                <img src="/images/home.png" alt="" />
                            </div>
                        </div>
                        <div className="sidebar_sec_rgt_box_cnt">
                            <h3>Wards</h3>
                            <p>{dashboard?.campaign_data?.wardscount || "N/A"}</p>
                        </div>
                    </div>
                </Link>
            </div>
            )}
            {dashboard?.campaign_data?.pollingunitscount != 0 && (
            <div className="col-lg-4 col-md-4">
                <Link href="/dashboard/pollingunits">
                    <div className="sidebar_sec_rgt_box">
                        <div className="abstlu_dv">
                            <div className="sidebar_sec_rgt_box_fig">
                                <img src="/images/voters.png" alt="" />
                            </div>
                        </div>
                        <div className="sidebar_sec_rgt_box_cnt">
                            <h3>Polling Units</h3>
                            <p>{dashboard?.campaign_data?.pollingunitscount || "N/A"}</p>
                        </div>
                    </div>
                </Link>
            </div>
            )}
            <div className="col-lg-4 col-md-4">
                <div className="sidebar_sec_rgt_box bg_drkgrbn">
                    <div className="abstlu_dv">
                        <div className="sidebar_sec_rgt_box_fig">
                            <img src="/images/voters.png" alt="" />
                        </div>
                    </div>
                    <div className="sidebar_sec_rgt_box_cnt">
                        <h3>Total Registered Voters</h3>
                        <p>{dashboard?.projected_voter_turnoutcount || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 ">
                <div className="sidebar_sec_rgt_box">
                    <div className="abstlu_dv">
                        <div className="sidebar_sec_rgt_box_fig">
                            <img src="/images/voters.png" alt="" />
                        </div>
                    </div>
                    <div className="sidebar_sec_rgt_box_cnt fntsm">
                        <h3>Grassrooters</h3>
                        <p>{dashboard?.campaign_data?.grassrooterscount || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="sidebar_sec_rgt_box">
                    <div className="abstlu_dv">
                        <div className="sidebar_sec_rgt_box_fig">
                            <img src="/images/phone.png" alt="" />
                        </div>
                    </div>
                    <div className="sidebar_sec_rgt_box_cnt fntsm">
                        <h3>Contacts</h3>
                        <p>{dashboard?.campaign_data?.contactscount || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="sidebar_sec_rgt_box">
                    <div className="abstlu_dv">
                        <div className="sidebar_sec_rgt_box_fig">
                            <img src="/images/businessman.png" alt="" />
                        </div>
                    </div>
                    <div className="sidebar_sec_rgt_box_cnt fntsm">
                        <h3>Polling Agents</h3>
                        <p>{dashboard?.campaign_data?.pollingagentscount || "N/A"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
