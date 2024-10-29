import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { axiosGet, PostData } from '../../../../utils/ApiCalls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTeam = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        name: '',
        task: '',
        latitude: '',
        longitude: '',
        description: '',
        address: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamData = async () => {
            if (!id || typeof window === "undefined") return;
            const tokenData = localStorage.getItem("token");
            if (!tokenData) return;

            try {
                const res = await axiosGet(`team-edit/${id}`, `Bearer ${tokenData}`);
                setFormData(res.team_data || {});
            } catch (error) {
                toast.error('Failed to load data.');
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tokenData = localStorage.getItem("token");
        if (!formData.name || !formData.task || !formData.description) {
            toast.error('Please fill all required fields!');
            return;
        }

        try {
            const response = await PostData(`team-update/${id}`, formData, "", `Bearer ${tokenData}`);
            if (response.data) {
                toast.success(response.message);
                router.push("/dashboard/team");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error('Something went wrong, please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="sidebar_sec_rgt">
            <nav aria-label="breadcrumb" className="d-flex align-items-start">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Edit Team
                    </li>
                </ol>
            </nav>
            <div className="table-bx-main">
                <div className="table-title">
                    <h4>Edit Team</h4>
                    <Link href="/dashboard/team" className="btn-back">
                        <i className="fal fa-angle-double-left" />
                    </Link>
                </div>
                <div className="event-form">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="survet-img">
                                    <Image src="/images/new-team.jpg" alt="New Team" width={500} height={300} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    {['name', 'task', 'latitude', 'longitude'].map((field, index) => (
                                        <div key={index} className="col-lg-6">
                                            <div className="form-group">
                                                <label>{`${field.charAt(0).toUpperCase() + field.slice(1)} ${field === 'description' ? '' : '*'}`}</label>
                                                <input type="text" name={field} placeholder={`Enter ${field}`} className="form-control" value={formData[field]} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    ))}
                                    {['description', 'address'].map((field, index) => (
                                        <div key={index} className="col-lg-6">
                                            <div className="form-group">
                                                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                                <textarea name={field} className="form-control" rows={4} placeholder={`Enter ${field}`} value={formData[field]} onChange={handleChange} />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12 text-end">
                                        <button type="submit" className="btn-event">Update Team</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTeam;
