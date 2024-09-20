import React from "react";

const PopularArticle = ({populararticles}) => {
  return (
    <>
      <div className="voter-list-bx">
        <div className="section-title mt-4">
          <h4>Popular Articles</h4>
        </div>
        <div className="populr-bx">
        {populararticles?.map((poparticle, i) => (
          <div className="d-flex align-items-center mb-3">
            <a href="#" className="me-3">
              <img
                className="img-fluid rounded"
                src={poparticle.image}
                alt
              />
            </a>
            <div>
              <h4 className="h6 mb-1">
                <a href="#" className="text-dark fw-bold">
                  {poparticle.title}
                </a>
              </h4>
              <time dateTime="2023-10-21" className="text-muted small">
                {poparticle.date}
              </time>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default PopularArticle;
