import { NavLink } from "react-router";

type LinkProps = {
  placeholder: string;
  link: string;
};

function Link(props: LinkProps) {
  const { placeholder, link } = props;
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "white" : undefined,
      })}
      className={`text-[1.25rem] text-text-accent hover:text-text`}
      to={link}
    >
      {placeholder}
    </NavLink>
  );
}

export default Link;
