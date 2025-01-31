
import React from "react";

const card = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default card;