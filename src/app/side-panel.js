import React from 'react';

const SidePanel = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
           <div className="flex items-center bg-white rounded-lg shadow-md p-2">
      <input
        type="search"
        placeholder="Search"
        className="w-full pl-2 pr-10 text-sm text-gray-700"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
      <h3 className="text-lg font-semibold">Upload Videos, Audio or Transcripts</h3>
      <ul>
        <li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload from Drive
          </button>
        </li>
        <li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload from Computer
          </button>
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Data Integrations</h3>
      <p>HubSpot</p>
      <ul>
        <li>
          <input type="checkbox" id="hubspot" />
          <label htmlFor="hubspot" className="ml-2">Some data integrations I have to ask about</label>
        </li>
        <li>
          <input type="checkbox" id="crm" />
          <label htmlFor="crm" className="ml-2">Some data integrations</label>
        </li>
      </ul>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
        Generate Report
      </button>
    </div>
  );
};

export default SidePanel;