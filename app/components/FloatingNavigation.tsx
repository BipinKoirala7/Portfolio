import { TbSmartHome } from "react-icons/tb";
import { HiFolderOpen } from "react-icons/hi2";
import Link from "~/UI/Link";

import { easeInOut, motion, type ValueTransition } from "motion/react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import usePortfolioDataStore from "~/data/zustand";

function FloatingNavigation() {
  const { email, linkedIn_account } = usePortfolioDataStore(state => state.user);

  const transition: ValueTransition = {
    duration: 0.2,
    ease: easeInOut,
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={transition}
      className="z-10 w-fit fixed bottom-5 flex items-center gap-1 rounded-4xl border-[1px] border-accent-1 p-1 bg-primary"
    >
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
      <p className="w-[1px] h-8 bg-accent-1" />
      <a
        href={`mailto:${email}`}
        className="flex gap-2 items-center px-3 py-2 text-[0.75rem] rounded-4xl hover:bg-[#262626] text-text-accent hover:text-text cursor-pointer transition-all duration-300"
      >
        <IoMdMail className="text-[1.25rem]" />
      </a>
      <a
        href={linkedIn_account}
        className="flex gap-2 items-center px-3 py-2 text-[0.75rem] rounded-4xl hover:bg-[#262626] text-text-accent hover:text-text cursor-pointer transition-all duration-300"
      >
        {" "}
        <FaLinkedin className="text-[1.25rem]" />
      </a>
    </motion.div>
  );
}

export default FloatingNavigation;
