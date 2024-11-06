import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    const [rolelists, setRolelist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tokenData = localStorage.getItem("token");
            if (tokenData) {
                try {
                    const res = await axiosGet("get-all-survey-report", `Bearer ${tokenData}`);
                    setRolelist(res.data || []);
                } catch (error) {
                    toast.error("An error occurred. Please login again.");
                }
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
                        Give Feedback
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Give Feedback List</h4>
                    <Link href="/dashboard" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>Sl No#</th>
                                <th>User Name</th>
                                <th>Survey Title</th>
                                <th>Question</th>
                                <th>User Answer</th>
                            </tr>
                            {rolelists.map((feedback, index) => (
                                <tr key={feedback.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{feedback.user_name}</td>
                                    <td>{feedback.survey_title}</td>
                                    <td>{feedback.question_text}</td>
                                    <td>{feedback.user_answer}</td>
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
