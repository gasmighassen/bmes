import React, { HTMLProps } from "react";
import "../../_dist/BmesTextArea.css";
interface BmesTextAreaProps extends HTMLProps<HTMLTextAreaElement> {}

const BmesTextArea = ({ ...props }: BmesTextAreaProps) => {
  return (
    <textarea
      {...props}
      className={`bmes__textArea${
        props.className === undefined ? "" : ` ${props.className}`
      }`}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default BmesTextArea;
