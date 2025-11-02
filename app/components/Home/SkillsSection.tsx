import ShowButton from "~/UI/ShowButton";
import type { SkillsT } from "~/types";

function SkillsSection() {
  const skillsData: SkillsT[] = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Node.js", "Java"],
    },
    {
      title: "Frameworks",
      skills: [
        "React.js",
        "React Router v7",
        "Next.js",
        "Express.js",
        "Tailwind CSS",
        "Spring Boot",
      ],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Microservices", "Git", "GitHub"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Mongo DB"],
    },
    {
      title: "Currently Exploring",
      skills: ["API Security", "System Design"],
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        Skills
      </p>
      <div className="flex flex-col gap-3">
        {skillsData.map((skill) => {
          return (
            <div className="flex flex-col gap-2">
              <p className="text-h3 font-accent">{skill.title}:</p>
              <div className="flex gap-1 flex-wrap">
                {skill.skills.map((s) => (
                  <ShowButton className="w-fit text-paragraph px-3 rounded-xl font-bold bg-text text-accent-1">
                    {s}
                  </ShowButton>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;
