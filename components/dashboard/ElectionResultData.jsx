import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { PostData } from "../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BarChart = () => {
    const [electionResultsData, setElectionresultsData] = useState(null);
    const [getdata, setData] = useState({
        election_type: "",
        state_id: "",
        election_year: "",
    });

    useEffect(() => {
        if (getdata.election_type && getdata.election_year) {
            handleSubmit();
        }
    }, [getdata]);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        const token = localStorage.getItem("token");
        if (token) {
            try {
                const resData = await PostData(
                    "filter/election-results",
                    getdata,
                    "",
                    `Bearer ${token}`
                );
                setElectionresultsData(resData);
            } catch (error) {
                toast.error("An error occurred while adding the blog.");
            }
        } else {
            toast.error("No token found.");
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
        ssr: false,
    });

    const data = {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [
            {
                label: 'YEAR WISE ELECTION DATA',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="election-result-bx">
            <div className="ele-re-bx">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ele-re-title">
                                <h3>Election</h3>
                                <p>General Election conducted by INEC</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="ele-yr-select">
                                <label>Election Type</label>
                                <select className="form-select" name="election_type" value={getdata.election_type} onChange={handleElectionTypeChange}>
                                    <option value="">Select Election Type</option>
                                    {electionresults.electiontype.map((eleType, i) => (
                                        <option key={i} value={eleType.id}>
                                            {eleType.election_type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {selectedElectionType !== "1" && (
                            <div className="col-lg-4">
                                <div className="ele-yr-select">
                                    <label>State</label>
                                    <select className="form-select" name="state_id" value={getdata.state_id} onChange={handleChange}>
                                        <option value="">Select State</option>
                                        {electionresults.statedata.map((state, i) => (
                                            <option key={i} value={state.id}>
                                                {state.state_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                        <div className="col-lg-4">
                            <div className="ele-yr-select">
                                <label>Election Year</label>
                                <select className="form-select" name="election_year" value={getdata.election_year} onChange={handleChange}>
                                    <option value="">Select Election Year</option>
                                    {electionresults.electionyears.map((yeardata, i) => (
                                        <option key={i} value={yeardata.year}>
                                            {yeardata.year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="ele-show-gh-bx">
                <div className="row">
                    <div style={{ width: "100%", height: "100vh" }}>
                        <h1>Election Result</h1>
                        <Bar data={data} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BarChart;
