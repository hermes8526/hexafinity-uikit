import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.6488 20.1565C4.6488 20.837 5.20267 21.3908 5.88318 21.3908H19.352V18.9221H5.88313C5.20268 18.9221 4.6488 19.476 4.6488 20.1565Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.77393 6.29441C6.77393 5.85223 7.13238 5.49377 7.57457 5.49377H16.4255C16.8677 5.49377 17.2261 5.85223 17.2261 6.29441C17.2261 6.7366 16.8677 7.09505 16.4255 7.09505L7.57457 7.09505C7.13238 7.09505 6.77393 6.7366 6.77393 6.29441Z"/>
        <path opacity="0.48" fillRule="evenodd" clipRule="evenodd" d="M20.1566 1H5.88309C4.3149 1 3.03931 2.27559 3.03931 3.84378V20.1564C3.03931 21.7246 4.3149 23.0002 5.88304 23.0002H20.1566C20.601 23.0002 20.9613 22.6399 20.9613 22.1955V1.8047C20.9613 1.3603 20.6011 1 20.1566 1ZM5.88313 21.3908C5.20262 21.3908 4.64876 20.8369 4.64876 20.1564C4.64876 19.4759 5.20263 18.9221 5.88309 18.9221H19.3519V21.3908H5.88313ZM7.57457 5.49377C7.13238 5.49377 6.77393 5.85223 6.77393 6.29441C6.77393 6.7366 7.13238 7.09505 7.57457 7.09505L16.4255 7.09505C16.8677 7.09505 17.2261 6.7366 17.2261 6.29441C17.2261 5.85223 16.8677 5.49378 16.4255 5.49378L7.57457 5.49377Z"/>
    </Svg>
  );
};

export default Icon;
