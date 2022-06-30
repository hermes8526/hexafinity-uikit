import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.60883 6.67218C3.63633 6.39348 3.53275 6.11856 3.33108 5.93151L1.27775 3.38073V3H7.65592L12.5858 14.1431L16.9198 3H23V3.38073L21.2437 5.1162C21.0924 5.23524 21.0173 5.4308 21.0484 5.62447V18.3765C21.0173 18.5692 21.0924 18.7648 21.2437 18.8838L22.9587 20.6193V21H14.3311V20.6193L16.1085 18.8413C16.2827 18.6618 16.2827 18.6089 16.2827 18.334V8.02693L11.3428 20.9584H10.6754L4.92333 8.02693V16.6939C4.87567 17.0576 4.993 17.4251 5.24142 17.6878L7.55233 20.5768V20.9584H1V20.5768L3.31092 17.6878C3.55842 17.4242 3.66842 17.0548 3.60883 16.6939V6.67218Z"
      />
    </Svg>
  );
};

export default Icon;
