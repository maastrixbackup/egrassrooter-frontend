import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';
import React, { useEffect } from 'react';
import $ from 'jquery';

const Index = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            $('.js-select2').select2();
        }
    }, []);
    return (
        <div class="col-lg-12 col md-12">
            <div class="target-map">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2>Geo Political Filter</h2>
                        <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img src="/images/filter.png" alt="" />
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
                                            <option value="O1" data-badge=""> NORTH CENTRAL </option>
                                            <option value="O2" data-badge=""> NORTH EAST </option>
                                            <option value="O3" data-badge=""> NORTH WEST </option>
                                            <option value="O4" data-badge=""> SOUTH EAST </option>
                                            <option value="O5" data-badge=""> SOUTH SOUTH </option>
                                            <option value="O6" data-badge=""> SOUTH WEST </option>
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
            <div class="target_map_frame">
                <img src="/images/target_map.jpg" alt="" />
            </div>
        </div>
    );
};

export default Index;
