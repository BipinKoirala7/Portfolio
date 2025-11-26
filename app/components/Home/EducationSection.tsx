import usePortfolioDataStore from "~/data/zustand";

function EducationSection() {
  const education = usePortfolioDataStore(state => state.user.education);

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        Education
      </p>
      <div className="flex">
        {
          education.map(edu => {
            return (
              <div key={edu.id} className="w-full flex gap-4">
                <img
                  src={edu.college_image}
                  alt=""
                  className="w-12 aspect-square rounded-[50%]"
                />
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col">
                    <a
                      href={edu.website}
                      target="_blank"
                      className="text-h3 font-accent"
                    >
                      {edu.name}
                    </a>
                    <p className="text-paragraph text-description">
                      {edu.course}
                    </p>
                  </div>
                  <p className="text-paragraph text-description">{edu.start_date}-{edu.end_date}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default EducationSection;
