import ShowStats from "../components/ShowStats";
import ShowStatsByCountry from "../components/ShowStatsByCountry";

function Homepage() {
  return (
    <div>
      <ShowStats
        selectedCountry="Global"
        url="https://covid19.mathdro.id/api"
      />
      <ShowStatsByCountry url="https://covid19.mathdro.id/api/countries/USA/" />
    </div>
  );
}

export default Homepage;
