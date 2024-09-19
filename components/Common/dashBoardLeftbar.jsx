import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { signOut } from 'next-auth/react';  // Import signOut from NextAuth
import { useRouter } from 'next/router'; // Import useRouter

// Dynamically import Sidebar to only render it on the client
const Sidebar = dynamic(() => import("react-pro-sidebar").then(mod => mod.Sidebar), { ssr: false });

const DashboardLeftbar = () => {
    
    const router = useRouter(); // Initialize router
    
    const handleSignOut = () => {
        localStorage.clear();
        signOut();
    };

    const isActive = (path) => {
        return router.pathname === path || router.pathname.startsWith(path);
    };

    return (
        <div className="sidebar_sec_lft">
            <div className="sidebar_sec_lft_usr">
                <Link href="#">
                    <span>
                        <img src="/images/secd-logo.png" alt="SECD Logo" />
                    </span>
                </Link>
                <Link href="#">
                    <p>
                        <img src="/images/professional-mens-hairstyles-combed-min.jpg" alt="Profile" />
                    </p>
                </Link>
            </div>
            <div className="sidebar_sec_lft_para">
                <p>Welcome, OsitaForSenate</p>
            </div>
            <div className="sidebar_sec_lft_menu">
                <Sidebar>
                    <Menu>
                        <MenuItem 
                            icon={<i className="fa fa-fw fa-dashboard"></i>}
                            className={isActive('/dashboard') ? 'active' : ''}
                        >
                            <Link href="/dashboard">Dashboard</Link>
                        </MenuItem>
                        <MenuItem 
                            icon={<i className="fa-solid fa-chart-pie"></i>}
                            className={isActive('/senate-analysis') ? 'active' : ''}
                        >
                            Senate Analysis
                        </MenuItem>
                        <SubMenu label={<span><i className="fas fa-tasks"></i> Plan </span>}>
                            <MenuItem 
                                icon={<i className="fa-solid fa-location-dot"></i>}
                                className={isActive('/map') ? 'active' : ''}
                            >
                                Map
                            </MenuItem>
                            <MenuItem 
                                icon={<i className="fa-solid fa-building"></i>}
                                className={isActive('/organise') ? 'active' : ''}
                            >
                                Organise
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-chart-simple"></i> Feedback </span>}>
                            <MenuItem 
                                className={isActive('/dashboard/analytics') ? 'active' : ''}
                            >
                                <Link href="/dashboard/analytics">Give Feedback</Link>
                            </MenuItem>
                            <MenuItem 
                                className={isActive('/dashboard/feedback-list') ? 'active' : ''}
                            >
                                <Link href="/dashboard/feedback-list">Feedback List</Link>
                            </MenuItem>
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Analysis </span>}>
                                <MenuItem 
                                    className={isActive('/dashboard/analysis/detailed') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/analysis/detailed">Canvassing</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/analysis/summary') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/analysis/summary">Election</Link>
                                </MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-chart-simple"></i> Organize </span>}>
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Survey </span> }>
                                <MenuItem 
                                    className={isActive('/dashboard/surveylist') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/surveylist">Surveys</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/surveylist/addsurvey') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/surveylist/addsurvey">New Surveys</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/feedback-list') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/feedback-list">Surveys Response</Link>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu label={<span><i className="fa-solid fa-balance-scale"></i> Team Management </span>}>
                                <MenuItem 
                                    className={isActive('/dashboard/team') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/team">Teams</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/team/newteam') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/team/newteam">New Teams</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/member') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/member">Member List</Link>
                                </MenuItem>
                                <MenuItem 
                                    className={isActive('/dashboard/team/addmember') ? 'active' : ''}
                                >
                                    <Link href="/dashboard/team/addmember">New Member</Link>
                                </MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label={<span><i className="fa-solid fa-handshake"></i> Engagement </span>}>
                            <SubMenu label={<span><i className="fa-solid fa-handshake"></i> Social Media </span>}>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Facebook</MenuItem>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Twitter</MenuItem>
                                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Whatsapp</MenuItem>
                            </SubMenu>
                            <MenuItem 
                                className={isActive('/dashboard/bulkemail') ? 'active' : ''}
                            >
                                <Link href="/dashboard/bulkemail">Email & Messaging</Link>
                            </MenuItem>
                            <MenuItem 
                                className={isActive('/dashboard/pollingagent') ? 'active' : ''}
                            >
                                <Link href="/dashboard/pollingagent">Polling Agents</Link>
                            </MenuItem>
                            <MenuItem 
                                className={isActive('/dashboard/election-campaign') ? 'active' : ''}
                            >
                                <Link href="/dashboard/election-campaign">Election Campaign</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label={<span> <i className="fa-solid fa-handshake"></i> Website </span>}>
                            <MenuItem 
                                icon={<i className="fa-solid fa-envelope"></i>}
                                className={isActive('/dashboard/event') ? 'active' : ''}
                            >
                                <Link href="/dashboard/event">Manage Event</Link>
                            </MenuItem>
                            <MenuItem icon={<i className="fa-solid fa-envelope"></i>}>Manage Blog</MenuItem>
                        </SubMenu>
                        <MenuItem 
                            icon={<i className="fa-solid fa-house"></i>}
                            className={isActive('/') ? 'active' : ''}
                        >
                            <Link href="/">Home</Link>
                        </MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-user"></i>}>My Profile</MenuItem>
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
