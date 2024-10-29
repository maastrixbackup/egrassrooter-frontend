import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSurvey = () => {
    const router = useRouter();
    const { id, sid } = router.query;
    const [survey, setSurvey] = useState({
        question_id: "",
        survey_id: "",
        answer: "",
    });
    const [loading, setLoading] = useState(true);
    const [tokenData, setTokenData] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchSurveyData = async () => {
            const tokenData = localStorage.getItem("token");
            const res = await axiosGet(`edit-survey-questions/${sid}/${id}`, `Bearer ${tokenData}`);
            setSurvey(res.question || {});
            setLoading(false);
        };

        if (id) {
            fetchSurveyData();
        }
    }, [id, sid]);

    useEffect(() => {
        setLoading(false);
        setTokenData(localStorage.getItem("token"));
        setUserId(localStorage.getItem("userId"));
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();

        if (tokenData && userId) {
            try {
                const data = {
                    question_id: id,
                    survey_id: sid,
                    answer: survey.answer,
                };
                const res = await PostData(`survey-reply`, data, "", `Bearer ${tokenData}`);
                if (res.message) {
                    toast.success(res.message);
                    router.push("/dashboard/feedback");
                } else {
                    toast.error(res.message);
                }
            } catch (error) {
                toast.error("Your response is already available for this survey.");
            }
        } else {
            toast.error("No token found.");
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setSurvey({
            ...survey,
            [name]: files ? files[0] : value,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    // Split the options string into an array
    const optionsArray = survey.options ? survey.options.split(",") : [];

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Survey Reply
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Survey Reply</h4>
                    <Link href="/dashboard/surveylist" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="event-form">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="survet-img">
                                <Image src="/images/survey2.jpg" alt="Survey image description" width={500} height={300} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form onSubmit={handleAdd}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="question">
                                                Question <span>*</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </label>
                                            <input type="text" name="questions" value={survey.questions} className="form-control" readOnly />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="options">
                                                answer <span>*</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </label>
                                            <select className="form-select" name="answer" onChange={handleChange} required>
                                                <option value="">Select an Answer</option>
                                                {optionsArray.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="comments">
                                                Comments <span>*</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </label>
                                            <textarea name="comments" className="form-control" onChange={handleChange} rows={4} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-end">
                                        <button type="submit" className="btn-event">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSurvey;
