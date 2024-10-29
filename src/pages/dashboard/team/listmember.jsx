import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { axiosGet } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";

const ListMember = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listMemberData, setListMemberData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListMemberData = async () => {
      if (!id) return;
      const tokenData = localStorage.getItem("token");

      try {
        const res = await axiosGet(`list-members/${id}`, `Bearer ${tokenData}`);
        setListMemberData(res.data || []);
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchListMemberData();
  }, [id]);

  return (
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
          <Link href={`/dashboard/team/inviteteam?id=${id}`} className="btn-back">  
            <i className="fa-solid fa-plus" />
          </Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sl No#</th>
                  <th>Role Type</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Id</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {listMemberData.length > 0 ? (
                  listMemberData.map((member, index) => (
                    <tr key={member.id}>
                      <td>{index + 1}</td>
                      <td>{member.role}</td>
                      <td>{member.name}</td>
                      <td>{member.phone_number}</td>
                      <td>{member.email_id}</td>
                      <td>{member.address}</td>
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
        )}
      </div>
    </div>
  );
};

export default ListMember;
