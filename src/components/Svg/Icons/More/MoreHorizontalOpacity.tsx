import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        opacity="0.48"
        d="M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0Z"
      />
      <path d="M9 12C9 11.175 8.325 10.5 7.5 10.5C6.675 10.5 6 11.175 6 12C6 12.825 6.675 13.5 7.5 13.5C8.325 13.5 9 12.825 9 12ZM10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5C11.175 10.5 10.5 11.175 10.5 12ZM15 12C15 12.825 15.675 13.5 16.5 13.5C17.325 13.5 18 12.825 18 12C18 11.175 17.325 10.5 16.5 10.5C15.675 10.5 15 11.175 15 12Z" />
    </Svg>
  );
};

export default Icon;
