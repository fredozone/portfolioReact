import React from "react";
import Projects from "./projects";
const portfolio = () => {
  return (
    <>
      <main>
        <section id="portfolio">
          <div className="aling-content-center title-page-style">
            <div className="main-title">
              <h1 className="title-page">
                Experience <span className="bg-text">Portfolio</span>
              </h1>
            </div>
          </div>
        </section>
        <section>
          {Projects.map((project) => {
            let imgenPosition = "";
            let positionItems = "";
            if (project.id % 2 === 0) {
              imgenPosition = "";
              positionItems = "position-right-card";
            } else {
              imgenPosition = "img-left-content";
              positionItems = "position-left-card";
              console.log("ENTRE");
            }
            return (
              <div className="aling-content-center" key={project.id}>
                <div className="card">
                  <div
                    className={
                      "img-card aling-content-center " +
                      positionItems +
                      " " +
                      imgenPosition
                    }
                  >
                    <img
                      src={"images/" + project.imagenName}
                      alt=""
                      className="img-experience"
                    />
                  </div>
                  <div className={"card-name " + positionItems}>
                    <p className="margin-b-cero text-align-right">Project</p>
                    <h3 className="margin-t-cero">{project.projectName}</h3>
                  </div>
                  <div
                    className={
                      "description " + positionItems + " text-align-right"
                    }
                  >
                    <p>{project.description}</p>
                  </div>
                  <div
                    className={"skills " + positionItems + " text-align-right"}
                  >
                    <p>{project.skills}</p>
                  </div>
                  <div className={"external-link " + positionItems}>
                    <a href={project.link} className="external-link-button">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default portfolio;
