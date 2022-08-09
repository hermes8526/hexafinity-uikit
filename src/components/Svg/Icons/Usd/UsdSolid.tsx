import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.6005 11.0834C14.518 11.4697 16 12.2774 16 14.1388C16 15.7332 14.8762 16.7165 13.1272 17.0045V18.1072H11.0833V17.0256C8.84972 16.7165 7.99983 15.2626 7.99983 13.8929H10.2264C10.2264 14.6866 10.8656 15.2204 12.0034 15.2204C13.2466 15.2204 13.7453 14.8552 13.7453 14.1317C13.7453 13.4715 13.064 13.1976 11.8278 12.9166C10.2194 12.5303 8.23864 11.8981 8.23864 9.87528C8.23864 8.41431 9.17984 7.34669 11.0833 7.10788V5.89275H13.1272V7.16407C14.827 7.49419 15.6699 8.56181 15.6699 10.0649H13.4433C13.4433 9.53111 13.064 8.99729 11.8981 8.99729C10.711 8.99729 10.4652 9.45384 10.4652 9.88932C10.4652 10.5004 11.0973 10.8024 12.6005 11.0834Z"
        // fill="#556E9A"
      />
    </Svg>
  );
};

export default Icon;
