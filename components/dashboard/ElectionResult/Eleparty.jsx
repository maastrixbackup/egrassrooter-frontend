import React from 'react';

const Eleparty = ({ data, resultsData }) => {
  return (
    <div className="ele-won-party-sec">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-title justify-content-center">
            <h4>States won by each party</h4>
          </div>
        </div>
      </div>
      <div className="ele-wo-bx-sp">
        <div className="row">
          {data?.political_parties?.map((party) => {
            // Find matching entries for this party in seatwinn
            const partyWins = resultsData?.seatwinn?.filter(
              (winData) => winData.party === party.id
            ) || [];

            return (
              <div key={party.id} className="col-lg-3">
                <div className="ele-party-bx">
                  <div className="ele-pr-title">
                    <h5>{party.party_name}</h5>
                  </div>
                  <ul>
                    {data.statedata.map((state, i) => {
                      // Check if the current state.id is in the party's won states (sid)
                      const isActive = partyWins.some((win) => win.sid === state.id);

                      return (
                        <li key={i} className={isActive ? "active" : ""}>
                          <i className="fal fa-chair-office" />
                        </li>
                      );
                    })}
                  </ul>
                  <div className="ele-rel-bx">
                    <h4>{partyWins.length} State(s) Won</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Eleparty;
