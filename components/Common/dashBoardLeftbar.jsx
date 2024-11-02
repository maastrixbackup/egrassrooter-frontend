import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { axiosGet, PostData } from "../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = dynamic(() => import("react-pro-sidebar").then(mod => mod.Sidebar), { ssr: false });

const DashboardLeftbar = () => {

    const router = useRouter();

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            if (typeof window !== "undefined") {
                const tokenData = localStorage.getItem("token");
                const res = await axiosGet("getprofile", `Bearer ${tokenData}`);
                if (res.profile_data) {
                    setProfile(res.profile_data || {});
                } else {
                    toast.error("Failed to fetch profile data.");
                }
            }
        };
        fetchProfile();
    }, [router]);

    const handleSignOut = () => {
        localStorage.clear();
        signOut();
    };

    const isActive = (path) => {
        if (path === '/') {
            return router.pathname === path;
        }
        return router.pathname === path || router.pathname.startsWith(path);
    };

    // Utility function to render menu items with active class
    const renderMenuItem = (href, label, icon) => (
        <MenuItem
            icon={icon}
            className={isActive(href) ? 'active' : ''}
        >
            <Link href={href}>{label}</Link>
        </MenuItem>
    );

    return (
        <div className="sidebar_sec_lft">
            <div className="sidebar_sec_lft_usr">
                <p>
                    <Image src={profile.candidate_image || "/images/secd-logo.png"} alt="Candidate" width={500} height={500} />
                </p>
                <Link href="/dashboard/profile">
                    <p>
                        <Image src={profile.profile_photo || "/images/logo-pic.jpg"} alt="Profile" width={500} height={500} />
                    </p>
                </Link>
            </div>
            <div className="sidebar_sec_lft_para">
                <p>Welcome, {profile.profile_name || "OsitaForSenate"}</p>
            </div>
            <div className="sidebar_sec_lft_menu">
                <Sidebar>
                    <Menu>
                        <MenuItem icon={<i className="fa fa-fw fa-dashboard"></i>} className={router.pathname === '/dashboard' ? 'active' : ''}><Link href="/dashboard">Dashboard</Link></MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-chart-pie"></i>} className={router.pathname === '/dashboard/analysis' ? 'active' : ''}><Link href="/dashboard/analysis">Senate Analysis</Link></MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-building"></i>} className={router.pathname === '/dashboard/plan' ? 'active' : ''}><Link href="/dashboard/plan">Plan</Link></MenuItem>
                        <SubMenu label={<span><i className="fa-solid fa-chart-simple"></i> Feedback </span>}>
                            {/* {renderMenuItem("/dashboard/analytics", "Give Feedback", null)} */}
                            {renderMenuItem("/dashboard/feedback", "Feedback List", null)}
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Analysis </span>}>
                                {renderMenuItem("/dashboard/analysis/detailed", "Canvassing", null)}
                                {renderMenuItem("/dashboard/electionresult", "Election", null)}
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-chart-simple"></i> Organize </span>}>
                            {renderMenuItem("/dashboard/role", "Role", <i className="fa-solid fa-user-circle"></i>)}
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Survey </span>}>
                                {renderMenuItem("/dashboard/surveylist", "Surveys", null)}
                                {renderMenuItem("/dashboard/surveylist/addsurvey", "New Surveys", null)}
                                {/* {renderMenuItem("/dashboard/feedback-list", "Surveys Response", null)} */}
                            </SubMenu>
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Team Management </span>}>
                                {renderMenuItem("/dashboard/team", "Teams", null)}
                                {renderMenuItem("/dashboard/team/newteam", "New Teams", null)}
                                {renderMenuItem("/dashboard/member", "Member List", null)}
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-handshake"></i> Engagement </span>}>
                            <SubMenu label={<span><i className="fa-solid fa-handshake"></i> Social Media </span>}>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Facebook</MenuItem>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Twitter</MenuItem>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Whatsapp</MenuItem>
                            </SubMenu>
                            {renderMenuItem("/dashboard/bulkemail", "Email & Messaging", null)}
                            {renderMenuItem("/dashboard/pollingagent", "Polling Agents", null)}
                            {renderMenuItem("/dashboard/election_campaign", "Election Campaign", null)}
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-handshake"></i> Website </span>}>
                            {renderMenuItem("/dashboard/event", "Manage Event", <i className="fa-solid fa-envelope"></i>)}
                            {renderMenuItem("/dashboard/blog", "Manage Blog", <i className="fa-solid fa-envelope"></i>)}
                        </SubMenu>
                        <MenuItem icon={<i className="fa-solid fa-house"></i>} className={router.pathname === '/' ? 'active' : ''}><Link href="/">Home</Link></MenuItem>
                        {renderMenuItem("/dashboard/profile", "My Profile", <i className="fa-solid fa-user"></i>)}
                        <MenuItem
                            icon={<i className="fa-solid fa-right-from-bracket"></i>}
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
};

export default DashboardLeftbar;
