import usePortfolioDataStore from "~/data/zustand";

function GreetingsSection() {
  const { name, talent_description } = usePortfolioDataStore(state => state.user);

  if (name == undefined || name == null) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-h1 font-accent font-bold">Hi, I'm {name} 👋</p>
        <p className="text-description">
          {talent_description}
        </p>
      </div>
      {/* <img
        src="/young-man-with-glasses-illustration.png"
        alt=""
        className="w-30 object-cover"
      /> */}
    </div>
  );
}

export default GreetingsSection