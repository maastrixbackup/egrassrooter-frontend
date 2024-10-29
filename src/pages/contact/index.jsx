import React from 'react'
import InnerBanner from '../../../components/Common/inner_banner'
import ContactAddress from '../../../components/contact/contact_address';
import ContactForm from '../../../components/contact/contact_form';
import { axiosGet } from "../../../utils/ApiCalls";


const Index = ({ data }) => {
    const intitle = data?.data?.page_name || 'Contact Us';
    const inimage = {
        backgroundImage: `url(${data?.data?.banner_image})`,
    };
  return (
    <div>
      <InnerBanner intitle={intitle} inimage={inimage} />
      <ContactAddress contactmain={data.data}/>
      <ContactForm />
    </div>
  )
}

export default Index

export async function getServerSideProps() {
  try {
    const data = await axiosGet("contact-us");
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
