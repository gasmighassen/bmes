import { ButtonHTMLAttributes } from "react";
import "../../_dist/ButtonBmes.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary"|"warning";
}

const ButtonBmes = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bmes-${variant}${
        props.className === undefined ? "" : ` ${props.className}`
      }`}
    >
      {props.children}
    </button>
  );
};

export default ButtonBmes;
