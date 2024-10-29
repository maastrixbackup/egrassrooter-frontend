import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";

const TeamAdd = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listMemberData, setListMemberData] = useState([]);
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({ team_id: "", member_id: [] });

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");
      const res = await axiosGet("member", `Bearer ${tokenData}`);
      if (res.data) {
        setMembers(res.data || []);
      } else {
        toast.error("Failed to fetch team data.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchListMemberData = async () => {
      if (!id) return;
      const tokenData = localStorage.getItem("token");

      try {
        const res = await axiosGet(`list-members/${id}`, `Bearer ${tokenData}`);
        setListMemberData(res.data || []);

        setFormData((prevFormData) => ({
          ...prevFormData,
          team_id: id,
          member_id: res.data ? res.data.map((member) => member.id) : []
        }));
      } catch (error) {
        toast.error("Failed to load data.");
      }
    };

    fetchListMemberData();
  }, [id]);

  const handleCheckboxChange = (memberId) => {
    setFormData((prevFormData) => {
      const isChecked = prevFormData.member_id.includes(memberId);
      const updatedMemberIds = isChecked
        ? prevFormData.member_id.filter((id) => id !== memberId)
        : [...prevFormData.member_id, memberId];
      return { ...prevFormData, member_id: updatedMemberIds };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenData = localStorage.getItem("token");

    try {
      const response = await PostData(`invite-team`, formData, "", `Bearer ${tokenData}`);
      if (response.message) {
        toast.success(response.message);
        router.push("/dashboard/team");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="user_dashboard.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Invite Member
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Invite Member</h4>
          <Link href={`/dashboard/team`} className="btn-back">
            <i className="fal fa-angle-double-left" />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Id</th>
                  <th>Role</th>
                </tr>
                {members.length > 0 ? (
                  members.map((member) => (
                    <tr key={member.id}>
                      <td>
                        <div className="tb-form-check">
                          <input
                            type="checkbox"
                            name="member_id[]"
                            id={`checkbox-${member.id}`}
                            checked={formData.member_id.includes(member.id)}
                            onChange={() => handleCheckboxChange(member.id)}
                          />
                          <label htmlFor={`checkbox-${member.id}`}></label>
                        </div>
                      </td>
                      <td>{member.name}</td>
                      <td>{member.phone_number}</td>
                      <td>{member.email_id}</td>
                      <td>{member.role}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No members found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="table-btn">
            <button type="submit" className="btn-event">
              Invite Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamAdd;
