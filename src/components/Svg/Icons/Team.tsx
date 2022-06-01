import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#1263F1"/>
      <path opacity="0.48" d="M27.8285 20.7373H25.5953C23.8456 20.7373 22.4127 22.164 22.4127 23.9137V27.4161C22.4127 28.4659 23.2763 29.3258 24.3261 29.3258H29.0977C30.1475 29.3258 31.0012 28.4659 31.0012 27.4161V23.9137C31.0012 22.164 29.5781 20.7373 27.8285 20.7373Z" fill="white"/>
      <path opacity="0.48" d="M26.7119 14.231C25.1382 14.231 23.858 15.5112 23.858 17.0848C23.858 18.6585 25.1382 19.9387 26.7119 19.9387C28.2855 19.9387 29.5658 18.6585 29.5658 17.0848C29.5658 15.5113 28.2855 14.231 26.7119 14.231Z" fill="white"/>
      <path opacity="0.48" d="M14.4169 20.7373H12.1838C10.4341 20.7373 9.00122 22.164 9.00122 23.9136V27.416C9.00122 28.4658 9.86477 29.3257 10.9146 29.3257H15.6862C16.736 29.3257 17.5897 28.4658 17.5897 27.416V23.9136C17.5897 22.164 16.1666 20.7373 14.4169 20.7373Z" fill="white"/>
      <path d="M21.9444 19.0876H18.0581C16.3084 19.0876 14.885 20.5111 14.885 22.2607V28.6855C14.885 29.036 15.1692 29.3201 15.5196 29.3201H24.4828C24.8333 29.3201 25.1174 29.036 25.1174 28.6855V22.2607C25.1174 20.5111 23.694 19.0876 21.9444 19.0876Z" fill="white"/>
      <path d="M20.0012 10.6741C17.8971 10.6741 16.1852 12.386 16.1852 14.4901C16.1852 16.5943 17.897 18.3062 20.0012 18.3062C22.1055 18.3062 23.8173 16.5943 23.8173 14.4901C23.8173 12.386 22.1054 10.6741 20.0012 10.6741Z" fill="white"/>
      <path opacity="0.48" d="M13.3003 14.231C11.7266 14.231 10.4464 15.5112 10.4464 17.0848C10.4464 18.6585 11.7266 19.9387 13.3003 19.9387C14.8739 19.9387 16.1541 18.6585 16.1541 17.0848C16.1541 15.5113 14.8739 14.231 13.3003 14.231Z" fill="white"/>
    </Svg>
  );
};

export default Icon;