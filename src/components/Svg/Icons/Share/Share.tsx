import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4455 8.73398C20.5812 8.73398 22.3125 7.00267 22.3125 4.86699C22.3125 2.73131 20.5812 1 18.4455 1C16.3098 1 14.5785 2.73131 14.5785 4.86699C14.5785 5.24159 14.6318 5.60375 14.7311 5.94631L8.2323 9.81117C8.71482 10.2744 9.07742 10.8617 9.26887 11.5217L15.7677 7.65681C16.4626 8.32395 17.4061 8.73398 18.4455 8.73398ZM18.4455 6.73398C19.4766 6.73398 20.3125 5.8981 20.3125 4.86699C20.3125 3.83588 19.4766 3 18.4455 3C17.4144 3 16.5785 3.83588 16.5785 4.86699C16.5785 5.8981 17.4144 6.73398 18.4455 6.73398Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33711 13.4082C9.3924 13.1479 9.42148 12.8778 9.42148 12.601C9.42148 10.4653 7.69017 8.73401 5.55449 8.73401C3.41881 8.73401 1.6875 10.4653 1.6875 12.601C1.6875 14.7367 3.41881 16.468 5.55449 16.468C6.69474 16.468 7.71972 15.9745 8.42749 15.1894L14.6522 18.3778C14.7865 17.6993 15.0983 17.0846 15.5373 16.5841L9.33711 13.4082ZM5.55449 14.468C6.5856 14.468 7.42148 13.6321 7.42148 12.601C7.42148 11.5699 6.5856 10.734 5.55449 10.734C4.52338 10.734 3.6875 11.5699 3.6875 12.601C3.6875 13.6321 4.52338 14.468 5.55449 14.468Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3125 19.133C22.3125 21.2687 20.5812 23 18.4455 23C16.3098 23 14.5785 21.2687 14.5785 19.133C14.5785 16.9973 16.3098 15.266 18.4455 15.266C20.5812 15.266 22.3125 16.9973 22.3125 19.133ZM20.3125 19.133C20.3125 20.1641 19.4766 21 18.4455 21C17.4144 21 16.5785 20.1641 16.5785 19.133C16.5785 18.1019 17.4144 17.266 18.4455 17.266C19.4766 17.266 20.3125 18.1019 20.3125 19.133Z"
      />
    </Svg>
  );
};

export default Icon;