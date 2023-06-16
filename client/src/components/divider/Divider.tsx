import React, { HTMLAttributes } from "react";
import "../../_dist/Divider.css";
interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  type: "Horizontal" | "Vertical";
}

const Divider = ({ type = "Vertical", ...props }: DividerProps) => {
  return (
    <div
      {...props}
      className={`bmes__divider${type}${
        props.className === undefined ? "" : ` ${props.className}`
      }`}
    ></div>
  );
};

export default Divider;
