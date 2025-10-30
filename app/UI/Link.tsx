import { useState, type ReactElement } from "react";
import { NavLink } from "react-router";

type LinkProps = {
  icon: ReactElement;
  placeholder: string;
  to: string;
};

function Link(props: LinkProps) {
  const { icon, placeholder, to } = props;
  const [hide, setHide] = useState(false);

  return (
    <NavLink
      onMouseEnter={() => setHide((prev) => !prev)}
      onMouseLeave={() => setHide((prev) => !prev)}
      style={({ isActive }) => ({
        color: isActive ? "white" : undefined,
      })}
      className={`flex gap-2 items-center px-3 py-2 text-[0.75rem] rounded-4xl hover:bg-[#262626] text-text-accent hover:text-text transition-all duration-300`}
      to={to}
    >
      {icon}
      {hide && placeholder}
    </NavLink>
  );
}

export default Link;
