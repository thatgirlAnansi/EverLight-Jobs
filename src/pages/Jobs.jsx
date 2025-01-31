import React from "react";
import JobList from "../components/JobList";

const Jobs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-6">All Jobs</h1>
      <JobList />
    </div>
  );
};

export default Jobs;