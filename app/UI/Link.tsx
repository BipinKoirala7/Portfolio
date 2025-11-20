import { motion } from "motion/react";
import { useState, type ReactElement } from "react";
import { useNavigate } from "react-router";

type LinkProps = {
  icon: ReactElement;
  placeholder: string;
  to: string;
};

function Link(props: LinkProps) {
  const { icon, placeholder, to } = props;
  const [hide, setHide] = useState(false);

  const navigate = useNavigate();

  return (
    <motion.div
      onMouseEnter={() => setHide((prev) => !prev)}
      onMouseLeave={() => setHide((prev) => !prev)}
      onClick={() => navigate(to)}
      className={`flex gap-2 items-center px-3 py-2 text-[0.75rem] rounded-4xl hover:bg-[#262626] text-text-accent hover:text-text cursor-pointer transition-all duration-300`}
    >
      {icon}
      {hide && placeholder}
    </motion.div>
  );
}

export default Link;
