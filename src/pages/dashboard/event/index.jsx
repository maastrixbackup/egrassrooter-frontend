import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [events, setEvents] = useState([]);
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
            const res = await axiosGet("event", `Bearer ${tokenData}`);
            setEvents(res.data || []);
            setLoading(false);
          } else {
            toast.error("Token verification failed. Please login again.");
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            signOut();
          }
        } catch (error) {
          toast.error("An error occurred. Please login again.");
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          signOut();
        }
      } else {
        toast.error("No token or user ID found. Please login.");
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        signOut();
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (eventId) => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const data = { id: eventId };
        const response = await PostData("event-delete", data, "", `Bearer ${tokenData}`);
        if (response.success) {
          toast.success(response.message);
          setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
        } else {
          toast.error(response.message || "An error occurred while deleting the event.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the event.");
      }
    } else {
      toast.error("No token found. Please login.");
    }
  };

  const handleToggleStatus = async (eventId, currentStatus) => {
    const tokenData = localStorage.getItem("token");
    const newStatus = currentStatus === 0 ? 1 : 0;

    try {
      const data = { id: eventId, is_active: newStatus };
      const response = await PostData("event-status", data, "", `Bearer ${tokenData}`);
      if (response.success) {
        toast.success(response.message);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === eventId ? { ...event, is_active: newStatus } : event
          )
        );
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error updating event status:", error);
      toast.error("An error occurred while updating the event status.");
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
            Event
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Event List</h4>
          <Link href="/dashboard/event/add" className="btn-event">
            Add New Event
          </Link>
        </div>
        <div className="table-bx">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Sl No#</th>
                <th>Event Title</th>
                <th>Event Description</th>
                <th>Event Banner</th>
                <th>Status</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Event Address</th>
                <th>Actions</th>
              </tr>
              {events.map((event, index) => (
                <tr key={event.id || index}>
                  <td>{index + 1}</td>
                  <td>{event.title}</td>
                  <td>{event.description}</td>
                  <td>
                    <div className="ev-img">
                      <Image src={event.event_image} alt="Event Banner" width={100} height={100} />
                    </div>
                  </td>
                  <td>
                    <button className={`btn-toggle-status ${event.is_active === 0 ? "button-publish" : "button-not-publish"}`} onClick={() => handleToggleStatus(event.id, event.is_active)} >
                      {event.is_active === 0 ? "Publish" : "Unpublish"}
                    </button>
                  </td>
                  <td>{event.event_date}</td>
                  <td>{event.event_time}</td>
                  <td>{event.address}</td>
                  <td>
                    <div className="btn-flex">
                      <Link href={`/dashboard/event/${event.id}`} className="btn-share">
                        <i className="fa-regular fa-pen-to-square" />
                      </Link>
                      <a
                        href="#"
                        className="btn-danger"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          if (window.confirm("Are you sure you want to delete this event?")) {
                            handleDelete(event.id);
                          }
                        }}
                      >
                        <i className="fa-solid fa-xmark" />
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
  );
};

export default Index;
