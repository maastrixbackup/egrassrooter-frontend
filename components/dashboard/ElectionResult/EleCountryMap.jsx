import React, { useEffect, useState } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import styled from "styled-components";
import ngMap from "../../../src/maps/nigeria.json";

const MapContainer = styled.div`
  position: relative; // Add this to position the tooltip correctly
  svg {
    stroke: #00000041;
    path {
      fill: #f4f3f0; // Default fill color
      cursor: pointer;
      outline: none;
    }
  }
`;

const NigeriaMap = ({ resultsData, state }) => {
  const [hoverInfo, setHoverInfo] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [winningParty, setWinningParty] = useState({});

  useEffect(() => {
    if (resultsData?.allpartyVotes) {
      setWinningParty(
        resultsData.allpartyVotes.reduce((prev, current) => {
          return prev.total_votes > current.total_votes ? prev : current;
        })
      );
    }
  }, [resultsData]);

  const handleRegionClick = (code) => {
    console.log("Region clicked:", code);
  };

  const handleMouseMove = (e) => {
    const stateId = e.target.id;
    if (stateId === state) {
      setHoverInfo(
        true
      );
      // Set tooltip position with an offset
      setTooltipPosition({ top: e.clientY - 40, left: e.clientX - 200 });
    } else {
      setHoverInfo(false);
    }
    console.log(stateId, "stateId");
  };

  return (
    <MapContainer>
      <VectorMap
        id="nigeria-map"
        name="Nigeria"
        viewBox={ngMap.viewBox}
        layers={ngMap.layers}
        checkedLayers={["ng-lagos"]}
        currentLayers={["ng-on"]}
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
          <h4 style={{ margin: 0 }}>{state}</h4>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  Winning Party
                </th>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  Votes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "5px" }}>
                  {winningParty.party?.party_name || "N/A"}
                </td>
                <td style={{ padding: "5px" }}>
                  {winningParty.total_votes || 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Add dynamic styling for the highlighted state */}
      <style>
        {`
          #${state} {
            fill: ${winningParty.party?.color}; // Highlight color for the specified state
          }
        `}
      </style>
    </MapContainer>
  );
};

export default NigeriaMap;
