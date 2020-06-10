import React from "react";

const JobBoardComponent = ({
  job: {
    company,
    logo,
    position,
    isNew,
    featured,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];
  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }
  return (
    <div className={`job-card ${featured && "job-card-featured"}`}>
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="job-description">
        <h3 className="job-company">
          {company}
          {isNew ? <span className="new">NEW</span> : ""}
          {featured ? <span className="featured">Featured</span> : ""}
        </h3>
        <h2 className="job-position">{position}</h2>
        <p className="job-other-details">
          {postedAt}·{contract}·{location}
        </p>
      </div>
      <div className="tags">
        {/* <span className="lang">{role}</span>
        <span className="lang">{level}</span>
        {languages
          ? languages.map((language) => (
              <span className="lang">{language}</span>
            ))
          : ""}
        {tools ? tools.map((tool) => <span className="lang">{tool}</span>) : ""} */}

        {tags
          ? tags.map((tag) => (
              <span onClick={() => handleTagClick(tag)} className="lang">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
