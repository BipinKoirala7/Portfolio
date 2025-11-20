import ProjectsComponents from "~/components/Projects/ProjectsComponents";
import type { Route } from "./+types/Projects";
import data from "~/data.json";

export async function loader({ params }: Route.ClientLoaderArgs) {
  return data.projects;
}

function Projects({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return <ProjectsComponents projects={loaderData}/>;
}

export default Projects;
