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
    const [allMemberTeamLists, setAllMemberTeamList] = useState([]);
    const [allZoneList, setZoneList] = useState({});
    const [allStateList, setStateList] = useState({});
    const [allWardList, setWardList] = useState({});
    const [allPulList, setPulList] = useState({});
    const [allPulDataList, setPulDataList] = useState({}); setPulDataList

    useEffect(() => {
        if (typeof window !== 'undefined') {
            $('.js-select2').select2();
            $('.js-select2').on('change', stateZoneChange);

            return () => {
                $('.js-select2').off('change', stateZoneChange);
            };
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchElections = async () => {
            try {
                const response = await axiosGet("all-analytics-states", `Bearer ${token}`);
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

    const stateZoneChange = async (e) => {
        const selectedZones = $(e.target).val();
        const tokenData = localStorage.getItem("token");

        const formattedZones = selectedZones.reduce((acc, zone, index) => {
            acc[`zones[${index}]`] = zone;
            return acc;
        }, {});

        try {
            const response = await PostData("all-analytics-zone", formattedZones, "", `Bearer ${tokenData}`);
            if (response.success === true) {
                setZoneList(response.states);
            } else {
                toast.error("Failed to update zones.");
            }
        } catch (error) {
            console.error("Error updating zones:", error);
            toast.error("An error occurred while updating zones.");
        }
    };

    const lgaStateChange = async (e) => {
        const tokenData = localStorage.getItem("token");
        const checkboxes = document.querySelectorAll('input[name="state_id[]"]:checked');
        const selectedStates = Array.from(checkboxes).map(checkbox => checkbox.value);

        const formattedState = selectedStates.reduce((acc, id, index) => {
            acc[`state_id[${index}]`] = id;
            return acc;
        }, {});

        try {
            const response = await PostData("all-analytics-lgas", formattedState, "", `Bearer ${tokenData}`);
            if (response) {
                setStateList(response.lgaList);
            } else {
                toast.error("Failed to update zones.");
            }
        } catch (error) {
            toast.error("An error occurred while updating zones.");
        }
    };

    const wardLgaseChange = async (e) => {
        const tokenData = localStorage.getItem("token");
        const checkboxes = document.querySelectorAll('input[name="lga_id[]"]:checked');
        const selectedLgas = Array.from(checkboxes).map(checkbox => checkbox.value);

        const formattedLga = selectedLgas.reduce((acc, id, index) => {
            acc[`lga_id[${index}]`] = id;
            return acc;
        }, {});

        try {
            const response = await PostData("all-analytics-ward", formattedLga, "", `Bearer ${tokenData}`);
            if (response) {
                setWardList(response.ward_list);
            } else {
                toast.error("Failed to update zones.");
            }
        } catch (error) {
            toast.error("An error occurred while updating zones.");
        }
    };

    const puWardChange = async (e) => {
        const tokenData = localStorage.getItem("token");
        const checkboxes = document.querySelectorAll('input[name="ward_id[]"]:checked');
        const selectedWards = Array.from(checkboxes).map(checkbox => checkbox.value);

        const formattedWard = selectedWards.reduce((acc, id, index) => {
            acc[`ward_id[${index}]`] = id;
            return acc;
        }, {});

        try {
            const response = await PostData("all-analytics-polling-unit", formattedWard, "", `Bearer ${tokenData}`);
            if (response) {
                setPulList(response.pollingUnit);
            } else {
                toast.error("Failed to update zones.");
            }
        } catch (error) {
            toast.error("An error occurred while updating zones.");
        }
    };

    const pollingUnitChange = async (e) => {
        const tokenData = localStorage.getItem("token");
        const checkboxes = document.querySelectorAll('input[name="polling_unit_id[]"]:checked');
        const selectedPuls = Array.from(checkboxes).map(checkbox => checkbox.value);

        const formattedPullu = selectedPuls.reduce((acc, id, index) => {
            acc[`polling_unit_id[${index}]`] = id;
            return acc;
        }, {});

        try {
            const response = await PostData("polling-unit-member-team", formattedPullu, "", `Bearer ${tokenData}`);
            if (response) {
                setPulDataList(response.polling_unit);
            } else {
                toast.error("Failed to update zones.");
            }
        } catch (error) {
            toast.error("An error occurred while updating zones.");
        }
    };

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
                                        <select class="js-select2" multiple="multiple" >
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
                                                {Object.entries(allZoneList).map(([zone, states]) => (
                                                    <div className="tar_state_list" key={zone}>
                                                        <h4>{zone}</h4>
                                                        <div className="tar_check tar_small">
                                                            <ul>
                                                                {states.map((state) => (
                                                                    <li key={state.sId}>
                                                                        <input type="checkbox" name="state_id[]" value={state.sId} id={`state-${state.sId}`} onChange={(e) => lgaStateChange(e, state)} />
                                                                        <label htmlFor={`state-${state.sId}`}><span>{state.name}</span></label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>Ward List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                {Object.entries(allStateList).map(([state, lgas]) => (
                                                    <div className="tar_state_list" key={state}>
                                                        <h4>{state}</h4>
                                                        <div className="tar_check tar_small">
                                                            <ul>
                                                                {lgas.map((lga) => (
                                                                    <li key={lga.id}>
                                                                        <input type="checkbox" name="lga_id[]" value={lga.id} id={`lga-${lga.id}`} onChange={(e) => wardLgaseChange(e, lga)} />
                                                                        <label htmlFor={`lga-${lga.id}`}>
                                                                            <span>{lga.name}</span>
                                                                        </label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>LGAs List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                {Object.entries(allWardList).map(([lga, wards]) => (
                                                    <div className="tar_state_list" key={lga}>
                                                        <h4>{lga}</h4>
                                                        <div className="tar_check tar_small">
                                                            <ul>
                                                                {wards.map((ward) => (
                                                                    <li key={ward.id}>
                                                                        <input type="checkbox" name="ward_id[]" value={ward.id} id={`ward-${ward.id}`} onChange={(e) => puWardChange(e, ward)} />
                                                                        <label htmlFor={`ward-${ward.id}`}>
                                                                            <span>{ward.name}</span>
                                                                        </label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="tar_check_sp">
                                            <div class="state_list_title">
                                                <h3>Polling Unit List</h3>
                                            </div>
                                            <div class="target_scroll">
                                                {allPulList && Object.entries(allPulList).length > 0 ? (
                                                    Object.entries(allPulList).map(([ward, puls]) => (
                                                        <div className="tar_state_list" key={ward}>
                                                            <h4>{ward}</h4>
                                                            <div className="tar_check tar_small">
                                                                <ul>
                                                                    {puls.map((pul) => (
                                                                        <li key={pul.id}>
                                                                            <input
                                                                                type="checkbox"
                                                                                name="polling_unit_id[]"
                                                                                value={pul.id}
                                                                                id={`pul-${pul.id}`}
                                                                                onChange={(e) => pollingUnitChange(e, pul)}
                                                                            />
                                                                            <label htmlFor={`pul-${pul.id}`}>
                                                                                <span>{pul.name}</span>
                                                                            </label>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No polling units available.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnalysisMap allMemberTeamLists={allMemberTeamLists} allZoneList={allZoneList} allStateList={allStateList} allWardList={allWardList} allPulList={allPulList} allPulDataList={allPulDataList} />
        </div>
    );
};

export default Index;
