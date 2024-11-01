import React, { useEffect, useState } from "react";
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';
import AnalysisMap from "../../../../components/dashboard/analysis/AnalysisMap";
import $ from 'jquery';
import Image from "next/image";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            $('.js-select2').select2();
        }
    }, []);

    const [allMemberTeamLists, setAllMemberTeamList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchElections = async () => {
            try {
                const response = await axiosGet("all-member-team", `Bearer ${token}`);
                if (response) {
                    setAllMemberTeamList(response);
                } else {
                    toast.error("Failed to fetch election data.");
                }
            } catch (error) {
                console.error("Error fetching election data:", error);
                toast.error("An error occurred while fetching election data.");
            }
        };

        fetchElections();
    }, []);

    return (
        <div class="col-lg-12 col md-12">
            <div class="target-map">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2>Geo Political Filter</h2>
                        <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <Image src="/images/filter.png" alt="filter" width={100} height={100} />
                        </button>
                    </div>
                </div>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="col-lg-8 mx-auto text-center">
                                <div class="geo_main_title">
                                    <h3>Geo Political Zones</h3>
                                    <div class="target_select">
                                        <select class="js-select2" multiple="multiple">
                                            <option value="NORTH CENTRAL" data-badge=""> NORTH CENTRAL </option>
                                            <option value="NORTH EAST" data-badge=""> NORTH EAST </option>
                                            <option value="NORTH WEST" data-badge=""> NORTH WEST </option>
                                            <option value="SOUTH EAST" data-badge=""> SOUTH EAST </option>
                                            <option value="SOUTH SOUTH" data-badge=""> SOUTH SOUTH </option>
                                            <option value="SOUTH WEST" data-badge=""> SOUTH WEST </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>State List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                <div class="tar_state_list">
                                                    <h4>NORTH CENTRAL</h4>
                                                    <div class="tar_check tar_small">
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox" id="state1" />
                                                                <label for="state1"><span>BENUE</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state2" />
                                                                <label for="state2"><span>FCT</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state3" />
                                                                <label for="state3"><span>KOGI</span></label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>Ward List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                <div class="tar_state_list">
                                                    <h4>BENUE</h4>
                                                    <div class="tar_check tar_small">
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox" id="state1" />
                                                                <label for="state1"><span>BENUE</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state2" />
                                                                <label for="state2"><span>FCT</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state3" />
                                                                <label for="state3"><span>KOGI</span></label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>LGAs List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                <div class="tar_state_list">
                                                    <h4>BENUE</h4>
                                                    <div class="tar_check tar_small">
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox" id="state1" />
                                                                <label for="state1"><span>BENUE</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state2" />
                                                                <label for="state2"><span>FCT</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state3" />
                                                                <label for="state3"><span>KOGI</span></label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>Polling Unit List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                <div class="tar_state_list">
                                                    <h4>NORTH CENTRAL</h4>
                                                    <div class="tar_check tar_small">
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox" id="state1" />
                                                                <label for="state1"><span>BENUE</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state2" />
                                                                <label for="state2"><span>FCT</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox" id="state3" />
                                                                <label for="state3"><span>KOGI</span></label>
                                                            </li>
                                                        </ul>
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
            <AnalysisMap />
        </div>
    );
};

export default Index;
