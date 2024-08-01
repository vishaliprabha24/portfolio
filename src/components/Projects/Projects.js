import React from "react";
import "./_projects.scss";
import Project from "../.././assets/images/Dibber.png";
function Projects(props) {
  const projects = [
    {
      src: Project,
      name: "Dibber",
      description:
        "A project called DIBBER which manages over 600 Early Childhood Education Centers in 10 different countries which host multiple websites for business marketing. As a Frontend Developer, I am responsible for the development of websites for more than 4 different countries and maintain strong relationships with multiple clients.",
    },
    // {
    //   src: Project,
    //   name: "Student Crud",
    //   description:
    //     "gvjjbn dhkvbbd dvkhb,d dkhgbjsbjksbs dkjbkdbjhkd jb.nb dhgkbjjjjdkkkkkjdn dkndnkkndkndnkdn dkndndnkjuj sn,",
    // },
    // {
    //   src: Project,
    //   name: "Student Crud",
    //   description:
    //     "gvjjbn dhkvbbd dvkhb,d dkhgbjsbjksbs dkdhk jbkdbjb.nb dhgkbjjjjjuj sn,",
    // },
  ];
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="card">
              <div className="project-image">
                <img src={project.src}></img>
              </div>
              <div className="project-details">
                <div className="project-name">
                  <h3>{project.name}</h3>
                </div>
                <div className="project-description">
                  <h5>{project.description}</h5>
                </div>
              </div>

              <div className="actions">
                <div>
                  <a href="https://www.dibber.in/" target="_blank">
                    <button className="btn-project">View Site</button>
                  </a>
                </div>
                {/* <div>
                  <button className="btn-project">Source Code</button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
