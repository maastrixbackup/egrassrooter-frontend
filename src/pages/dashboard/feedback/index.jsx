import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    const [feedbacklists, setFeedbacklist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tokenData = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (tokenData && userId) {
                try {
                    const res = await axiosGet("feedback-questions-list", `Bearer ${tokenData}`);
                    setFeedbacklist(res.data || []);
                } catch (error) {
                    toast.error("An error occurred. Please login again.");
                }
            } else {
                toast.error("No token or user ID found. Please login.");
            }
        };
        fetchData();
    }, []);

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Feedback
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Feedback List</h4>
                    <Link href="/dashboard" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>Sl No#</th>
                                <th>Question</th>
                                <th>Created On</th>
                                <th>Actions</th>
                            </tr>
                            {feedbacklists.map((feedback, index) => (
                                <tr key={feedback.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{feedback.questions}</td>
                                    <td>{feedback.created}</td><td>
                                        <a href={`/dashboard/feedback/surveyreply?id=${feedback.id}&sid=${feedback.survey_id}`} className="btn-share">
                                            <i className="fa fa-reply" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
