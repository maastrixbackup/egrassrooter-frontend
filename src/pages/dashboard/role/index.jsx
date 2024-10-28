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
            const userId = localStorage.getItem("userId");

            if (tokenData && userId) {
                try {
                    const res = await axiosGet("rolelist", `Bearer ${tokenData}`);
                    setRolelist(res.data || []);
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
                        Role
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Role List</h4>
                    <Link href="/dashboard" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>Sl No#</th>
                                <th>Role Name</th>
                                <th>Created On</th>
                                <th>Active</th>
                            </tr>
                            {rolelists.map((role, index) => (
                                <tr key={role.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{role.role}</td>
                                    <td>{role.created}</td>
                                    <td>
                                        <button className={`btn-toggle-status ${role.is_active == "Publish" ? "button-publish" : "button-not-publish"}`}>
                                            {role.is_active == "Publish" ? "Publish" : "Unpublish"}
                                        </button>
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
