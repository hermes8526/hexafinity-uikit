import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 14.8194V6.4292C11.7621 6.4512 11.527 6.48832 11.2877 6.49932H4.4375C4.058 6.49932 3.75 6.80732 3.75 7.18682V7.87432H1.6875C1.308 7.87432 1 8.18232 1 8.56182V12.6868C1 13.0663 1.308 13.3743 1.6875 13.3743H3.75V14.0618C3.75 14.4413 4.058 14.7493 4.4375 14.7493H4.85412L7.61787 22.1166C7.78699 22.5579 8.16511 22.8783 8.62986 22.9718C8.72199 22.9911 8.81411 23.0007 8.90486 23.0007C9.27199 23.0007 9.62124 22.8549 9.87149 22.5937L11.5229 20.9561C11.945 20.5339 12.0454 19.8753 11.7759 19.3652L9.46861 14.7493H11.2946C11.5311 14.7603 11.7649 14.7974 12 14.8194Z" />
      <path d="M22.8872 1.33202C22.8735 1.30864 22.8611 1.28939 22.8432 1.26739C22.7676 1.17114 22.6727 1.09277 22.5559 1.04739C22.5517 1.04602 22.549 1.04052 22.5449 1.03914C22.5311 1.03502 22.5187 1.04189 22.505 1.03777C22.4431 1.01989 22.3812 0.999268 22.3125 0.999268C22.2657 0.999268 22.2245 1.01714 22.1791 1.02677C22.153 1.03227 22.1282 1.03364 22.1021 1.04189C21.9839 1.08039 21.8821 1.14639 21.801 1.23714C21.7955 1.24264 21.7872 1.24402 21.7817 1.24952C19.6381 3.85239 16.6489 5.59314 13.375 6.23113V15.0187C16.6489 15.6567 19.6381 17.3961 21.7817 19.999C21.7872 20.0059 21.7969 20.0086 21.8037 20.0169C21.8519 20.0705 21.911 20.1131 21.9742 20.1489C21.9949 20.1612 22.0114 20.1791 22.032 20.1887C22.1186 20.2259 22.2121 20.2492 22.3125 20.2492C22.3909 20.2492 22.4679 20.2355 22.5449 20.2094C22.549 20.208 22.5517 20.2025 22.5559 20.2011C22.6727 20.1557 22.7676 20.0787 22.8432 19.9811C22.8597 19.9591 22.8721 19.9399 22.8872 19.9165C22.9532 19.8106 23 19.6937 23 19.5617V1.68677C23 1.55477 22.9532 1.43789 22.8872 1.33202Z" />
    </Svg>
  );
};

export default Icon;
