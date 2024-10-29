import React, { useEffect, useState } from "react";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchBlogs = async () => {
      try {
        const response = await axiosGet("blogs", `Bearer ${token}`);
        if (response.data) {
          setBlogList(response.data);
        } else {
          toast.error("Failed to fetch blog data.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("An error occurred while fetching blogs.");
      }
    };

    fetchBlogs();
  }, []);

  const handleToggleStatus = async (blogId, currentStatus) => {
    const tokenData = localStorage.getItem("token");
    const newStatus = currentStatus === 0 ? 1 : 0;

    try {
      const data = { id: blogId, is_active: newStatus };
      const response = await PostData("blogs-status", data, "", `Bearer ${tokenData}`);
      if (response.success) {
        toast.success(response.message);
        setBlogList((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog.id === blogId ? { ...blog, is_active: newStatus } : blog
          )
        );
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error updating blog status:", error);
      toast.error("An error occurred while updating the blog status.");
    }
  };

  const handleDelete = async (blogId) => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const data = { id: blogId };
        const response = await PostData("blogs-delete", data, "", `Bearer ${tokenData}`);
        if (response.success) {
          toast.success(response.message);
          setBlogList((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
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

  return (
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      <div className="table-bx-main">
        <div className="table-title">
          <h4>Blog List</h4>
          <div className="d-flex">
            <Link
              href="/dashboard/blog/category"
              className="btn-prev"
              style={{
                backgroundColor: "#1b7339",
                borderColor: "#1b7339",
                textTransform: "capitalize",
              }}
            >
              Category
            </Link>
            <Link href="/dashboard/blog/addblog" className="btn-event">
              Add New Blog
            </Link>
          </div>
        </div>

        <div className="table-bx">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Sl No#</th>
                <th>Category</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogList.length > 0 ? (
                blogList.map((blog, index) => (
                  <tr key={blog.id}>
                    <td>{index + 1}</td>
                    <td>{blog.category}</td>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
                    <td>
                      <div className="ev-img">
                        <Image src={ blog.blog_image} alt="Event Banner" width={100} height={100} />
                      </div>
                    </td>
                    <td>
                      <button
                        className={`btn-toggle-status ${blog.is_active === 1 ? "button-publish" : "button-not-publish"}`}
                        onClick={() => handleToggleStatus(blog.id, blog.is_active)}
                      >
                        {blog.is_active === 1 ? "Publish" : "Unpublish"}
                      </button>
                    </td>
                    <td>
                      <div className="btn-flex">
                        <Link href={`/dashboard/blog/${blog.id}`} className="btn-share">
                          <i className="fa-regular fa-pen-to-square" />
                        </Link>
                        <a href="#" className="btn-danger" onClick={(e) => {
                          e.preventDefault();
                          if (window.confirm("Are you sure you want to delete this event?")) {
                            handleDelete(blog.id);
                          }
                        }}>
                          <i className="fa-solid fa-xmark" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No blogs available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
