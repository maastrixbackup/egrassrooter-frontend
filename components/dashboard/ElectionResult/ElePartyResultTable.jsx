import React from 'react';

const ElePartyResultTable = ({ data, resultsData }) => {
  return (
    <div className="table-bx-main">
      <div className="table-title">
        <h4>Results for all states</h4>
        {/* <a href="#" className="btn-back"><i className="fal fa-angle-double-left"></i></a> */}
      </div>
      <div className="table-bx">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>State</th>
              {data?.political_parties?.map((party) => (
                <th key={party.id}>{party.party_acronym}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resultsData ? (
              resultsData?.table_results?.states.map((state) => (
                <tr key={state.id}>
                  <td>{state.state}</td>
                  {state?.parties.map((party) => (
                    <td key={party.party_acronym} style={{ backgroundColor: party.background_color }}>
                      {party.vote_value}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              data?.statedata?.map((state) => (
                <tr key={state.id}>
                  <td>{state.state_name}</td>
                  {data.political_parties.map((party) => (
                    <td key={party.id} >
                      {state.voteCounts && state.voteCounts[party.id] !== undefined
                        ? state.voteCounts[party.id]
                        : '-'}
                    </td>
                  ))}
                </tr>
              ))
            )}
            <tr>
              <th>Total</th>
              {data?.political_parties?.map((party) => {
                const totalVote = resultsData?.table_total_results.find(p => p.party_acronym === party.party_acronym)?.total_vote_value || '-';
                return (
                  <td key={party.id}>{totalVote}</td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElePartyResultTable;
