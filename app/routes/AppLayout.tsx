import { Outlet } from "react-router";
import FloatingNavigation from "~/components/FloatingNavigation";

function AppLayout() {
  return (
    <div className="w-full h-full flex gap-4 pt-8 flex-col sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] items-center py-2">
      <FloatingNavigation />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
