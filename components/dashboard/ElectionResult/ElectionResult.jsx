import React from "react";

const ElectionResult = ({ data, resultsData }) => {
  return (
    <div className="ele-cl-bx">
      <ul>
        {data.political_parties?.map((party) => {
          const matchingParty = resultsData?.partyVoteCounts?.find(
            (voteCount) => voteCount.id === party.id
          );

          return (
            <div key={party.id}>
              <li style={{ backgroundColor: party.party_color }} className="partyname" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title={party.party_name}>
                {matchingParty ? matchingParty.total_vote || 0 : 0}
              </li>
              <span>{party.party_acronym}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ElectionResult;
