import { TbSmartHome } from "react-icons/tb";
import { HiFolderOpen } from "react-icons/hi2";
import { BiSolidUserDetail } from "react-icons/bi";
import Link from "~/UI/Link";

import { easeInOut, motion, type ValueTransition } from "motion/react";

function FloatingNavigation() {
  const transition: ValueTransition = {
    duration: 0.2,
    ease: easeInOut
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={transition}
      className="z-10 w-fit fixed bottom-5 flex gap-1 rounded-4xl border-[1px] border-accent-1 p-1 bg-primary"
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
      <Link
        to="/about"
        icon={<BiSolidUserDetail className="text-[1.25rem]" />}
        placeholder="About"
      />
    </motion.div>
  );
}

export default FloatingNavigation;
