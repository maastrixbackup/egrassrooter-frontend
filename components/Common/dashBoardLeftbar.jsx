import Link from "next/link";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const dashBoardLeftbar = () => {
  return (
    <div className="sidebar_sec_lft">
      <div className="sidebar_sec_lft_usr">
        <a href="#">
          <span>
            <img src="/images/secd-logo.png" alt="SECD Logo" />
          </span>
        </a>
        <a href="#">
          <p>
            <img
              src="/images/professional-mens-hairstyles-combed-min.jpg"
              alt="Profile"
            />
          </p>
        </a>
      </div>
      <div className="sidebar_sec_lft_para">
        <p>Welcome, OsitaForSenate</p>
      </div>
      <div className="sidebar_sec_lft_menu">
        <Sidebar>
          <Menu>
            <MenuItem component={<Link href="/dashboard" />}>
              <i className="fa fa-fw fa-dashboard"></i> Dashboard
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-chart-pie"></i> Senate Analysis
            </MenuItem>
            <SubMenu
              label={
                <span>
                  <i className="fas fa-tasks"></i> Plan
                </span>
              }
            >
              <MenuItem>
                <i className="fa-solid fa-location-dot"></i> Map
              </MenuItem>
              <MenuItem>
                <i className="fa-solid fa-building"></i> Organise
              </MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <span>
                  <i className="fa-solid fa-chart-simple"></i> Feedback
                </span>
              }
            >
              {/* Give Feedback Menu Item */}
              <MenuItem>
                <Link href="/dashboard/analytics">
                  <span>
                    <i className="fa-solid fa-line-chart"></i> Give Feedback
                  </span>
                </Link>
              </MenuItem>

              {/* Feedback List Menu Item */}
              <MenuItem>
                <Link href="/dashboard/feedback-list">
                  <span>
                    <i className="fa-solid fa-list"></i> Feedback List
                  </span>
                </Link>
              </MenuItem>

              {/* Analysis Menu with SubMenu */}
              <SubMenu
                label={
                  <span>
                    <i className="fa-solid fa-balance-scale"></i> Analysis
                  </span>
                }
              >
                {/* First Menu under Analysis */}
                <MenuItem>
                  <Link href="/dashboard/analysis/detailed">
                    <span>
                      <i className="fa-solid fa-chart-bar"></i> Canvassing
                    </span>
                  </Link>
                </MenuItem>

                {/* Second Menu under Analysis */}
                <MenuItem>
                  <Link href="/dashboard/analysis/summary">
                    <span>
                      <i className="fa-solid fa-chart-pie"></i> Election
                    </span>
                  </Link>
                </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              label={
                <span>
                  <i className="fa-solid fa-chart-simple"></i> Organize
                </span>
              }
            >
              {/* Give Feedback Menu Item */}
              <MenuItem>
                <Link href="/dashboard/analytics">
                  <span>
                    <i className="fa-solid fa-line-chart"></i> Role
                  </span>
                </Link>
              </MenuItem>
              <SubMenu
                label={
                  <span>
                    <i className="fa-solid fa-balance-scale"></i> Survey
                  </span>
                }
              >
                <MenuItem>
                  <Link href="/dashboard/surveylist">
                   Surveys
                   
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/dashboard/surveylist/addsurvey">
                    New Surveys
                  
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/dashboard/feedback-list">
                   Surveys Response
                   
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu
                label={
                  <span>
                    <i className="fa-solid fa-balance-scale"></i> Team
                    Management
                  </span>
                }
              >
                {/* First Menu under Analysis */}
                <MenuItem>
                  <Link href="/dashboard/team">
                    <span>
                      <i className="fa-solid fa-chart-bar"></i> Teams
                    </span>
                  </Link>
                </MenuItem>

                {/* Second Menu under Analysis */}
                <MenuItem>
                  <Link href="/dashboard/team/newteam">
                    <span>
                      <i className="fa-solid fa-chart-pie"></i> New Teams
                    </span>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/dashboard/team/listmember">
                    <span>
                      <i className="fa-solid fa-chart-pie"></i> Member List
                    </span>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/dashboard/team/addmember">
                    <span>
                      <i className="fa-solid fa-chart-pie"></i> New Member
                    </span>
                  </Link>
                </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              label={
                <span>
                  <i className="fa-solid fa-handshake"></i> Engagement
                </span>
              }
            >
              <SubMenu
                label={
                  <span>
                    <i className="fa-solid fa-handshake"></i> Social Media
                  </span>
                }
              >
                <MenuItem>
                  <i className="fa-solid fa-envelope"></i> Facebook
                </MenuItem>
                <MenuItem>
                  <i className="fa-solid fa-envelope"></i> Twitter
                </MenuItem>
                <MenuItem>
                  <i className="fa-solid fa-envelope"></i> Whatsapp
                </MenuItem>
              </SubMenu>
              <MenuItem>
                <Link href="/dashboard/bulkemail"> Email & Messaging</Link>
                
              </MenuItem>
              <MenuItem>
              <Link href="/dashboard/pollingagent"> Polling Agents</Link>
              </MenuItem>
              <MenuItem>
              <Link href="/dashboard/election-campaign">  Election Campaign</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <span>
                  <i className="fa-solid fa-handshake"></i> Website
                </span>
              }
            >
              <MenuItem>
                <i className="fa-solid fa-envelope"></i> Manage Event
              </MenuItem>
              <MenuItem>
                <i className="fa-solid fa-envelope"></i> Manage Blog
              </MenuItem>
            </SubMenu>
            <MenuItem>
              <i className="fa-solid fa-house"></i> Home
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-user"></i> My Profile
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-gear"></i> Settings
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-circle-info"></i> Help
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-right-from-bracket"></i> Sign Out
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default dashBoardLeftbar;
