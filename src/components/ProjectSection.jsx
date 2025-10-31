import React from "react";
import panelA from "../assets/solar-panel-image-A.jpg";
import { Link } from "react-router-dom";
import ProjectCards from "../Cards/ProjectCards";
import { projectsData } from "../data/ProjectCardData";
import WorkProgress from "./WorkProgress";



function ProjectSection({ title, description, limit }) {

   const displayedProjects = limit
    ? projectsData.slice(0, limit)
    : projectsData;
  return (
    <section className="p-8 md:p-16 lg:p-20 bg-slate-100 flex flex-col gap-12">
      <div className=" flex flex-col md:flex-row space-y-8 md:space-y-0 p-2 justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
            <Link to={`../projects`}>View Project</Link>
          </button>
        </div>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>

      <WorkProgress />
    </section>
  );
}

export default ProjectSection;
