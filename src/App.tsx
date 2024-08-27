import React, { useEffect, useState } from "react";
import DataCard, { DataCardProps } from "./components/DataCard";
import MetaData, { MetaDataProps } from "./components/MetaData";

const App: React.FC = () => {
  const [metaData, setMetaData] = useState<MetaDataProps | null>(null);
  const [timeSeriesData, setTimeSeriesData] = useState<DataCardProps | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
        );
        const result = await response.json();
        setMetaData(result["Meta Data"]);
        setTimeSeriesData(result["Time Series (5min)"]);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-4">{error}</div>;

  return (
    <div className="p-4">
      {metaData && <MetaData data={metaData} />}
      <h2 className="text-xl font-bold mb-2">Time Series (5min)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {timeSeriesData &&
          Object.entries(timeSeriesData).map(([time, values]) => (
            <DataCard key={time} time={time} data={values} />
          ))}
      </div>
    </div>
  );
};

export default App;
