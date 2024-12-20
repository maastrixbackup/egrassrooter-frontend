import React from "react";
import Image from "next/image";

const InnerBanner = (props) => {

  return (
    <section
      className="breadcrumb__area breadcrumb__bg"
      style={ props.inimage }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcrumb__content">
              <h2 className="title">{props.intitle}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.intitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb__shape">
        <Image src="/images/breadcrumb_shape01.png" alt="abcd" width={500} height={500}  />
        <Image src="/images/breadcrumb_shape02.png" alt="abcd" width={500} height={500} className="rightToLeft" />
        <Image src="/images/breadcrumb_shape03.png" alt="abcd" width={500} height={500} />
        <Image src="/images/breadcrumb_shape04.png" alt="abcd" width={500} height={500} />
        <Image src="/images/breadcrumb_shape05.png" alt="abcd" width={500} height={500} className="alltuchtopdown" />
      </div>
    </section>
  );
};

export default InnerBanner;
