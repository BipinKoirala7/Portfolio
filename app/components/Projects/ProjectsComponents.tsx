import usePortfolioDataStore from "~/data/zustand";
import ProjectBox from "~/UI/ProjectBox";

export default function ProjectsComponents() {
  const projects = usePortfolioDataStore(state => state.projects);
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        My Side Projects
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectBox project={project} />
        ))}
      </div>
    </div>
  );
}
