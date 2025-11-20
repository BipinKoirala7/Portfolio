import { TbSmartHome } from "react-icons/tb";
import { HiFolderOpen } from "react-icons/hi2";
import Link from "~/UI/Link";

import { easeInOut, motion, type ValueTransition } from "motion/react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function FloatingNavigation() {
  const transition: ValueTransition = {
    duration: 0.2,
    ease: easeInOut,
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={transition}
      className="z-10 w-fit fixed bottom-5 flex items-center gap-2 rounded-4xl border-[1px] border-accent-1 p-1 bg-primary"
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
      <a href="mailto:bipinkoirala2061@gmail.com">
        <IoMdMail className="text-[1.25rem]" />
      </a>
      <a href="https://www.linkedin.com/in/bipin-koirala-6b616636a/">
        {" "}
        <FaLinkedin className="text-[1.25rem]" />
      </a>
    </motion.div>
  );
}

export default FloatingNavigation;
