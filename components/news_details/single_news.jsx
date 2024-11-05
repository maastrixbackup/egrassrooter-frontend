import React from "react";

const SingleNews = () => {
  return (
    <>
      
        <a href="#" className="text-danger text-uppercase fw-bold">
          Political
        </a>
        <h1 className="mb-0">
          INEC Implores CSOs To Mobilise Voters For PVC Collection Ahead of Edo
          Gov Election
        </h1>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <ul className="list-inline mt-3">
              <li className="list-inline-item">
                <i className="far color-nvyblue fa-calendar-alt" /> June 01,
                2024
              </li>
              <li className="list-inline-item">
                <i className="fas color-nvyblue fa-user" /> John Doe Aliin
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="pt-3">
              <div className="d-flex justify-content-end gap-1">
                
                  <a href="javascript:void(0);" className="share-btn share">
                    <i className="fas fa-share" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/share?url={}"
                    target="_blank"
                    className="share-btn twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="javascript:void(0);" className="share-btn whatsapp">
                    <i className="fab fa-whatsapp" />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u={}"
                    target="_blank"
                    className="share-btn facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/shareArticle?url={}"
                    target="_blank"
                    className="share-btn linkedin"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {/* Email */}
                  <a
                    href="mailto:?subject=HTML%20Share%20Buttons&body={}"
                    target="_blank"
                    className="share-btn email"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                
              </div>
            </div>
          </div>
        </div>
        <img src="/images/blogdetails.jpeg" className="img-fluid mt-2" />
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum
          facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla,
          orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
          sapien justo in libero. Vivamus pharetra, felis non commodo auctor,
          velit nisi pellentesque dui, ut elementum libero risus ut diam.
          Curabitur gravida tempor ipsum, vel pulvinar odio tempus ac. Quisque
          ut lectus. Proin euismod mollis sapien, sit amet ultrices tellus
          ultricies vel. Fusce egestas, felis vel pharetra viverra, felis dui
          cursus dolor, non bibendum est nunc et purus.
          <br />
          <br />
          In auctor eros eget urna consectetur, in dictum velit malesuada. Nulla
          at turpis facilisis, vestibulum est et, iaculis urna. Duis gravida
          dictum velit, sit amet varius lectus convallis ac. Proin tempor, risus
          et laoreet feugiat, leo tortor bibendum urna, at feugiat leo velit
          eget velit. Donec quis est a nibh pharetra facilisis. Donec nec arcu
          euismod, aliquet magna sed, luctus eros. Integer suscipit, libero nec
          dapibus dictum, orci turpis accumsan erat, non fringilla libero enim
          id purus.
          <br />
          <br />
          Sed rutrum, libero sed convallis volutpat, elit metus consequat elit,
          ac ultricies tortor risus eget massa. Vivamus at dolor non nunc
          commodo aliquam. Nullam egestas libero non libero aliquet, id tempus
          neque cursus. Donec ornare felis vel elit bibendum, sit amet
          consectetur justo ornare. Vestibulum ac scelerisque mauris. Nullam id
          risus non nisi lobortis dapibus. Phasellus volutpat urna nec nibh
          facilisis, eget sollicitudin libero congue. Nam egestas, nisi et
          laoreet vestibulum, risus ligula cursus mauris, non lacinia felis
          tortor et libero. Proin vulputate sem ut nulla facilisis, at tempor
          nisi molestie. Curabitur aliquam purus sit amet libero cursus, at
          auctor felis vehicula.
          <br />
          <br />
          <img src="/images/votinggrf.png" className="img-fluid" />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Aenean lobortis malesuada neque a interdum.
          Fusce lobortis mauris non ex lacinia, at ultrices sem cursus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nam aliquet ligula ut dolor tincidunt, nec
          ullamcorper dui egestas. In in vehicula risus. Aliquam erat volutpat.
          Ut aliquet metus sed magna sagittis, nec sodales risus varius.
          Praesent consequat erat ut mauris malesuada, in fermentum turpis
          bibendum. Aliquam posuere velit et nulla molestie, in ullamcorper
          nulla luctus. Etiam suscipit, elit a facilisis sagittis, lacus sem
          facilisis augue, at vestibulum felis lacus in augue.
        </p>
        <div className="row align-items-center next-prv-new-details">
          <div className="col-6 d-flex justify-content-start align-items-center">
            <a
              href="#"
              className="d-flex align-items-center color-nvyblue text-decoration-none"
            >
              <i className="fas fa-chevron-left fa-2x me-3" />
            </a>
            <div>
              <h5 className="mb-0 color-nvyblue fw-bold">DONT MISS</h5>
              <p className="mt-2">
                Congress rolls out Better Deal, new economic agenda
              </p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <div className="text-end me-3">
              <h5 className="mb-0 color-nvyblue fw-bold">UP NEXT</h5>
              <p className="mt-2">
                Illinois financial crisis could bring the state to a halt
              </p>
            </div>
            <a
              href="#"
              className="d-flex align-items-center color-nvyblue text-decoration-none"
            >
              <i className="fas fa-chevron-right fa-2x" />
            </a>
          </div>
        </div>
      
    </>
  );
};

export default SingleNews;
