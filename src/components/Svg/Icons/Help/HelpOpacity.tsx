import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <g opacity="0.48">
          <path d="M12.0005 0C5.37525 0 0.00044632 5.36802 0.00044632 11.9937C0.00044632 18.6257 5.37525 24 12.0004 24C18.6293 24 23.9995 18.6256 23.9995 11.9937C23.9996 5.36802 18.6293 0 12.0005 0Z"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.2123 17.998C12.4016 17.9502 12.5748 17.8564 12.7317 17.7168C12.9701 17.505 13.0894 17.2136 13.0898 16.8427C13.0898 16.5089 12.9756 16.228 12.7479 16.0003C12.5198 15.7726 12.2389 15.6588 11.9051 15.6588C11.5659 15.6588 11.28 15.7726 11.0469 16.0003C10.8138 16.228 10.6969 16.5089 10.6969 16.8427C10.6969 17.219 10.8177 17.5119 11.0589 17.721C11.2168 17.8585 11.3925 17.9508 11.586 17.998H12.2123ZM15.0481 11.2355C15.3001 10.9888 15.5174 10.6964 15.7003 10.3572C15.8832 10.018 15.9746 9.62319 15.9739 9.17357C15.9739 8.60129 15.8134 8.07144 15.4931 7.58408C15.1724 7.09635 14.7178 6.71082 14.1297 6.4276C13.5416 6.14394 12.8636 6.00195 12.0953 6.00195C11.2692 6.00195 10.5456 6.17176 9.92586 6.51096C9.30577 6.84977 8.83422 7.27774 8.51084 7.79444C8.18783 8.31113 8.02614 8.82128 8.02614 9.32449C8.02614 9.56836 8.12802 9.79485 8.33177 10.004C8.5359 10.2132 8.78632 10.3178 9.08308 10.3178C9.58591 10.3178 9.92781 10.0184 10.1084 9.41943C10.2994 8.84715 10.5321 8.41419 10.8076 8.12015C11.0832 7.8261 11.5123 7.67908 12.0953 7.67908C12.5935 7.67908 13.0003 7.82496 13.3155 8.1163C13.6312 8.40764 13.7882 8.76497 13.7882 9.18905C13.7882 9.40628 13.7373 9.60733 13.6335 9.79295C13.5304 9.97819 13.4034 10.1464 13.2522 10.2977C13.1013 10.4486 12.8563 10.6724 12.5171 10.9691C12.13 11.3083 11.8229 11.6009 11.5948 11.8474C11.3671 12.094 11.1838 12.3799 11.0468 12.706C10.9091 13.0321 10.84 13.4176 10.84 13.8625C10.84 14.2175 10.9338 14.4849 11.1217 14.6651C11.3104 14.8454 11.5419 14.9353 11.8175 14.9353C12.3473 14.9353 12.6626 14.6598 12.7629 14.1087C12.8219 13.849 12.8655 13.6673 12.8945 13.5642C12.9234 13.4609 12.9643 13.3574 13.0176 13.254C13.0705 13.1506 13.1515 13.0368 13.2599 12.9121C13.3684 12.7879 13.5131 12.6436 13.6929 12.4792C14.3451 11.8965 14.7969 11.482 15.0481 11.2355Z"/>
    </Svg>
  );
};

export default Icon;
