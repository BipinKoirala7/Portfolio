function HomeComponent() {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex flex-col">
        <p className="text-[3rem] font-bold">Hi, I'm Bipin Koirala 👏</p>
        <p>React.js/Node.js/Spring Boot | Full Stack Developer</p>
      </div>
      <img
        src="public/my_avatar.jpg"
        alt=""
        className="w-30 rounded-[100%] aspect-square"
      />
    </div>
  );
}

export default HomeComponent;
