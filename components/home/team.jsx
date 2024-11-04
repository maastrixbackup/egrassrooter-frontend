import React from "react";
import Image from "next/image";

const Team = ({ teamData }) => {
  return (
    <section className="eg-team-sec ptb-50">
      <div className="container">
        <div className="row">
          {teamData?.map((team, i) => (
            <div key={i} className="col-lg-3 col-6 col-md-3">
              {/* <div className="team-box wow fadeInRight" data-wow-delay={`${(i + 1) * 0.2}s`}>
                <img src={team.candidate_image} alt />
                <div className="team-cont">
                  <h4></h4>
                  <a href="#">
                    <img src={team.political_party_logo} alt />
                  </a>
                </div>
              </div> */}
              <div className="team-box wow fadeInRight" data-wow-delay={`${(i + 1) * 0.2}s`}>
                <div class="cont3">
                  <a href="#">
                    <Image src={team.political_party_logo} alt="abcd" width={500} height={500}/>
                  </a>
                  <Image src={team.candidate_image} alt="abcd" width={500} height={500} />
                </div>
                <div class="team-cont">
                  <h4>{team.party_owner_name}</h4>
                </div>
              </div>
            </div>
          ))}
          <div className="com-btn">
                <a href="#">Show All</a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
