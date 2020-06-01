import React from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./frontendMentor/data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header-img">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </header>
      {data.map((job) => (
        <JobBoardComponent job={job} key={job.id} />
      ))}
    </div>
  );
}

export default App;
