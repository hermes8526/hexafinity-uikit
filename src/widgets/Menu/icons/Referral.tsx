import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M14.4545 8.25C14.4545 7.09625 14.0455 6.03187 13.3664 5.195C13.71 5.08125 14.07 5 14.4545 5C16.2627 5 17.7273 6.45438 17.7273 8.25C17.7273 10.0456 16.2627 11.5 14.4545 11.5C14.1027 11.5 13.7673 11.4269 13.4482 11.3294C13.4236 11.3212 13.3991 11.3131 13.3664 11.305C14.0704 10.4403 14.4545 9.36199 14.4545 8.25ZM15.8127 12.4181C16.9336 13.1737 17.7273 14.1975 17.7273 15.5625V18H21V15.5625C21 13.7913 18.0709 12.7431 15.8127 12.4181ZM9.54545 5C11.3536 5 12.8182 6.45438 12.8182 8.25C12.8182 10.0456 11.3536 11.5 9.54545 11.5C7.73727 11.5 6.27273 10.0456 6.27273 8.25C6.27273 6.45438 7.73727 5 9.54545 5ZM9.54545 12.3125C11.73 12.3125 16.0909 13.4012 16.0909 15.5625V18H3V15.5625C3 13.4012 7.36091 12.3125 9.54545 12.3125Z"/>
    </Svg>
  );
};

export default Icon;