import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g clip-path="url(#clip0_170_10725)">
        <path d="M23.2199 5.743L20.2089 1.675C19.8386 1.15734 19.3503 0.735369 18.7844 0.444077C18.2186 0.152784 17.5914 0.000553721 16.9549 1.76239e-06H7.04493C6.41156 -0.000592735 5.7871 0.149225 5.22295 0.437125C4.6588 0.725025 4.17108 1.14278 3.79993 1.656L0.734925 5.753C0.235889 6.45669 -0.0218295 7.30308 0.000343227 8.16547C0.022516 9.02786 0.323388 9.85989 0.857925 10.537L9.64993 22.865C9.93011 23.2198 10.2872 23.5063 10.6943 23.7029C11.1014 23.8995 11.5478 24.0011 11.9999 24C12.4598 23.9991 12.9133 23.8927 13.3255 23.689C13.7378 23.4853 14.0978 23.1897 14.3779 22.825L23.0999 10.634C23.6584 9.94699 23.9732 9.0941 23.9949 8.20899C24.0166 7.32388 23.744 6.45658 23.2199 5.743ZM18.5919 2.851L21.6099 6.929C21.6259 6.951 21.6299 6.977 21.6459 7H16.7539L15.3259 2H16.9549C17.2759 2.001 17.5919 2.07876 17.8767 2.2268C18.1615 2.37485 18.4067 2.58887 18.5919 2.851ZM11.9999 19.118L9.29993 9H14.6999L11.9999 19.118ZM9.32593 7L10.7539 2H13.2459L14.6739 7H9.32593ZM5.41692 2.837C5.60247 2.57839 5.84687 2.36762 6.12994 2.22208C6.41301 2.07655 6.72664 2.00043 7.04493 2H8.67393L7.24592 7H2.31793C2.33193 6.978 2.33593 6.951 2.35193 6.93L5.41692 2.837ZM2.44793 9.325C2.37572 9.22302 2.31375 9.11415 2.26293 9H7.23193L10.2259 20.23L2.44793 9.325ZM13.7709 20.24L16.7709 9H21.7569C21.6925 9.14927 21.6109 9.29055 21.5139 9.421L13.7709 20.24Z" fill="white" fill-opacity="0.7" />
      </g>
      <defs>
        <clipPath id="clip0_170_10725">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;