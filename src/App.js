import React, { useState, useEffect } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./frontendMentor/data.json";
import "./App.css";

function App() {
  const [jobsData, setJobsData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobsData(data), []);

  function filterFunction({ role, level, tools, languages }) {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  }
  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  };
  const filteredJobs = jobsData.filter(filterFunction);

  return (
    <div className="App">
      <header className="header-img">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </header>

      <div className="job-filter-card">
        {filters.length > 0 && filters.map((filter) => <span>{filter}</span>)}
      </div>
      {filteredJobs.length === 0 ? (
        <p>Loading....</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
    </div>
  );
}

export default App;
