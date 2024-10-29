import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [surveylists, setSurveylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");

      if (tokenData) {
        try {
          const res = await axiosGet("survey", `Bearer ${tokenData}`);
          setSurveylists(res.data || []);
        } catch (error) {
          toast.error("An error occurred. Please login again.");
        }
      } else {
        toast.error("No token or user ID found. Please login.");
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (surveyId) => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const data = { id: surveyId };
        const response = await PostData("survey-delete", data, "", `Bearer ${tokenData}`);
        if (response.success) {
          toast.success(response.message);
          setSurveylists((prevSurveys) => prevSurveys.filter((survey) => survey.id !== surveyId));
        } else {
          toast.error(response.message || "An error occurred while deleting the survey.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the survey.");
      }
    } else {
      toast.error("No token found. Please login.");
    }
  };

  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Survey
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Survey List</h4>
            <Link href="/dashboard/surveylist/addsurvey" className="btn-event">
              Add New Survey
            </Link>
          </div>
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Sl No#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
                {surveylists.map((survey, index) => (
                  <tr key={survey.id || index}>
                    <td>{index + 1}</td>
                    <td><Link href={`/dashboard/surveylist/addquestions?id=${survey.id}`}>{survey.title}</Link></td>
                    <td>{survey.description}</td>
                    <td>{survey.created}</td>
                    <td>
                      <div className="btn-flex">
                        <Link href={`/dashboard/surveylist/viewquestions?id=${survey.id}`} class="btn-view">
                          <i class="fa-solid fa-eye"></i>
                        </Link>
                        <Link href={`/dashboard/surveylist/${survey.id}`} className="btn-share">
                          <i className="fa-regular fa-pen-to-square" />
                        </Link>
                        <Link
                          href="#"
                          className="btn-danger"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            if (window.confirm("Are you sure you want to delete this survey?")) {
                              handleDelete(survey.id);
                            }
                          }}
                        >
                          <i className="fa-solid fa-xmark" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
