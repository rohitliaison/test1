import React from "react";

export interface MetaDataProps {
  data: {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
}

const MetaData: React.FC<MetaDataProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Meta Data</h2>
      <div className="text-sm text-gray-700">
        <p>
          <strong>Information:</strong> {data["1. Information"]}
        </p>
        <p>
          <strong>Symbol:</strong> {data["2. Symbol"]}
        </p>
        <p>
          <strong>Last Refreshed:</strong> {data["3. Last Refreshed"]}
        </p>
        <p>
          <strong>Interval:</strong> {data["4. Interval"]}
        </p>
        <p>
          <strong>Output Size:</strong> {data["5. Output Size"]}
        </p>
        <p>
          <strong>Time Zone:</strong> {data["6. Time Zone"]}
        </p>
      </div>
    </div>
  );
};

export default MetaData;
