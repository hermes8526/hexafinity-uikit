import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 4C3 3.44772 3.44772 3 4 3H6C6.55228 3 7 3.44772 7 4V6C7 6.55228 6.55228 7 6 7H4C3.44772 7 3 6.55228 3 6V4Z" />
      <path d="M10 4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4V6C14 6.55228 13.5523 7 13 7H11C10.4477 7 10 6.55228 10 6V4Z" />
      <path d="M21 4C21 3.44772 20.5523 3 20 3H18C17.4477 3 17 3.44772 17 4V6C17 6.55228 17.4477 7 18 7H20C20.5523 7 21 6.55228 21 6V4Z" />
      <path d="M3 11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V11Z" />
      <path d="M7 18C7 17.4477 6.55228 17 6 17H4C3.44772 17 3 17.4477 3 18V20C3 20.5523 3.44772 21 4 21H6C6.55228 21 7 20.5523 7 20V18Z" />
      <path d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z" />
      <path d="M14 18C14 17.4477 13.5523 17 13 17H11C10.4477 17 10 17.4477 10 18V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V18Z" />
      <path d="M17 11C17 10.4477 17.4477 10 18 10H20C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H18C17.4477 14 17 13.5523 17 13V11Z" />
      <path d="M21 18C21 17.4477 20.5523 17 20 17H18C17.4477 17 17 17.4477 17 18V20C17 20.5523 17.4477 21 18 21H20C20.5523 21 21 20.5523 21 20V18Z" />
    </Svg>
  );
};

export default Icon;
