import { RiGlobalLine } from "react-icons/ri";
import { NavLink } from "react-router";

import type { ProjectT } from "~/types";
import ShowButton from "~/UI/ShowButton";

function ProjectsSection() {
  const projects: ProjectT[] = [
    {
      title: "Budget Planner",
      timeline: "Nov 2025",
      description:
        "MyMoney is a simple offline expense tracker with budgeting, multiple accounts, and charts. It has a homescreen widget for quick expense logging. The Pro version adds themes, more icons, and passcode protection.",
      technologies: [
        "React.js",
        "React Router v7",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "Microservices",
        "OAuth",
        "JWT",
        "REST API",
        "Docker",
      ],
      website: "https://mymoney.com",
    },
    {
      title: "Portfolio",
      timeline: "Nov 2025",
      description:
        "It is my simple portfolio. You are seeing this in my portfolio. My Portfolio is my online presence for anybody to connect, know and contact me.",
      technologies: ["React.js", "React Router v7", "Tailwind CSS"],
      website: "https://mymoney.com",
    },
  ];
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
        {projects.map((project) => {
          return (
            <div className="w-fit flex flex-col justify-between gap-2 border-[1px] border-accent-1 p-3 rounded-2xl hover:bg-primary hover:border-primary cursor-pointer">
              <p className="text-h3 font-accent">{project.title}</p>
              <p className="text-description text-paragraph">
                {project.timeline}
              </p>
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
                <RiGlobalLine />
                <a href={project.website}>Website</a>
              </ShowButton>
            </div>
          );
        })}
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
