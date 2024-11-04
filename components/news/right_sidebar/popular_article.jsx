import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopularArticle = ({ populararticles }) => {
  return (
    <>
      <div className="voter-list-bx">
        <div className="section-title mt-4">
          <h4>Popular Articles</h4>
        </div>
        <div className="populr-bx">
          {populararticles?.map((poparticle, i) => (
            <div key={i} className="d-flex align-items-center mb-3">
              <Link href="#">
                <a className="me-3">
                  <Image
                    className="img-fluid rounded"
                    src={poparticle.image}
                    alt="news"
                    width={70}
                    height={70}
                  />
                </a>
              </Link>
              <div>
                <h4 className="h6 mb-1">
                  <Link href="#">
                    <a className="text-dark fw-bold">
                      {poparticle.title}
                    </a>
                  </Link>
                </h4>
                <time dateTime={poparticle.date} className="text-muted small">
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
