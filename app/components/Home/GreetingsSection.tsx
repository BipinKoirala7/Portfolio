
function GreetingsSection() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-h1 font-accent font-bold">Hi, I'm Bipin 👋</p>
        <p className="text-description">
          React.js/Node.js/Spring Boot | Full Stack Developer
        </p>
      </div>
      <img
        src="/my_avatar.jpg"
        alt=""
        className="w-30 rounded-[100%] aspect-square"
      />
    </div>
  );
}

export default GreetingsSection