import Link from "next/link";
import React, { useEffect, useState } from "react";
import { axiosGet } from "../../../../utils/ApiCalls";

const Index = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchBlogs = async () => {
      try {
        const response = await axiosGet("blogs", `Bearer ${token}`);
        setBlogList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/user_dashboard">Dashboard</Link>
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
                href="/dashboard/bloglist/category"
                className="btn-prev"
                style={{
                  backgroundColor: "#1b7339",
                  borderColor: "#1b7339",
                  textTransform: "capitalize",
                }}
              >
                Category
              </Link>

              <Link href="#" className="btn-event">
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
                  <th>Created</th>
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
                        {blog.blog_image ? (
                          <img
                            src={blog.blog_image}
                            alt={blog.title}
                            width="100"
                          />
                        ) : (
                          <span>No image available</span>
                        )}
                      </td>
                      <td>{blog.is_active}</td>
                      <td>{new Date(blog.created).toLocaleString()}</td>
                      <td>
                        <div className="btn-flex">
                          <a href="#" className="btn-share">
                            <i className="fa-regular fa-pen-to-square" />
                          </a>
                          <a href="#" className="btn-danger">
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
    </>
  );
};

export default Index;
