import getStats from "../util/getStats";
import ShowStats from "./ShowStats";
import { useState } from "react";

export default function ShowStatsByCountry({ url }) {
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const { stats: countries } = getStats(
    "https://covid19.mathdro.id/api/countries"
  );

  function selectChangeHandler(e) {
    setSelectedCountry(e.target.value);
  }
  if (!countries) return ".";
  else {
    console.log(selectedCountry);
    return (
      <div>
        <ShowStats
          selectedCountry={selectedCountry}
          url={"https://covid19.mathdro.id/api/countries/" + selectedCountry}
        />
        <select onChange={e => selectChangeHandler(e)}>
          {Object.entries(countries.countries).map(([country]) => (
            <option key={country + "_Key"}>{country}</option>
          ))}
        </select>
      </div>
    );
  }
}
