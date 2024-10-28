import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewQuestions = () => {
    const router = useRouter();
    const { id } = router.query;
    const [surveylists, setSurveylists] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchSurveyData = async () => {
            const tokenData = localStorage.getItem("token");
            const res = await axiosGet(`survey-questions/${id}`, `Bearer ${tokenData}`);
            setSurveylists(res.questionsDet || []);
            setLoading(false);
        };

        if (id) {
            fetchSurveyData();
        }
    }, [id]);

    // const handleDelete = async (surveyId) => {
    //     const tokenData = localStorage.getItem("token");
    //     if (tokenData) {
    //         try {
    //             const data = { id: surveyId };
    //             const response = await PostData("survey-delete", data, "", `Bearer ${tokenData}`);
    //             if (response.success) {
    //                 toast.success(response.message);
    //                 setSurveylists((prevSurveys) => prevSurveys.filter((survey) => survey.id !== surveyId));
    //             } else {
    //                 toast.error(response.message || "An error occurred while deleting the survey.");
    //             }
    //         } catch (error) {
    //             toast.error("An error occurred while deleting the survey.");
    //         }
    //     } else {
    //         toast.error("No token found. Please login.");
    //     }
    // };

    if (loading) {
        return <div>Loading...</div>; // Show loading state while fetching
    }

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Questions
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Questions List</h4>
                    <Link href="/dashboard/surveylist" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="table-bx">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>Sl No#</th>
                                <th>Question</th>
                                <th>Options</th>
                                <th>Answer</th>
                                <th>Created On</th>
                                <th>Actions</th>
                            </tr>
                            {surveylists.map((survey, index) => (
                                <tr key={survey.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{survey.questions}</td>
                                    <td>{survey.options.join(", ")}</td>
                                    <td>{survey.answer.join(", ")}</td>
                                    <td>{survey.created}</td>
                                    <td>
                                        <div className="btn-flex">
                                            <Link href={`/dashboard/surveylist/editquestions?id=${survey.id}&qs=${id}`} className="btn-share">
                                                <i className="fa-regular fa-pen-to-square" />
                                            </Link>
                                            {/* <Link href="#" className="btn-danger"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent default link behavior
                                                    if (window.confirm("Are you sure you want to delete this Questions?")) {
                                                        handleDelete(survey.id);
                                                    }
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark" />
                                            </Link> */}
                                        </div>
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

export default ViewQuestions;
