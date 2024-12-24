import { ReactNode } from "react";

interface ButtonContainerProps {
  children: ReactNode;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <div className="button-container">{children}</div>;
};

export default ButtonContainer;
