import { useState, useEffect } from "react";
import axios from "axios";

function getStats(url) {
  const [stats, setStats] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching");
        const data = await axios.get(url).then(data => data.data);

        setStats(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [url]);
  return { stats, error };
}

export default getStats;
