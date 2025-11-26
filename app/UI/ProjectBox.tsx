import type { Project } from "~/types";
import ShowButton from "./ShowButton";
import { FaGithub } from "react-icons/fa6";

type ProjectBoxT = {
  project: Project;
};

function ProjectBox(props: ProjectBoxT) {
  const { project } = props;
  return (
    <div
      key={project.id}
      className="w-fit flex flex-col justify-between gap-2 border-[1px] border-accent-1 p-3 rounded-2xl hover:bg-primary hover:border-primary cursor-pointer transition duration-300"
    >
      <p className="text-h3 font-accent">{project.title}</p>
      <p className="text-description text-paragraph">{project.timeline}</p>
      <p className="line-clamp-4 overflow-hidden  text-paragraph text-description">
        {project.description}
      </p>
      <div className="grow flex gap-1 flex-wrap">
        {project.technologies.map((t) => (
          <ShowButton className="w-fit h-fit text-small px-2 rounded-xl bg-accent-1 text-text">
            {t}
          </ShowButton>
        ))}
      </div>
      <ShowButton className="flex gap-1 items-center w-fit text-paragraph px-2 rounded-xl font-bold bg-text text-accent-1 self-end">
        <FaGithub />
        <a href={project.codebase}>Code</a>
      </ShowButton>
    </div>
  );
}

export default ProjectBox;
