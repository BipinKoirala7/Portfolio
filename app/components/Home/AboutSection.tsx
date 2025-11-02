
function AboutSection() {
  return (
    <div className="flex flex-col gap-4">
      <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
        About
      </p>
      <div className="flex flex-col gap-3 text-paragraph">
        <p className="text-description">
          I am a college student passionate about building web applications that
          solve real world problems. Over the past two years, I have been
          learning both frontend and backend. I give more focus on to backend as
          I love it more. I have been working with technologies like Node.js,
          Spring Boot (Java), etc in backend and technologies like React and its
          framework in frontend. I am still learning something new everyday,
          whether it is my understanding of cleaner code, system design
          principles or figuring out how to optimize code.
        </p>
        <p className="text-description">
          What got me into programming and still excites me about programming is
          to create something new, something innovative, something genuine which
          people can use it. I love the challenge of building a better system
          design, building server-side logic that powers frontend securely, etc.
          Right now, I am diving deep into API design, Backend security and
          testing practices.
        </p>
        <p className="text-description">
          When I'm not coding, you'll find me playing games, football or
          watching movies and series. I am always open for collaborating on
          interesting projects, learning from experienced developers or
          discussing new technologies over coffee.
        </p>
        <p className="text-description">
          Feel free to check out my projects below or reach out if you'd like to
          connect!
        </p>
      </div>
    </div>
  );
}

export default AboutSection