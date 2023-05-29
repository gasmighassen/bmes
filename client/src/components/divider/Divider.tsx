import React, { HTMLAttributes } from "react";
import "../../_dist/Divider.css";
interface DividerProps extends HTMLAttributes<HTMLDivElement>{}

const Divider = ({...props}: DividerProps) => {
  return <div {...props}
  className={`bmes__divider${
    props.className === undefined ? "" : ` ${props.className}`
  }`}></div>;
};

export default Divider;
