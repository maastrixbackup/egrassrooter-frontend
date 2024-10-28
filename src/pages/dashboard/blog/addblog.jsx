import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState({
    user_id: "",
    title: "",
    slug: "",
    blog_image: "",
    cat_id: "",
    is_active: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [tokenData, setTokenData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setLoading(false);
    setTokenData(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchCategorys = async () => {
      try {
        const response = await axiosGet("blogs-category", `Bearer ${token}`);
        if (response.blog_category) {
          setCategoryList(response.blog_category);
        } else {
          toast.error("Failed to fetch blog data.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("An error occurred while fetching blogs.");
      }
    };

    fetchCategorys();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (tokenData && userId) {
      try {
        const data = {
          user_id: userId,
          title: blog.title,
          slug: blog.slug,
          blog_image: blog.blog_image,
          cat_id: blog.cat_id,
          is_active: blog.is_active,
          description: blog.description,
        };

        const res = await PostData(`blogs-add`, data, "", `Bearer ${tokenData}`);
        if (res.data) {
          toast.success(res.message);
          router.push("/dashboard/blog");
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error("An error occurred while adding the blog.");
      }
    } else {
      toast.error("No token found.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBlog({
      ...blog,
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
          <li className="breadcrumb-item">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Blog
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Add Blog</h4>
          <a href="#" className="btn-back">
            <i className="fal fa-angle-double-left" />
          </a>
        </div>
        <div className="event-form">
          <div className="row">
            <div className="col-lg-6">
              <div className="survey-img">
                <Image src="/images/survey2.jpg" alt="Survey image description" width={500} height={300} />
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleAdd}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Category <span>*</span> <i className="fa-solid fa-circle-info" /> </label>
                      <select className="form-select" name="cat_id" onChange={handleChange} required>
                        <option>Select Category</option>
                        {categoryList.length > 0 ? (
                          categoryList.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.category_name}
                            </option>
                          ))
                        ) : null}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Title <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input type="text" name="title" onChange={handleChange} className="form-control" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Slug Name <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <input type="text" name="slug" onChange={handleChange} className="form-control" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Image <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <div className="file-upload">
                        <div className="file-select">
                          <div className="file-select-button">Choose File</div>
                          <input type="file" name="blog_image" onChange={handleChange} accept="image/*" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Status <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <select className="form-select" name="is_active" onChange={handleChange} required>
                        <option>Select Status</option>
                        <option value="0">Publish</option>
                        <option value="1">Unpublish</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Description <span>*</span>
                        <i className="fa-solid fa-circle-info" />
                      </label>
                      <textarea name="description" className="form-control" onChange={handleChange} rows={4} required />
                    </div>
                  </div>
                  <div className="col-lg-12 text-end">
                    <button type="submit" className="btn-event">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
