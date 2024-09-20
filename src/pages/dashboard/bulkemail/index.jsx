import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { axiosGet } from '../../../../utils/ApiCalls'; // Import the axiosGet function

const CustomEditor = dynamic(() => import('../../../components/CKEditorComponent'), { ssr: false });

function Index() {
    const [editorData, setEditorData] = useState('<p>Type your email content here!</p>');
    const [roleTypes, setRoleTypes] = useState([]);

    // Fetch role types from API
    const fetchRoleTypes = async () => {
        try {
            const storedToken = localStorage.getItem("token");

            if (!storedToken) {
                throw new Error('Token not found');
            }

            const data = await axiosGet('send-email/role-type', storedToken);
            setRoleTypes(data.getroletype || []); // Adjust based on your response structure
        } catch (error) {
            console.error('Error fetching role types:', error.message);
            console.error('Error details:', error.response ? error.response.data : 'No response data');
        }
    };

    // Fetch role types when the component mounts
    useEffect(() => {
        fetchRoleTypes();
    }, []); // Empty dependency array means it will run once on component mount

    const handleEditorChange = (data) => {
        setEditorData(data);
        console.log(data); // Handle the content data as needed
    };

    return (
        <main className="bg-color">
            <section className="sidebar_sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-8">
                            <div className="sidebar_sec_rgt">
                                <nav aria-label="breadcrumb" className="d-flex align-items-start">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="user_dashboard.html">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Send Email
                                        </li>
                                    </ol>
                                </nav>
                                <div className="table-bx-main">
                                    <div className="table-title">
                                        <h4>Compose Mail</h4>
                                        <a href="#" className="btn-back"><i className="fal fa-angle-double-left" /></a>
                                    </div>
                                    <div className="event-form">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="bulk_email_img">
                                                    <img src="/images/bulk_email.jpg" alt="Bulk Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="bulk_emil_cont event-from">
                                                    <div className="email_filed_form">
                                                        <select name id className="form-select">
                                                            <option>-- Select Role Type --</option>
                                                            {roleTypes.map(role => (
                                                                <option key={role.role_id} value={role.role_id}>
                                                                    {role.role_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <a href="#" className="btn-danger-big">Reset</a>
                                                    </div>
                                                    <div className="emil_title form-group mt-3">
                                                        <label htmlFor>Select Emails <span>*</span><i className="fa-solid fa-circle-info" /></label>
                                                    </div>
                                                    <div className="email_form_box">
                                                        <div className="emqail_check_bx mb-3">
                                                            <input type="checkbox" id="toggleCheckbox" />
                                                            <label htmlFor="toggleCheckbox">Select All</label>
                                                        </div>
                                                        <div id="toggleDiv" className="mb-3">
                                                            <input type="text" placeholder="Email" className="form-control" />
                                                        </div>
                                                        <div className="email_form">
                                                            <CustomEditor editorData={editorData} onChange={handleEditorChange} />
                                                            <a href="#" className="btn-event mt-3">Compose</a>
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
            </section>
        </main>
    );
}

export default Index;
