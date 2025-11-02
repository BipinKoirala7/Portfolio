function EducationSection() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        Education
      </p>
      <div className="flex">
        <div className="w-full flex gap-4">
          <img
            src="/informatics-logo.webp"
            alt=""
            className="w-12 aspect-square rounded-[50%]"
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
              <a href="https://icp.edu.np" target="_blank" className="text-h3 font-accent">Informatics College Pokhara</a>
              <p className="text-paragraph text-description">
                Bachelor in Information Technology
              </p>
            </div>
            <p className="text-paragraph text-description">2025-2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
