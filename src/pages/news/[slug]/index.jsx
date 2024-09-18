import React from 'react'
import BlogBanner from '../../../../components/news/blog_banner';
import SingleNews from '../../../../components/news_details/single_news';
import RelatedNews from '../../../../components/news_details/related_news';
import SearchBox from '../../../../components/news/right_sidebar/search_box';
import FollowUs from '../../../../components/news/right_sidebar/followus';
import Category from '../../../../components/news/right_sidebar/category';
import LatestVideo from '../../../../components/news/right_sidebar/latest_video';
import PopularArticle from '../../../../components/news/right_sidebar/popular_article';
import Advertisement from '../../../../components/news/right_sidebar/advertisement';
import { axiosGet } from '../../../../utils/ApiCalls';


const NewsDetails = ({data}) => {
  return (
    <div>
      <BlogBanner />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <SingleNews />
                <RelatedNews />
            </div>
            <div class="col-md-4 right-wrp">
                <SearchBox />
                <FollowUs />
                <Category categorys={data.categorycountdata}/>
                <LatestVideo latestvideos={data.latestVideos}/>
                <PopularArticle populararticles={data.popularArticles}/>
                <Advertisement />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default NewsDetails

export async function getServerSideProps({params}) {
    const slug = params.slug;
  try {
    const data = await axiosGet(`news-details/${slug}`);
    return {
      props: { data },
    };
  } catch (error) {
    console.error("sinu:", error);
    return {
      props: { data: {} },
    };
  }
}
