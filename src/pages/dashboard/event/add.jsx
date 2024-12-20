import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const router = useRouter();
  const [event, setEvent] = useState({
    title: "",
    slug: "",
    event_image: null,
    event_url: "",
    event_type: "",
    event_date: "",
    event_time: "",
    is_active: "",
    description: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);

  // Set loading to false when the component is mounted
  useEffect(() => {
    setLoading(false);
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const tokenData = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (tokenData && userId) {
      try {
        const data = {
          title: event.title,
          slug: event.slug,
          event_image: event.event_image,
          event_url: event.event_url,
          event_type: event.event_type,
          event_date: event.event_date,
          event_time: event.event_time,
          is_active: event.is_active,
          description: event.description,
          address: event.address,
          token: userId,
        };

        // Verify token
        const res = await PostData(`event-add`, data, "", `Bearer ${tokenData}`);
        if (res) {
          toast.success(res.message);
          router.push("/dashboard/event");
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error("An error occurred while updating the event.");
      }
    } else {
      toast.error("No token found.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEvent({
      ...event,
      [name]: files ? files[0] : value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/dashboard">Dashboard</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Event</li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Add Event</h4>
          <Link href="/dashboard/event" className="btn-back">
            <i className="fal fa-angle-double-left" />
          </Link>
        </div>
        <div className="event-form">
          <form onSubmit={handleAdd}>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Event Title <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={event.title}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Slug Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={event.slug}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Event Banner <span>*</span>
                  </label>
                  <div className="file-upload">
                    <div className="file-select">
                      <div className="file-select-button">Choose File</div>
                      <input
                        type="file"
                        name="event_image"
                        onChange={handleChange}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Video URL <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="event_url"
                    value={event.event_url}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Event Type <span>*</span>
                  </label>
                  <select
                    name="event_type"
                    value={event.event_type}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="0">Virtual</option>
                    <option value="1">Hybrid</option>
                    <option value="2">Physical</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Event Date <span>*</span>
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    value={event.event_date}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    Event Time <span>*</span>
                  </label>
                  <input
                    type="time"
                    name="event_time"
                    value={event.event_time}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="form-group">
                  <label>
                    Status <span>*</span>
                  </label>
                  <select
                    name="is_active"
                    value={event.is_active}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="0">Publish</option>
                    <option value="1">Unpublish</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    Event Description <span>*</span>
                  </label>
                  <textarea
                    name="description"
                    value={event.description}
                    onChange={handleChange}
                    className="form-control"
                    rows={4}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    Event Address <span>*</span>
                  </label>
                  <textarea
                    name="address"
                    value={event.address}
                    onChange={handleChange}
                    className="form-control"
                    rows={4}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 text-end">
                <button type="submit" className="btn-event">
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;



