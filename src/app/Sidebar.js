import React from 'react';

const Sidebar = () => {
  // Placeholder SVG paths for icons
  const homeIconPath = "M3 9.5l7-7 7 7V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-9.5z";
  const templateIconPath = "M3 4a2 2 0 012-2h14a2 2 0 012 2v4H3V4z";
  const reportIconPath = "M9 17v-6h6v6H9z";
  const performanceIconPath = "M13 10V3L4 14h7v7l9-11h-7z";

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl font-semibold text-gray-800">ORCA AI</h2>
      <div className="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={homeIconPath} />
                </svg>
                <span className="mx-4 font-medium">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={templateIconPath} />
                </svg>
                <span className="mx-4 font-medium">Templates</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={reportIconPath} />
                </svg>
                <span className="mx-4 font-medium">Reports</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={performanceIconPath} />
                </svg>
                <span className="mx-4 font-medium">Sales Performance</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;