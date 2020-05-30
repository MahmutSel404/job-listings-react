import React from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./frontendMentor/data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/bg" alt="" />
      </header>
      {data.map((job) => (
        <JobBoardComponent job={job} key={job.id} />
      ))}
    </div>
  );
}

export default App;

//Todos
//1. Study the design  &  json
//2. Job Board Component
//3. Get the data from the JSon
//4.Pass down the data to the JBC
//5.Style it
//6.Filter it
//7.Filter Component
