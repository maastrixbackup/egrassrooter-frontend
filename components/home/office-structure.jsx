import React from "react";

const OfficeStructure = ({ offStructures, OffFeatures }) => {
  return (
    <section className="eg-run-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="eg-run-ofc">
              <h4>{offStructures.runforoffice_title}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: offStructures.runforoffice_desc,
                }}
              />
            </div>
          </div>
          {OffFeatures?.map((OffFeature, i) => (
            <div key={i} className="col-lg-4">
              <div className="eg-run-bx">
                <div className="eg-run-cont">
                  <div className="eg-run-icon">
                    <i class={OffFeature.icon}></i>
                  </div>
                  <h4>{OffFeature.title}</h4>
                </div>
                <p>
                 {OffFeature.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default OfficeStructure;
