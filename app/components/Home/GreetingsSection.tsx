
function GreetingsSection() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-h1 font-accent font-bold">Hi, I'm Bipin Koirala 👋</p>
        <p className="text-description">
          React.js/Node.js/Spring Boot | Full Stack Developer
        </p>
      </div>
      <img
        src="/young-man-with-glasses-illustration.png"
        alt=""
        className="w-30 object-cover"
      />
    </div>
  );
}

export default GreetingsSection