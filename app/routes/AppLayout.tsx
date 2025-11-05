import { Outlet } from "react-router";
import FloatingNavigation from "~/components/FloatingNavigation";
import Footer from "~/components/Footer";

function AppLayout() {
  return (
    <div className="flex gap-4 pt-10 flex-col sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] items-center">
      <FloatingNavigation />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
