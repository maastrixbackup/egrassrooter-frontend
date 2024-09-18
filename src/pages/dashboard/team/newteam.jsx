import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { PostData } from '../../../../utils/ApiCalls'; // Assuming PostData is for POST requests
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTeam = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    task: '',
    latitude: '',
    longitude: '',
    description: '',
    address: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const tokenData = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    // Validate required fields
    if (!formData.name || !formData.task || !formData.description) {
      toast.error('Please fill all required fields!');
      return;
    }

    try {
      const verifyTokenResponse = await PostData("verify-token", { token: userId }, "", `Bearer ${tokenData}`);
      if(verifyTokenResponse.status === 200) {
        const response = await PostData(`team-add`, formData, "", `Bearer ${tokenData}`);
      
        if (response.data) {
          toast.success(response.message);
          router.push("/dashboard/team");
        } else {
          toast.error(response.message);
        }
      } else {
        toast.error(verifyTokenResponse.message);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        signOut();
      }
    } catch (error) {
      toast.error('Something went wrong, please try again.');
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
              New Team
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>New Team</h4>
            <Link href="/dashboard/team" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </Link>
          </div>
          <div className="event-form">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="survet-img">
                    <Image src="/images/new-team.jpg" alt="New Team" width={500} height={300}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Team Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter team name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Task <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="task"
                          placeholder="Enter task"
                          className="form-control"
                          value={formData.task}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Latitude
                        </label>
                        <input
                          type="text"
                          name="latitude"
                          placeholder="Enter latitude"
                          className="form-control"
                          value={formData.latitude}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Longitude
                        </label>
                        <input
                          type="text"
                          name="longitude"
                          placeholder="Enter longitude"
                          className="form-control"
                          value={formData.longitude}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Description <span>*</span>
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          rows={4}
                          placeholder="Enter description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Address
                        </label>
                        <textarea
                          name="address"
                          className="form-control"
                          rows={4}
                          placeholder="Enter address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 text-end">
                      <button type="submit" className="btn-event">
                        Create Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTeam;
