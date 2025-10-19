import { Outlet } from "react-router"
import Link from "~/UI/Link";

function AppLayout() {
  return (
    <div className="w-full h-full flex gap-4 flex-col sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] items-center py-2">
      <div className="w-full flex gap-4 justify-center font-accent bg-">
        <div className="flex gap-8 py-2">
          <Link placeholder="Home" link="/"/>
          <Link placeholder="Projects" link="/projects"/>
          <Link placeholder="About" link="/about"/>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout