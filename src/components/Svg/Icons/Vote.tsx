import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 16 17" {...props}>
          <g clipPath="url(#clip0_6265_5331)">
              <path d="M4.13651 5.90336C3.94125 5.7081 3.94125 5.39151 4.13651 5.19625L4.82115 4.51161C5.01641 4.31635 5.33299 4.31635 5.52826 4.51161L13.8675 12.8508C14.0627 13.0461 14.0627 13.3627 13.8675 13.5579L13.1828 14.2426C12.9876 14.4378 12.671 14.4378 12.4757 14.2426L4.13651 5.90336Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.44021 6.60161C3.24495 6.40635 2.92836 6.40635 2.7331 6.60161L1.35331 7.98141C1.15805 8.17667 1.15805 8.49325 1.35331 8.68851L4.12556 11.4608C4.32082 11.656 4.63741 11.656 4.83267 11.4608L6.21246 10.081C6.40772 9.88571 6.40772 9.56913 6.21246 9.37386L3.44021 6.60161ZM8.99595 6.59038C9.19121 6.78564 9.50779 6.78564 9.70305 6.59038L11.0843 5.20916C11.2795 5.01389 11.2795 4.69731 11.0843 4.50205L8.31202 1.7298C8.11676 1.53454 7.80018 1.53454 7.60492 1.7298L6.2237 3.11102C6.02843 3.30628 6.02843 3.62287 6.2237 3.81813L8.99595 6.59038Z"/>
              <path d="M1 13.5197C1 13.354 1.13431 13.2197 1.3 13.2197H6.7C6.86569 13.2197 7 13.354 7 13.5197V14.4197C7 14.5854 6.86569 14.7197 6.7 14.7197H1.3C1.13431 14.7197 1 14.5854 1 14.4197V13.5197Z"/>
          </g>
          <defs>
              <clipPath id="clip0_6265_5331">
                  <rect width="16" height="16" transform="translate(0 0.719727)"/>
              </clipPath>
          </defs>
      </Svg>

  );
};

export default Icon;
