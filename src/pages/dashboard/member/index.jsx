import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MemberList = () => {
  const [members, setMember] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");

      const res = await axiosGet("member", `Bearer ${tokenData}`);
      if (res.data) {
        setMember(res.data || []);
      } else {
        toast.error("Failed to fetch team data.");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (memberId) => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const data = { id: memberId };
        const response = await PostData("member-delete", data, "", `Bearer ${tokenData}`);
        if (response.success) {
          toast.success(response.message);
          setEvents((prevEvents) => prevEvents.filter((member) => member.id !== memberId));
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("An error occurred while deleting the member.");
      }
    } else {
      toast.error("No token found. Please login.");
    }
  };

  return (
    <div className="col-lg-12 col-md-12">
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Member
            </li>
          </ol>
        </nav>

        <div className="table-bx-main">
          <div className="table-title">
            <h4>Member List</h4>
            <Link href="/dashboard/member/add" className="btn-back">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
          <div className="table-filter-bx">
            <div className="form-group">
              <select name="" id="" className="form-select">
                <option>--Select Role Type--</option>
                <option>Campaign Admin</option>
                <option>Campaign Admin</option>
                <option>Campaign Admin</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search by Address" />
            </div>
            <div className="btn-flex">
              <a href="#" className="btn-filter">Filter</a>
              <a href="#" className="btn-reset">Reset</a>
            </div>
          </div>

          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sl No#</th>
                  <th>Role Type</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Id</th>
                  <th>State</th>
                  <th>Address</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {members.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.role}</td>
                    <td>{member.name}</td>
                    <td>{member.phone_number}</td>
                    <td>{member.email_id}</td>
                    <td>{member.state}</td>
                    <td>{member.address}</td>
                    <td>{member.created}</td>
                    <td>
                        <div class="btn-flex">
                            <Link href={`/dashboard/member/${member.id}`} className="btn-share">
                              <i className="fa-regular fa-pen-to-square" />
                            </Link>
                            <a href="#" class="btn-danger"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link behavior
                                    if (window.confirm("Are you sure you want to delete this member?")) {
                                      handleDelete(member.id);
                                    }
                                  }}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </a>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
