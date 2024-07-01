// components/Content.js
import React from 'react';


const Content = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-xl font-semibold">Analyse the calls for Soft Skills Coaching</h2>
      <p className="mt-2 text-gray-600">How does it work?</p>
      <p className="mt-2 text-gray-600">When should you use this?</p>
      <div className="mt-6 space-y-6">
        <section>
          <h3 className="text-lg font-medium">Call Opening</h3>
          <div className="mt-2 space-y-2">
            <p>Was the purpose of the call stated in the beginning?</p>
            <button className="text-blue-600">Edit</button>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-medium">Greeting</h3>
          <p>Did the salesperson use an appropriate opening greeting?</p>
        </section>
        <section>
          <h3 className="text-lg font-medium">Call Closing</h3>
          <p>Did the salesperson summarize the key points discussed during the call?</p>
        </section>
        <section>
          <h3 className="text-lg font-medium">Confidence</h3>
          <p>Did the salesperson appear confident and knowledgeable about the product?</p>
        </section>
      </div>
    </div>
  );
};

export default Content;
