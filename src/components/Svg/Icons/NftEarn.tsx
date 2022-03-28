import React from "react";
import Svg from "../Svg";
import {SvgProps} from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1"/>
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7945 9.11454C23.0627 8.96182 23.3904 8.96182 23.6586 9.11454L30.552 13.0397C30.8287 13.1973 31 13.4934 31 13.8144V21.6277C31 21.9487 30.8287 22.2448 30.552 22.4024L23.6586 26.3276C23.3904 26.4803 23.0627 26.4803 22.7945 26.3276L15.9011 22.4024C15.6243 22.2448 15.4531 21.9487 15.4531 21.6277V13.8144C15.4531 13.4934 15.6244 13.1973 15.9011 13.0397L22.7945 9.11454Z"
        fill="white"
      />
      <path
        d="M18.0528 19.7791V17.0698H18.0559L20.1185 19.7791H20.9879V15.4186H19.982V18.1247L17.9258 15.4186H17.0469V19.7791H18.0528Z"
        fill="white"
      />
      <path
        d="M23.3308 19.7791V18.1728H25.0792V17.3231H23.3308V16.3228H25.3679V15.4186H22.3249V19.7791H23.3308Z"
        fill="white"
      />
      <path
        d="M28.3328 19.7791V16.3228H29.5385V15.4186H26.1243V16.3228H27.3332V19.7791H28.3328Z"
        fill="white"
      />
      <path
        d="M9 22.2414C9 20.5178 11.1849 19.0732 14.1285 18.6826V22.3549C14.1285 22.6873 14.3048 22.9942 14.5905 23.1591L18.696 25.5297C17.8007 25.7696 16.7932 25.9044 15.7279 25.9044C12.013 25.9044 9 24.2653 9 22.2414Z"
        fill="white"
      />
      <path
        d="M15.7279 26.9923C17.2942 26.9923 18.7352 26.701 19.8784 26.2124L21.1592 26.952C19.9352 27.8617 17.9586 28.4522 15.7279 28.4522C12.0113 28.4522 9 26.8131 9 24.7893V23.3557C9.01722 25.371 12.0225 26.9923 15.7279 26.9923Z"
        fill="white"
      />
      <path
        d="M15.7279 29.5401C18.4701 29.5401 20.8282 28.6473 21.8763 27.366L22.4261 27.6835C22.1057 29.5447 19.2299 31 15.7279 31C12.0113 31 9 29.3609 9 27.3371V25.9035C9.01722 27.9188 12.0225 29.5401 15.7279 29.5401Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
