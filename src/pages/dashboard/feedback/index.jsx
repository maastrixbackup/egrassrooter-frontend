import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
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
            }
        };
        fetchData();
    }, []);

    const columns = [
        { name: "Sl No#", selector: (row, index) => index + 1, width: "100px" },
        { name: "Question", selector: (row) => row.questions, sortable: true },
        { name: "Created On", selector: (row) => row.created, sortable: true },
        {
            name: "Actions",
            cell: (row) => (
                <a
                    href={`/dashboard/feedback/surveyreply?id=${row.id}&sid=${row.survey_id}`}
                    className="btn-share"
                >
                    <i className="fa fa-reply" />
                </a>
            ),
        },
    ];

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
                <DataTable
                    columns={columns}
                    data={feedbacklists}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default Index;
