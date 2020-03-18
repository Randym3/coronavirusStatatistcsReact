import getStats from "../util/getStats";

export default function ShowStats({ url, selectedCountry }) {
  const { stats, error } = getStats(url);
  if (!stats) return "Loading...";
  if (error) return <h1>500 internal servor error. sorry</h1>;
  else {
    return (
      <section>
        <h1>Coronavirus {selectedCountry} statistics</h1>
        <div className="stats-card">Confirmed: {stats.confirmed.value}</div>
        <div className="stats-card">Recovered: {stats.recovered.value}</div>
        <div className="stats-card">Deaths: {stats.deaths.value}</div>
        <div className="stats-card">
          Death Rate:{" "}
          {(stats.deaths.value / stats.confirmed.value).toFixed(4) * 100 + "%"}
        </div>
      </section>
    );
  }
}
