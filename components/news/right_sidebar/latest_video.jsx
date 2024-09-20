import React from "react";

const LatestVideo = ({ latestvideos }) => {
  return (
    <>
      <div className="section-title mt-4">
        <h4>Latest Video</h4>
      </div>
      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {latestvideos?.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {latestvideos?.map((videoUrl, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <iframe
                src={videoUrl}
                className="w-100"
                height={295}
                frameBorder={0}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestVideo;
