import React, { useEffect, useState } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import styled from "styled-components";
import ngMap from "../../../src/maps/nigeria.json";

const MapContainer = styled.div`
  position: relative;
  svg {
    stroke: #00000041;
    path {
      fill: #f4f3f0;
      cursor: pointer;
      outline: none;
    }
  }
`;

const NigeriaMap = ({ resultsData }) => {
  const [hoverInfo, setHoverInfo] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [winningParties, setWinningParties] = useState({});

  useEffect(() => {
    if (resultsData?.allpartyVotes) {
      const partyMap = {};
      resultsData.allpartyVotes.forEach((vote) => {
        const stateId = vote.sid;
        if (!partyMap[stateId] || vote.total_votes > partyMap[stateId].total_votes) {
          partyMap[stateId] = vote;
        }
      });
      setWinningParties(partyMap);
    }
  }, [resultsData]);

  const handleRegionClick = (code) => {
    console.log("Region clicked:", code);
  };

  const handleMouseMove = (e) => {
    const stateId = e.target.id;
    if (winningParties[stateId]) {
      setHoverInfo(true);
      setTooltipPosition({ top: e.clientY - 40, left: e.clientX - 200 });
    } else {
      setHoverInfo(false);
    }
  };

  return (
    <MapContainer>
      <VectorMap
        id="nigeria-map"
        name="Nigeria"
        viewBox={ngMap.viewBox}
        layers={ngMap.layers}
        onClick={(e) => handleRegionClick(e.target.id)}
        onMouseMove={handleMouseMove}
      />
      {hoverInfo && (
        <div
          className="mapToolTip"
          style={{
            position: "absolute",
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <h4 style={{ margin: 0 }}>{winningParties[stateId]?.state}</h4>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "5px" }}>
                  Winning Party
                </th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "5px" }}>
                  Votes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "5px" }}>{winningParties[stateId]?.party?.party_name || "N/A"}</td>
                <td style={{ padding: "5px" }}>{winningParties[stateId]?.total_votes || 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <style>
        {Object.entries(winningParties).map(
          ([stateId, partyData]) => `
            #${stateId} {
              fill: ${partyData.party?.color};
            }
          `
        )}
      </style>
    </MapContainer>
  );
};

export default NigeriaMap;
