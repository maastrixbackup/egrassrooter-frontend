import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <div className="eg-run-ofc">
              <h4>Recent News</h4>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="blog-big">
              <div className="blog-date">
                <span>15 JAN</span>
              </div>
              <Image src="/images/blog_big.jpg" alt="Contact" width={500} height={500} />
              <div className="blog-big-cont">
                <div className="blog-sort-title">
                  <span>Consulting</span>
                </div>
                <h4>The Human Rights and Democracy Programme</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt, suscipit id.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-right-bx">
              <Image src="/images/blog2.jpg" alt="Contact" width={500} height={500} />
              <div className="blog-date">
                <span>15 JAN</span>
              </div>
              <div className="blog-rt-cont">
                <div className="blog-sort-title">
                  <span>Consulting</span>
                </div>
                <h4>The Human Rights and Democracy Programme</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt, suscipit id.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-right-bx">
              <Image src="/images/blog2.jpg" alt="Contact" width={500} height={500} />
              <div className="blog-date">
                <span>15 JAN</span>
              </div>
              <div className="blog-rt-cont">
                <div className="blog-sort-title">
                  <span>Consulting</span>
                </div>
                <h4>The Human Rights and Democracy Programme</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt, suscipit id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
