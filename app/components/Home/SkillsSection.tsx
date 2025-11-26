import ShowButton from "~/UI/ShowButton";
import usePortfolioDataStore from "~/data/zustand";

function SkillsSection() {
  const skills = usePortfolioDataStore(state => state.user.skills);
  return (
    <div className="flex flex-col gap-4">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        Skills
      </p>
      <div className="flex flex-col gap-3">
        {skills.map((skill) => {
          return (
            <div key={skill.title} className="flex flex-col gap-2">
              <p className="text-h3 font-accent">{skill.title}:</p>
              <div className="flex gap-1 flex-wrap">
                {skill.skills.map((s) => (
                  <ShowButton key={s} className="w-fit text-paragraph px-3 rounded-xl font-bold bg-text text-accent-1">
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
