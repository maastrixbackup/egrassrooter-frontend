import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSurvey = () => {
  const router = useRouter();
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [tokenData, setTokenData] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setLoading(false);
    setTokenData(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (tokenData && userId) {
      try {
        const data = {
          title: survey.title,
          slug: survey.slug,
          description: survey.description,
        };

        const res = await PostData(`survey-add`, data, "", `Bearer ${tokenData}`);
        if (res.survey) {
          toast.success(res.message);
          router.push("/dashboard/surveylist");
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
    setSurvey({
      ...survey,
      [name]: files ? files[0] : value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Survey
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Survey</h4>
            <Link href="/dashboard/surveylist" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </Link>
          </div>
          <div className="event-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="survet-img">
                  <Image src="/images/survey2.jpg" alt="Survey image description" width={500} height={300} />
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleAdd}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor>
                          Title <span>*</span>
                          <i className="fa-solid fa-circle-info" />
                        </label>
                        <input type="text" name="title" onChange={handleChange} className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor>
                          Slug <span>*</span>
                          <i className="fa-solid fa-circle-info" />
                        </label>
                        <input type="text" name="slug" onChange={handleChange} className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor>
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
    </>
  );
};

export default AddSurvey;
