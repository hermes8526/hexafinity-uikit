import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 4C3 3.44772 3.44772 3 4 3H6C6.55228 3 7 3.44772 7 4V6C7 6.55228 6.55228 7 6 7H4C3.44772 7 3 6.55228 3 6V4Z"/>
      <path d="M3 11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V11Z"/>
      <path d="M6 17C6.55228 17 7 17.4477 7 18V20C7 20.5523 6.55228 21 6 21H4C3.44772 21 3 20.5523 3 20V18C3 17.4477 3.44772 17 4 17H6Z"/>
      <path d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H11Z"/>
      <path d="M10 5C10 4.44772 10.4477 4 11 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H11C10.4477 6 10 5.55228 10 5Z"/>
      <path d="M11 18C10.4477 18 10 18.4477 10 19C10 19.5523 10.4477 20 11 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H11Z"/>
    </Svg>
  );
};

export default Icon;
