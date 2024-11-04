import React from "react";

const EleCountryMapResult = ({ data, resultsData }) => {
  return (
    <>
      <div className="ele-graph-bx">
        <div className="el-gh-slec"><h4>{resultsData.stateid}</h4></div>
        <div className="el-gh-slec-data">
          <ul>
            {resultsData?.allpartyVotes?.map((Data, i) => (
              <li key={i}>
                <p style={{ backgroundColor: Data.party.color }}>{Data.party.party_name}</p>
                <p>{Data.total_votes}</p>
              </li>
            )) || <li>No party votes available</li>}
          </ul><br></br>
          <div className="el-gh-data-table">
            <table width="100%">
              <tbody>
                <tr>
                  <th>Winning Party:</th>
                  <th>Votes</th>
                </tr>
                {resultsData?.winparty ? (
                  <tr>
                    <td>{resultsData.winparty.party.party_name}</td>
                    <td>{resultsData.winparty.total_votes}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan={2}>No winning party data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EleCountryMapResult;
