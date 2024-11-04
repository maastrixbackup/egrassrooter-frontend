import React, { useState, useEffect } from "react";
import Image from "next/image";
import { axiosGet, PostData } from "../../utils/ApiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const DashBoardTopBar = ({ data }) => {
  const [profile, setProfile] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      if (typeof window !== "undefined") {
        const tokenData = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (tokenData && userId) {
          const userdata = { token: userId };
          try {
            const verifyTokenResponse = await PostData("verify-token", userdata, "", `Bearer ${tokenData}`);
            if (verifyTokenResponse.status === 200) {
              const res = await axiosGet("getprofile", `Bearer ${tokenData}`);
              if (res.profile_data) {
                setProfile(res.profile_data || {});
              } else {
                toast.error("Failed to fetch profile data.");
              }
            } else {
              toast.error("Token verification failed. Please login again.");
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              router.push("/login");
            }
          } catch (error) {
            toast.error("An error occurred. Please login again.");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            router.push("/login");
          }
        } else {
          toast.error("No token or user ID found. Please login.");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
        }
      }
    };

    fetchProfile();
  }, [router]);

  const upcomingElection = data;
  const electionDetails = upcomingElection && upcomingElection.election_type
    ? `${upcomingElection.states} State ${upcomingElection.election_type} on ${new Date(upcomingElection.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`
    : "No upcoming elections";

  return (
    <section className="topbar_sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="topbar_sec_fig">
              <a href="/dashboard">
                <img src="/images/logo.png" alt />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
              {/* <span><h3>Next Election: {electionDetails} </h3></span> */}
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="topbar_sec_rgt">
              <a href>
                <div className="topbar_sec_rgt_fig">
                  {/* <Image src={profile.profile_photo || "/images/logo-pic.jpg"} alt="Candidate" width={500} height={500} /> */}
                </div>
              </a>
              {/* <h3>{profile.profile_name || "Kesiena Manager"}</h3> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoardTopBar;

export async function getServerSideProps() {
  try {
    const response = await axiosGet("upcoming-elections");
    console.log("Full API response:", response);
    const data = response.data?.data || {};
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {} },
    };
  }
}
