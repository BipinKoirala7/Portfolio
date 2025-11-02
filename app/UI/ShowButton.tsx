import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
};

function ShowButton(props: ButtonProps) {
  const { className, children } = props;
  return <button className={className}>{children}</button>;
}

export default ShowButton;
