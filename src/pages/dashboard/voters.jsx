import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PostData } from "../../../utils/ApiCalls"; // Assuming you have a utils function to make API calls
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PollingUnitPage = () => {
    const [alllists, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // Track the current page
    const [totalPages, setTotalPages] = useState(1);    // Track total pages
    const [inputPage, setInputPage] = useState("");     // Track the page number input

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        const tokenData = localStorage.getItem("token");
        const formData = {
            zone_key: 3,
            page: page,
        };

        if (tokenData) {
            try {
                const response = await PostData("dashboard/get-political-zones", formData, "", `Bearer ${tokenData}`);
                setList(response.pollingUnits.data);
                setTotalPages(response.pollingUnits.last_page);
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

    const handleInputChange = (e) => {
        setInputPage(e.target.value);
    };

    const handleGoToPage = () => {
        const pageNumber = parseInt(inputPage, 10);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            setInputPage(""); // Clear input field after navigation
        } else {
            toast.error(`Please enter a valid page number between 1 and ${totalPages}`);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxButtons = 8;
        const halfMax = Math.floor(maxButtons / 2);

        let startPage = Math.max(1, currentPage - halfMax);
        let endPage = Math.min(totalPages, currentPage + halfMax);

        if (currentPage <= halfMax) {
            endPage = Math.min(totalPages, maxButtons);
        } else if (currentPage + halfMax >= totalPages) {
            startPage = Math.max(1, totalPages - maxButtons + 1);
        }

        if (startPage > 1) {
            pageNumbers.push(
                <button key={1} onClick={() => handlePageClick(1)} disabled={currentPage === 1} className={currentPage === 1 ? "active" : ""}>
                    1
                </button>
            );
            if (startPage > 2) {
                pageNumbers.push(<span key="start-ellipsis">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} disabled={i === currentPage} className={i === currentPage ? "active" : ""}>
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(<span key="end-ellipsis">...</span>);
            }
            pageNumbers.push(
                <button key={totalPages} onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages} className={currentPage === totalPages ? "active" : ""}>
                    {totalPages}
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
                        Registered Voters
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Registered Voters List</h4>
                    <Link href="/dashboard" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Sl No#</th>
                                <th>Polling Unit Name</th>
                                <th>Registered Voters Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllists?.map((all, index) => (
                                <tr key={index}>
                                    <td>{(currentPage - 1) * 20 + index + 1}</td>
                                    <td>{all.pollingname}</td>
                                    <td>{all.polling_capacity}</td>
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
                        <input type="number" value={inputPage} onChange={handleInputChange} placeholder="Enter page number" />
                        <button onClick={handleGoToPage}>Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollingUnitPage;
