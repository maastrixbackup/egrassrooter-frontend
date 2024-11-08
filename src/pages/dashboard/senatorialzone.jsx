import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
    const [alllists, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // Track the current page
    const [totalPages, setTotalPages] = useState(1);    // Track total pages

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        const tokenData = localStorage.getItem("token");
        const formData = {
            zone_key: 6,
            page: page,
        };

        if (tokenData) {
            try {
                const response = await PostData(`dashboard/get-political-zones`, formData, "", `Bearer ${tokenData}`);
                setList(response.senatestates.data); 
                setTotalPages(response.senatestates.last_page);
            } catch (error) {
                toast.error("An error occurred. Please login again.");
            }
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    disabled={i === currentPage}
                    className={i === currentPage ? "active" : ""}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Senatorial States
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Senatorial States List</h4>
                    <Link href="/dashboard" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Sl No#</th>
                                <th>State Name</th>
                                <th>Senatorial Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllists?.map((all, index) => (
                                <tr key={index}>
                                    <td>{(currentPage - 1) * 20 + index + 1}</td>
                                    <td>{all.statename}</td>
                                    <td>{all.senatorialStateName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination-controls">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        {renderPageNumbers()}
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
