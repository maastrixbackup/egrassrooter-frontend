import React from "react";
import BlogBanner from "../../../components/news/blog_banner";
import BlgSingleSlider from "../../../components/news/blg_single_slider";
import LatestPost from "../../../components/news/latest_post";
import SearchBox from "../../../components/news/right_sidebar/search_box";
import FollowUs from "../../../components/news/right_sidebar/followus";
import Category from "../../../components/news/right_sidebar/category";
import LatestVideo from "../../../components/news/right_sidebar/latest_video";
import PopularArticle from "../../../components/news/right_sidebar/popular_article";
import Advertisement from "../../../components/news/right_sidebar/advertisement";
import PopularPost from "../../../components/news/popular_post";
import { axiosGet } from "../../../utils/ApiCalls";

const Index = ({data}) => {
  return (
    <div>
      <BlogBanner />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <BlgSingleSlider newsBanner={data.allslidenews} />
                <LatestPost latestPosts={data.latestpostsdata}/>
            </div>
            <div class="col-md-4 right-wrp">
                <SearchBox />
                <FollowUs />
                <Category categorys={data.categorycountdata}/>
                <LatestVideo latestvideos={data.latestVideos}/>
                <PopularArticle populararticles={data.popularArticles}/>
                <Advertisement />
            </div>
            <PopularPost popposts={data.popularposts} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const data = await axiosGet("news");
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {} },
    };
  }
}
