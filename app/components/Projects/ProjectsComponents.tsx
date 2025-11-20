import { useLoaderData } from "react-router";

export async function loader() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("An error occurred: " + e);
    }
  }
}

function ProjectsComponents() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        My Side Projects
          </p>
          <div>
              
          </div>
    </div>
  );
}

export default ProjectsComponents;
