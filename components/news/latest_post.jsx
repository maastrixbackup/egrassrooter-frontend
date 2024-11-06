import Link from "next/link";
import React from "react";

const LatestPost = ({ latestPosts }) => {
  return (
    <div className="lts-nws mt-4">
      <div className="section-title">
        <h4>Latest Posts</h4>
      </div>
      <div className="row">
        {latestPosts?.map((latestpost, i) => (
          <div key={i} className="col-lg-6">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-12">
                  <img
                    src={latestpost.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-12">
                  <div className="card-body">
                    <a href="#" className="text-danger text-uppercase fw-bold">
                      {latestpost.news_category}
                    </a>
                    <h5 className="card-title fw-bold">
                      <Link href={`/news/${latestpost.slug}`}>{latestpost.news_title}</Link>
                    </h5>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="far color-nvyblue fa-calendar-alt" />
                        {latestpost.date}
                      </li>
                      <li className="list-inline-item">
                        <i className="fas color-nvyblue fa-user" /> {latestpost.created_by}
                      </li>
                    </ul>
                    
                    <div
                  dangerouslySetInnerHTML={{
                    __html: latestpost.news_description,
                  }}
                />
                    <div className="d-flex justify-content-end">
                      <Link className="btn-read-more" href={`/news/${latestpost.slug}`}>Read More <i class="fa-solid fa-angles-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center custom-pagination">
          {/* Previous Arrow */}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <i className="fas fa-chevron-left" />
            </a>
          </li>
          {/* Page Numbers */}
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              7
            </a>
          </li>
          {/* Dots */}
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>
              ...
            </a>
          </li>
          {/* Next Arrow */}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <i className="fas fa-chevron-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LatestPost;
