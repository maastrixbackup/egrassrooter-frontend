import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";

if (typeof Highcharts === "object") {
  HighchartsMap(Highcharts);
}


const EleCountryMap = ({ resultsData }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/ng/ng-all.topo.json"
      ).then((response) => response.json());

      const defaultData = [
        ["ng-ri", 0], ["ng-kt", 0], ["ng-so", 0], ["ng-za", 0],
        ["ng-yo", 0], ["ng-ke", 0], ["ng-ad", 0], ["ng-bo", 0],
        ["ng-ak", 0], ["ng-ab", 0], ["ng-im", 0], ["ng-by", 0],
        ["ng-be", 0], ["ng-cr", 0], ["ng-ta", 0], ["ng-kw", 0],
        ["ng-la", 0], ["ng-ni", 0], ["ng-fc", 0], ["ng-og", 0],
        ["ng-on", 0], ["ng-ek", 0], ["ng-os", 0], ["ng-oy", 0],
        ["ng-an", 0], ["ng-ba", 0], ["ng-go", 0], ["ng-de", 0],
        ["ng-ed", 0], ["ng-en", 0], ["ng-eb", 0], ["ng-kd", 0],
        ["ng-ko", 0], ["ng-pl", 0], ["ng-na", 0], ["ng-ji", 0],
        ["ng-kn", 0],
      ];

      const partyVotesData = defaultData.map(([stateCode, defaultValue]) => {
        const matchingVote = resultsData?.allpartyVotes?.find(
          (vote) => vote.state_id === getStateIdFromCode(stateCode)
        );

        return [
          stateCode,
          matchingVote ? matchingVote.total_votes : defaultValue,
          matchingVote ? matchingVote.party.color : "#D6D6DA",
        ];
      });

      console.log("partyVotesData:", partyVotesData);
      console.log("topology:", topology);

      setOptions({
        chart: {
          map: topology,
          backgroundColor: "#FFFFFF",
        },
        title: {
          text: "Country Result Map",
        },
        subtitle: {
          text: '<a href="https://code.highcharts.com/mapdata/countries/ng/ng-all.topo.json"></a>',
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        tooltip: {
          useHTML: true,
          formatter: function () {
            return `<strong>${this.point.name}</strong><br/>Total Votes: ${this.point.value || 0}`;
          },
        },
        series: [
          {
            type: "map",
            data: partyVotesData,
            states: {
              hover: {
                color: "#BADA55",
              },
            },
            dataLabels: {
              enabled: false,
            },
            color: "#D6D6DA",
            joinBy: ["hc-key", "stateCode"],
          },
        ],
      });
    };

    fetchGeoData();
  }, [resultsData]);

  const getStateIdFromCode = (code) => {
    const stateMap = {
      "ng-ri": 1, "ng-kt": 2, "ng-so": 3, "ng-za": 4,
      "ng-yo": 5, "ng-ke": 6, "ng-ad": 7, "ng-bo": 8,
      "ng-ak": 9, "ng-ab": 10, "ng-im": 11, "ng-by": 12,
      "ng-be": 13, "ng-cr": 14, "ng-ta": 15, "ng-kw": 16,
      "ng-la": 17, "ng-ni": 18, "ng-fc": 19, "ng-og": 20,
      "ng-on": 21, "ng-ek": 22, "ng-os": 23, "ng-oy": 24,
      "ng-an": 25, "ng-ba": 26, "ng-go": 27, "ng-de": 28,
      "ng-ed": 29, "ng-en": 30, "ng-eb": 31, "ng-kd": 32,
      "ng-ko": 33, "ng-pl": 34, "ng-na": 35, "ng-ji": 36,
      "ng-kn": 37,
    };
    return stateMap[code] || null;
  };

  if (!options) return <div className="loading">Loading map...</div>;

  return (
    <div id="container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  );
};

export default EleCountryMap;
