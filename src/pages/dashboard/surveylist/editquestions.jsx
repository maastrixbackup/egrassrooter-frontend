import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditQuestions = () => {
    const router = useRouter();
    const { id, qs } = router.query;
    const [question, setQuestion] = useState({
        questions: "",
        answer: "",
        options: [{ text: "" }]
    });
    const [loading, setLoading] = useState(true);
    const [tokenData, setTokenData] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setLoading(true); // Set loading true when fetching data
        setTokenData(localStorage.getItem("token"));
        setUserId(localStorage.getItem("userId"));

        if (id && qs) {
            const fetchSurveyData = async () => {
                try {
                    const res = await axiosGet(`edit-survey-questions/${qs}/${id}`, `Bearer ${tokenData}`);
                    if (res.question) {
                        const fetchedQuestion = res.question;
                        setQuestion({
                            questions: fetchedQuestion.questions,
                            answer: fetchedQuestion.answer,
                            options: fetchedQuestion.options.split(',').map(opt => ({ text: opt.trim() }))
                        });
                    } else {
                        toast.error("Question not found.");
                    }
                } catch (error) {
                    toast.error("Failed to fetch survey data.");
                } finally {
                    setLoading(false);
                }
            };
            fetchSurveyData();
        }
    }, [id, qs, tokenData]);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (tokenData && userId) {
            try {
                const data = {
                    questions: question.questions,
                    options: question.options.map(opt => opt.text),
                    answer: [question.answer]
                };
                const res = await PostData(`update-survey-questions/${qs}/${id}`, data, "", `Bearer ${tokenData}`);
                if (res.question) {
                    toast.success(res.message);
                    router.push("/dashboard/surveylist");
                } else {
                    toast.error(res.message);
                }
            } catch (error) {
                toast.error("An error occurred while adding the question.");
            }
        } else {
            toast.error("No token found.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestion((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAnswerChange = (value) => {
        setQuestion((prev) => ({
            ...prev,
            answer: value,
        }));
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = question.options.map((opt, idx) =>
            idx === index ? { text: value } : opt
        );
        setQuestion((prev) => ({
            ...prev,
            options: updatedOptions,
        }));
    };

    const addOption = () => {
        setQuestion((prev) => ({
            ...prev,
            options: [...prev.options, { text: "" }],
        }));
    };

    const removeOption = (index) => {
        setQuestion((prev) => ({
            ...prev,
            options: prev.options.filter((_, idx) => idx !== index),
        }));
    };

    if (loading) {
        return <div>Loading...</div>;
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
                    <h4>Edit Survey Questions</h4>
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
                                <div className="form-group">
                                    <label>Question <span>*</span></label>
                                    <textarea
                                        name="questions"
                                        className="form-control"
                                        value={question.questions}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                    />
                                </div>
                                {question.options.map((option, index) => (
                                    <div className="row" key={index}>
                                        <div className="col-lg-10">
                                            <div className="form-group">
                                                <label>Option {index + 1} <span>*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={option.text}
                                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 d-flex align-items-center">
                                            {question.options.length > 1 && (
                                                <button type="button" className="btn btn-danger" onClick={() => removeOption(index)}>
                                                    <i className="fa fa-minus" /> {/* Changed to minus icon */}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-primary mt-3" onClick={addOption}>
                                    Add New Option
                                </button>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor>
                                            Answer <span>*</span>
                                            <i className="fa-solid fa-circle-info" />
                                        </label>
                                        <input
                                            type="text"
                                            onChange={(e) => handleAnswerChange(e.target.value)}
                                            value={question.answer}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="text-end mt-3">
                                    <button type="submit" className="btn-event">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditQuestions;
