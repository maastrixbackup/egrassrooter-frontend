import React from 'react'
import InnerBanner from '../../../components/Common/inner_banner'
import AboutWhoWeAre from '../../../components/about/about_who_we_are'
import AboutSlogan from '../../../components/about/about_slogan'
import { axiosGet } from "../../../utils/ApiCalls";


const Index = ({ data }) => {  
  const intitle = data?.about_us?.page_name || 'About Us';
  const inimage = {
    backgroundImage: `url(${data?.about_us?.banner_image})`,
  };
  return (
    <div>
      <InnerBanner intitle={intitle} inimage={inimage} />
      <AboutWhoWeAre aboutmain={data.about_us}/>
      <AboutSlogan aboutslog={data.about_us}/>
    </div>
  )
}

export default Index

export async function getServerSideProps() {
  try {
    const data = await axiosGet("get-aboutdata");
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
