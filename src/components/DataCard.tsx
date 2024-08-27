import React from "react";

export interface DataCardProps {
  time: string;
  data: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

const DataCard: React.FC<DataCardProps> = ({ time, data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold mb-2">{time}</h3>
      <div className="text-sm text-gray-700">
        <p>
          <strong>Open:</strong> {data["1. open"]}
        </p>
        <p>
          <strong>High:</strong> {data["2. high"]}
        </p>
        <p>
          <strong>Low:</strong> {data["3. low"]}
        </p>
        <p>
          <strong>Close:</strong> {data["4. close"]}
        </p>
        <p>
          <strong>Volume:</strong> {data["5. volume"]}
        </p>
      </div>
    </div>
  );
};

export default DataCard;
