import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.0189 7.99899L11.0089 7.99899C10.4589 7.99899 10.0089 8.44899 10.0089 8.99899C10.0089 9.54899 10.4589 9.99899 11.0089 9.99899L17.0189 9.99899L17.0189 11.789C17.0189 12.239 17.5589 12.459 17.8689 12.139L20.6489 9.34899C20.8389 9.14899 20.8389 8.83899 20.6489 8.63899L17.8689 5.84899C17.5589 5.52899 17.0189 5.75899 17.0189 6.19899L17.0189 7.99899ZM3.35893 15.349L6.14893 18.139C6.45893 18.459 6.99893 18.239 6.99893 17.789L6.99893 15.999L13.0089 15.999C13.5589 15.999 14.0089 15.549 14.0089 14.999C14.0089 14.449 13.5589 13.999 13.0089 13.999L6.99893 13.999L6.99893 12.209C6.99893 11.759 6.45893 11.539 6.14893 11.859L3.35893 14.649C3.16893 14.839 3.16893 15.159 3.35893 15.349Z" />
    </Svg>
  );
};

export default Icon;
