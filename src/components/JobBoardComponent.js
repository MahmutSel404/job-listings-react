import React from "react";

const JobBoardComponent = ({
  job: {
    company,
    logo,
    New,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  return (
    <div className="job-card">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="job-description">
        <h3 className="job-company">{company}</h3>
        <h2 className="job-position">{position}</h2>
        <p className="job-other-details">
          {postedAt}·{contract}·{location}
        </p>
      </div>
      <div className="lang-and-tools">
        <span className="lang">{role}</span>
        <span className="lang">{level}</span>
        {languages
          ? languages.map((language) => (
              <span className="lang">{language}</span>
            ))
          : ""}
        {tools ? tools.map((tool) => <span className="lang">{tool}</span>) : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
