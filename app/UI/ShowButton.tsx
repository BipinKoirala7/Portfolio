import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
};

function ShowButton(props: ButtonProps) {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
}

export default ShowButton;
