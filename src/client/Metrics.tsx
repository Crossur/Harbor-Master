import React, { useState } from 'react';

const Metrics: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const handleButtonClick = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/clusters/details'); // Replace with your backend URL
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2)); // Format the response for display
    } catch (error) {
      setResponse(`Failed to fetch: ${(error as Error).message}`);
    }
  };
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Fetch Data
      </button>
      {response && (
        <pre className='mt-4 p-4 bg-gray-100 rounded border border-gray-300'>
          {response}
        </pre>
      )}
    </div>
  );
};

export default Metrics;
