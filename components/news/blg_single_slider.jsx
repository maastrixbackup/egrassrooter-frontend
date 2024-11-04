import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlgSingleSlider = ({ newsBanner }) => {
  console.log(newsBanner);
  
  return (
    <div
      id="myCarousel"
      className="carousel news-slid-wrp carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {newsBanner?.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {newsBanner?.map((newsBannerItem, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <Image
              src={newsBannerItem.image}
              className="d-block w-100"
              alt="abcd" width={500} height={500}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5><Link href={`/news/${newsBannerItem.slug}`}>{newsBannerItem.news_title}</Link></h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: newsBannerItem.news_description,
                  }}
                />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BlgSingleSlider;
