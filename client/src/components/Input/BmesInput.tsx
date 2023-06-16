import React, { HTMLProps } from "react";
import "../../_dist/BmesInput.css";
import Divider from "../divider/Divider";
interface InputBmesProps extends HTMLProps<HTMLInputElement> {}

const BmesInput = ({ ...props }: InputBmesProps) => {
  return (
    <div className="bmes__input__wrapper">
      <input
        {...props}
        className={`bmes__input${
          props.className === undefined ? "" : ` ${props.className}`
        }`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default BmesInput;
