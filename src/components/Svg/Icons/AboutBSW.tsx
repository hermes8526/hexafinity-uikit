import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#1263F1"/>
      <g clip-path="url(#clip0_4334_2818)">
      <path opacity="0.48" d="M29.2951 12.5156C28.4628 12.6801 27.6693 12.9124 27.0161 13.0575C25.5257 13.3914 24.1322 14.5333 23.8274 16.6235C23.5564 18.4911 24.1854 19.2943 23.9096 21.4668C23.4257 25.2601 19.787 26.5665 18.0886 27.36C17.1064 27.8148 14.7209 28.8599 12.8822 29.6582C14.8757 31.1291 17.3338 32 19.9999 32C26.629 32 31.9999 26.6294 31.9999 20.0007C31.9999 17.175 31.0225 14.5768 29.387 12.5301C29.358 12.5253 29.329 12.5205 29.2951 12.5156Z" fill="white"/>
      <path opacity="0.48" d="M18.65 18.2382C19.5742 16.2399 19.2403 16.235 19.9419 14.3577C20.8274 11.9772 23.5806 12.6546 24.3403 12.7562C25.5935 12.9255 25.9226 12.4804 28.5645 12.0546C28.6951 12.0353 28.8209 12.0159 28.9467 12.0014C26.75 9.5483 23.5564 8 20 8C15.2242 8 11.1016 10.7869 9.17097 14.827C13.129 15.8093 17.4016 17.943 18.65 18.2382ZM16.0274 10.0902C16.3758 10.1434 18.0693 12.2482 18.3887 17.6527C18.3887 17.6527 16.2113 17.1301 15.7419 16.0076C15.3548 15.0835 15.8581 13.869 16.0274 10.0902ZM29.3677 12.5046C29.3726 12.5143 29.3822 12.5191 29.3871 12.5288C29.358 12.5239 29.3242 12.5239 29.2951 12.5191C29.3193 12.5094 29.3435 12.5094 29.3677 12.5046ZM8 19.9993C8 19.0413 8.11129 18.1124 8.32419 17.2221C8.75968 17.585 9.22419 17.9866 9.71774 18.4462C12.8435 21.3444 17.929 23.633 19.7822 21.5041C19.7871 21.5089 19.7919 21.5089 19.7919 21.5138C19.4532 21.9589 18.1613 23.3669 15.6935 22.9314L11.7935 28.7521C9.46129 26.5651 8 23.454 8 19.9993Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9979 20.1405C31.9984 20.0935 31.9987 20.0465 31.9987 19.9993C31.9987 16.9269 30.844 14.1242 28.9448 12.0015C28.8356 12.0141 28.7263 12.0304 28.6139 12.0471L28.5634 12.0546C27.452 12.2337 26.75 12.4163 26.2162 12.5551C25.4812 12.7462 25.0654 12.8543 24.3394 12.7562C24.2755 12.7476 24.1975 12.735 24.1076 12.7205L24.1076 12.7205C23.1297 12.5622 20.7522 12.1775 19.9413 14.3577C19.6402 15.1635 19.5298 15.6243 19.4288 16.0458C19.2945 16.6064 19.1769 17.0976 18.6494 18.2382C18.1905 18.1296 17.3227 17.7726 16.2121 17.3156L16.2121 17.3156C14.3021 16.5297 11.6736 15.4481 9.1709 14.827C9.72903 13.659 10.4703 12.5958 11.3577 11.6743C13.5403 9.40916 16.6053 8 19.9993 8C22.9347 8 25.6227 9.05482 27.7072 10.8026C25.6223 9.05336 22.9338 8 19.9993 8C16.6044 8 13.5396 9.40846 11.3577 11.6743C9.70024 13.3944 8.55155 15.6081 8.15379 18.0731C8.20034 17.7858 8.25723 17.502 8.32418 17.2221C8.75964 17.585 9.22413 17.9866 9.71765 18.4462C12.8433 21.3444 17.9285 23.633 19.7816 21.5041C19.7835 21.506 19.7853 21.5071 19.7869 21.5081C19.7894 21.5097 19.7913 21.5108 19.7913 21.5138C19.4526 21.9589 18.1607 23.3669 15.6931 22.9314L11.7933 28.7521C9.46121 26.5651 8 23.454 8 19.9993C8 25.369 11.527 29.9148 16.3907 31.4466C15.1168 31.0444 13.9346 30.435 12.882 29.6582C14.7206 28.8599 17.1059 27.8148 18.0881 27.36C18.2312 27.2931 18.388 27.2227 18.5555 27.1474C20.3769 26.3288 23.4657 24.9406 23.9088 21.4668C24.0495 20.3583 23.9547 19.6063 23.864 18.8874C23.777 18.1975 23.6938 17.5381 23.8265 16.6235C24.1313 14.5333 25.5248 13.3914 27.0151 13.0575C27.2757 12.9996 27.5587 12.9278 27.8576 12.852C28.3077 12.7378 28.7938 12.6145 29.294 12.5156C29.2963 12.516 29.2986 12.5163 29.3009 12.5166C29.3147 12.512 29.3285 12.5102 29.3424 12.5084C29.3505 12.5073 29.3585 12.5062 29.3666 12.5046C29.369 12.5094 29.3726 12.5131 29.3763 12.5167C29.3799 12.5203 29.3835 12.5239 29.3859 12.5288C29.3765 12.5272 29.3667 12.5262 29.3566 12.5253C29.3665 12.5269 29.3762 12.5285 29.3859 12.5301C31.0213 14.5768 31.9987 17.175 31.9987 20.0007C31.9987 20.0474 31.9984 20.0939 31.9979 20.1405ZM16.027 10.0902C16.3754 10.1434 18.0688 12.2482 18.3881 17.6527C18.3881 17.6527 16.2108 17.1301 15.7415 16.0076C15.5184 15.475 15.5911 14.846 15.725 13.6853C15.8236 12.832 15.9552 11.6913 16.027 10.0902Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_4334_2818">
      <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
