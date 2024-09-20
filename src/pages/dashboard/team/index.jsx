import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeamList = () => {
  const [teams, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (tokenData && userId) {
        const data = { token: userId };

        try {
          const verifyTokenResponse = await PostData("verify-token", data, "", `Bearer ${tokenData}`);

          if (verifyTokenResponse.status === 200) {
            const res = await axiosGet("team", `Bearer ${tokenData}`);
            if (res.data) {
              setEvents(res.data || []);
            } else {
              toast.error("Failed to fetch team data.");
            }
          } else {
            toast.error("Token verification failed. Please login again.");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            signOut();
          }
        } catch (error) {
          toast.error("An error occurred. Please login again.");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          signOut();
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("No token or user ID found. Please login.");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        signOut();
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (teamId) => {
    const tokenData = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (tokenData) {
      try {
        const response = await PostData(`team-delete/${teamId}`, "", "", `Bearer ${tokenData}` );
        if (response.success) {
          toast.success(response.message);
          setEvents((prevEvents) => prevEvents.filter((team) => team.id !== teamId));
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("An error occurred while deleting the team.");
      }
    } else {
      toast.error("No token found. Please login.");
    }
  };
  
  

  return (
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Team List
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Team List</h4>
          <Link
            href="/dashboard/team/newteam"
            className="btn-back"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Add Team Member"
          >
            <i className="fa-solid fa-plus" />
          </Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : teams.length === 0 ? (
          <p>No team members found.</p>
        ) : (
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sl No#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Task</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={team.id}>
                    <td>{index + 1}</td>
                    <td>{team.name}</td>
                    <td>{team.description}</td>
                    <td>{team.task}</td>
                    <td>{team.address}</td>
                    <td>
                      <div className="drop">
                        <ul>
                          <li>
                            <a
                              className="btn-invite-tb"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Invite Member"
                              href="#"
                            >
                              <i className="fa-solid fa-user" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn-view-tb"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="View Member"
                              href="#"
                            >
                              <i className="fad fa-eye" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn-edit-tb"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Edit Member"
                              href="#"
                            >
                              <i className="fa-regular fa-pen-to-square" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="btn-delete-tb"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete Member"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default link behavior
                                if (window.confirm("Are you sure you want to delete this team?")) {
                                  handleDelete(team.id);
                                }
                              }}
                            ><i className="fa-solid fa-trash" /></a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamList;
