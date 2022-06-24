import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.9 6.6144L17.1934 6.89199C14.8555 7.81055 12.196 7.26858 10.4039 5.50837C9.44485 4.56637 7.99556 4.33255 6.78892 4.92514L6.1 5.26348V14.2183C8.36275 13.4332 10.906 13.9827 12.6463 15.6921C13.5376 16.5676 14.8604 16.8372 16.0233 16.3803L17.9 15.6429V6.6144ZM4.95699 4.04228C4.67725 4.17966 4.5 4.46419 4.5 4.77584V15.5987C4.5 16.122 5.04881 16.4639 5.51851 16.2332L6.08361 15.9557C7.89991 15.0636 10.0815 15.4156 11.5251 16.8336C12.8668 18.1514 14.8579 18.5572 16.6084 17.8695L18.8302 16.9965C19.2343 16.8378 19.5 16.4479 19.5 16.0138V5.63313C19.5 4.97675 18.8391 4.52636 18.2282 4.76638L16.6084 5.40281C14.8579 6.09053 12.8668 5.68475 11.5251 4.3669C10.0815 2.94895 7.89991 2.59698 6.08361 3.48899L4.95699 4.04228Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 4.77572C4.5 4.46407 4.67725 4.17954 4.95699 4.04216L6.08361 3.48886C7.89991 2.59686 10.0815 2.94882 11.5251 4.36678C12.8668 5.68463 14.8579 6.0904 16.6084 5.40268L18.2282 4.76626C18.8391 4.52624 19.5 4.97663 19.5 5.63301V16.0136C19.5 16.4478 19.2343 16.8377 18.8302 16.9964L16.6084 17.8694C14.8579 18.5571 12.8668 18.1513 11.5251 16.8334C10.0858 15.4198 7.91302 15.0657 6.1 15.9475V21.1999C6.1 21.6417 5.74183 21.9999 5.3 21.9999C4.85817 21.9999 4.5 21.6417 4.5 21.1999V4.77572ZM17.1934 6.89187L17.9 6.61427V15.6428L16.0233 16.3802C14.8604 16.837 13.5376 16.5675 12.6463 15.692C10.906 13.9826 8.36275 13.4331 6.1 14.2182V5.26335L6.78892 4.92502C7.99556 4.33242 9.44485 4.56625 10.4039 5.50825C12.196 7.26846 14.8555 7.81043 17.1934 6.89187Z"/>
    </Svg>
  );
};

export default Icon;
