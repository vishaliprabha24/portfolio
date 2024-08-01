import React from "react";
import "./_skills.scss";
function Skills(props) {
  const technical = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Basics of Canva ",
    "C Programming",
    "Wix Website Development Tool",
    "Basics of Wordpress and plugins",
    "Basics of Salesforce and Designing",
  ];
  const nonTechnical = [
    "Basics of Payrolls Processing",
    "Basics of HR operations",
    "Strong knowledge in inances",
    "Effective communication",
    "Basics of MS Office(Excel,Word)",
  ];
  // const testing = ["Selenium", "Cucumber", "BDD", "J-Unit"];
  // const others = ["Git", "Maven", "Linux", "AWS"];

  return (
    <div className="skills-page">
      <h1 className="h1">My Skills</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h1>Technical Skills</h1>
          <div className="skills">
            {technical.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        <div className="skill-section">
          <h1>Non-Technical Skills</h1>
          <div className="skills">
            {nonTechnical.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        {/* <div className="skill-section">
          <h1>Testing</h1>
          <div className="skills">
            {testing.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        <div className="skill-section">
          <h1>Others</h1>
          <div className="skills">
            {others.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
