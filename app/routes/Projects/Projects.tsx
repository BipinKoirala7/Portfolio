import ProjectsComponents from "~/components/Projects/ProjectsComponents";
import type { Route } from "./+types/Projects";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Projects | Bipin Koirala" },
    { name: "description", content: "Welcome to the projects page of portfolio of Bipin Koirala" },
  ]
}

function Projects() {
  return <ProjectsComponents />;
}

export default Projects;
