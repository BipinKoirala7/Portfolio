import { TbSmartHome } from "react-icons/tb";
import { HiFolderOpen } from "react-icons/hi2";
import { BiSolidUserDetail } from "react-icons/bi";
import Link from "~/UI/Link";

function FloatingNavigation() {
  return (
    <div className="w-fit fixed bottom-5 flex gap-2 rounded-4xl border-[1px] border-[#262626] p-1 bg-[#0D0E0F]">
      <Link
        to="/"
        icon={<TbSmartHome className="text-[1.25rem]" />}
        placeholder="Home"
      />
      <Link
        to="/projects"
        icon={<HiFolderOpen className="text-[1.25rem]" />}
        placeholder="Projects"
      />
      <Link
        to="/about"
        icon={<BiSolidUserDetail className="text-[1.25rem]" />}
        placeholder="About"
      />
    </div>
  );
}

export default FloatingNavigation;
