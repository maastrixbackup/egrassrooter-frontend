import React from "react";

const AboutSlogan = ({ aboutslog }) => {
  return (
    <section className="story-sec">
      <div className="video-two__overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="story-box">
              <div className="story-sort-title">{aboutslog.slogan_heading}</div>
              <h1>{aboutslog.slogan_title}</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-bx">
              <a id="play-video" className="video-play-button" href="#">
                <span class="fa-solid fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlogan;
