import { NavLink } from "react-router";
import usePortfolioDataStore from "~/data/zustand";

import ProjectBox from "~/UI/ProjectBox";

function ProjectsSection() {
  const { projects } = usePortfolioDataStore();

  if (projects == null) {
    return <div>No Projects to Select from</div>
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        My Side Projects
      </p>
      <p className="text-description text-paragraph">
        I love building projects whether it is a simple websites or complex we
        apps. These are few of my favourites.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project) => (
          <ProjectBox project={project} />
        ))}
      </div>
      <NavLink
        to={`/projects`}
        className="text-accent-2 border-b-4 border-text-accent-2 px-1 ml-1"
      >
        More Projects
      </NavLink>
    </div>
  );
}

export default ProjectsSection;
