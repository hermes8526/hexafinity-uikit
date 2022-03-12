import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface IProps extends SvgProps{
  isDark?: boolean
}

const Icon: React.FC<IProps> = (props) => {
  return (
    <Svg viewBox="0 0 146 32" fill="none" {...props}>
      <g clip-path="url(#clip0_183_4959)">
        <path d="M125.334 12.9747C125.026 12.2445 124.512 11.5144 123.895 11.0971C123.176 10.5755 122.354 10.1583 121.224 9.84536C119.786 9.42811 117.732 9.3238 115.369 9.42811C114.752 9.42811 114.136 9.53242 113.519 9.53242C112.903 9.63674 112.287 9.63674 111.67 9.74105C111.157 9.84536 110.643 9.84536 110.232 9.94967V13.9135C110.643 13.8092 111.157 13.7049 111.568 13.6006C112.184 13.4963 112.8 13.392 113.417 13.2877C114.033 13.1834 114.65 13.1834 115.266 13.079C117.012 12.9747 118.451 12.9747 119.273 13.1834C119.889 13.2877 120.403 13.4963 120.711 13.7049C121.019 13.9135 121.224 14.2265 121.327 14.6437C121.43 14.9567 121.533 15.2696 121.533 15.6869V15.9998L121.224 15.8955C119.889 15.4782 118.245 15.3739 116.396 15.3739C114.855 15.3739 113.622 15.4782 112.595 15.6869C111.568 15.8955 110.746 16.2084 110.129 16.6257C109.513 17.0429 109.102 17.4602 108.896 17.9817C108.691 18.5033 108.588 19.0249 108.588 19.6507V19.9637C108.588 20.5895 108.691 21.2154 108.999 21.737C109.205 22.2585 109.616 22.7801 110.232 23.3017C110.848 23.7189 111.67 24.1362 112.698 24.3448C113.725 24.6577 115.06 24.762 116.601 24.762C117.937 24.762 119.17 24.6577 120.197 24.3448C121.224 24.1362 121.43 24.0318 122.354 23.6146C122.663 23.406 123.485 23.3017 123.998 23.5103L124.923 24.0318H125.847V15.2696C125.847 14.748 125.642 13.8092 125.334 12.9747ZM121.533 21.1111H121.327C119.992 21.5284 118.553 21.737 116.91 21.737C115.985 21.737 115.163 21.737 114.65 21.6327C114.136 21.5284 113.725 21.5284 113.417 21.3197C113.109 21.2154 112.903 21.0068 112.8 20.7982C112.698 20.5895 112.698 20.3809 112.698 20.1723C112.698 19.9637 112.698 19.8594 112.8 19.6507C112.903 19.4421 113.109 19.2335 113.314 19.1292C113.519 19.0249 113.93 18.8162 114.444 18.8162C114.958 18.7119 115.677 18.7119 116.499 18.7119C117.423 18.7119 118.245 18.7119 119.067 18.8162C119.786 18.9205 120.505 19.0249 121.224 19.2335H121.43V21.1111H121.533Z" fill="white"/>
        <path d="M53.5235 11.3057C52.9071 10.6798 52.0853 10.1583 51.0579 9.74103C50.0306 9.32378 48.6951 9.11516 47.0513 9.11516C46.2295 9.11516 45.4076 9.21947 44.6885 9.32378C43.9694 9.4281 43.2502 9.63672 42.5311 9.84535L42.2229 9.94966V4.31679L38.8327 2.33485H38.0109V17.5645C38.0109 18.6076 38.1136 19.5464 38.4218 20.3809C38.6273 21.2154 39.1409 21.9456 39.7573 22.6758C40.3737 23.3016 41.1956 23.8232 42.2229 24.2405C43.2502 24.6577 44.5858 24.8663 46.2295 24.8663H47.0513C48.6951 24.8663 50.0306 24.6577 51.0579 24.2405C52.0853 23.9275 53.0099 23.406 53.6262 22.6758C54.2426 22.0499 54.6536 21.3197 54.9618 20.3809C55.1672 19.4421 55.3727 18.5033 55.3727 17.5645V16.417C55.3727 15.3739 55.27 14.4351 54.9618 13.6006C54.6536 12.6618 54.1399 11.9316 53.5235 11.3057ZM50.9552 18.399C50.9552 18.9205 50.7497 19.3378 50.4415 19.755C50.1333 20.068 49.7224 20.3809 49.106 20.6938C48.4896 20.9025 47.6677 21.0068 46.6404 21.0068C45.6131 21.0068 44.7912 20.9025 44.1748 20.6938C43.5584 20.4852 43.1475 20.1723 42.8393 19.755C42.5311 19.3378 42.4284 18.9205 42.3256 18.399C42.3256 17.9817 42.2229 17.4602 42.2229 16.9386V13.7049H42.3256C42.942 13.4963 43.6612 13.2877 44.3803 13.1833C45.0994 13.079 45.8186 12.9747 46.7432 12.9747C47.7705 12.9747 48.5923 13.079 49.106 13.2877C49.6197 13.4963 50.1333 13.8092 50.3388 14.1222C50.647 14.5394 50.7497 14.9567 50.8525 15.4782C50.8525 15.8955 50.9552 16.417 50.9552 16.9386C50.9552 17.4602 50.9552 17.9817 50.9552 18.399Z" fill="white"/>
        <path d="M60.4065 2.33485H60.201C59.2764 2.33485 58.66 2.54348 58.3518 2.85642C58.0436 3.27367 57.8382 3.69092 57.8382 4.31679V4.62973C57.8382 5.15129 58.0436 5.67285 58.3518 6.0901C58.66 6.50735 59.2764 6.61166 60.201 6.61166H60.4065C61.3311 6.61166 61.9475 6.40304 62.2557 6.0901C62.5639 5.67285 62.6666 5.2556 62.6666 4.62973V4.31679C62.6666 3.79523 62.4611 3.27367 62.1529 2.85642C61.9475 2.54348 61.3311 2.33485 60.4065 2.33485Z" fill="white"/>
        <path d="M58.1466 9.74106V24.2405H62.4614V11.723L59.0712 9.74106H58.1466Z" fill="white"/>
        <path d="M79.3094 16.73C78.8985 16.417 78.3848 16.1041 77.8712 15.8955C77.3575 15.6868 76.7411 15.5825 76.1247 15.4782C75.611 15.3739 74.9946 15.2696 74.481 15.2696C73.9673 15.2696 73.4536 15.2696 73.1454 15.1653C71.9126 15.1653 71.0908 15.061 70.5771 14.9567C69.7553 14.748 69.6525 14.3308 69.6525 13.9135C69.6525 13.7049 69.6525 13.6006 69.7553 13.4963C69.858 13.392 69.9607 13.1833 70.2689 13.079C70.4744 12.9747 70.8853 12.8704 71.2963 12.8704C71.7072 12.7661 72.3236 12.7661 73.1454 12.7661C74.3782 12.7661 75.611 12.8704 76.7411 12.9747C77.7684 13.079 78.8985 13.2877 80.0285 13.4963V9.84535C79.1039 9.63672 78.1793 9.4281 77.152 9.32378C76.1247 9.21947 74.9946 9.11516 73.9673 9.11516H72.94C71.399 9.11516 70.1662 9.21947 69.1389 9.53241C68.2143 9.74103 67.3924 10.1583 66.776 10.5755C66.1596 10.9928 65.7487 11.5143 65.5432 12.0359C65.3378 12.5575 65.235 13.1833 65.235 13.8092V14.1222C65.235 14.8523 65.3378 15.4782 65.6459 15.9998C65.9541 16.5213 66.2623 16.9386 66.6733 17.2515C67.0842 17.5645 67.5979 17.8774 68.1115 18.086C68.6252 18.2946 69.2416 18.399 69.7553 18.5033C70.3717 18.6076 70.8853 18.7119 71.399 18.7119C71.9126 18.7119 72.4263 18.8162 72.8372 18.8162C74.07 18.8162 74.8919 18.9205 75.4056 19.0248C76.2274 19.1291 76.4329 19.6507 76.4329 20.068C76.4329 20.1723 76.4329 20.3809 76.3302 20.4852C76.2274 20.5895 76.1247 20.7981 75.8165 20.9025C75.611 21.0068 75.2001 21.1111 74.7892 21.1111C74.3782 21.2154 73.7618 21.2154 73.0427 21.2154C71.8099 21.2154 70.3717 21.1111 69.0361 21.0068C67.8033 20.9025 66.4678 20.6938 65.3377 20.3809V24.0318C66.4678 24.2405 67.4951 24.4491 68.6252 24.5534C69.7553 24.6577 71.0908 24.762 72.3236 24.762H73.1454C74.6864 24.762 75.9192 24.6577 76.8438 24.3448C77.8712 24.1361 78.5903 23.7189 79.2067 23.3016C79.8231 22.8844 80.1313 22.3628 80.4395 21.8413C80.6449 21.3197 80.8504 20.6938 80.8504 20.068V19.755C80.8504 19.0248 80.7477 18.399 80.4395 17.8774C80.0285 17.4601 79.7203 17.0429 79.3094 16.73Z" fill="white"/>
        <path d="M100.267 19.2335L96.5685 9.74106H93.281L89.6854 19.2335L85.987 9.74106H82.1859V10.6799L87.7335 24.2405H91.5346L94.9247 15.4782L98.3149 24.2405H102.116L107.766 10.6799V9.74106H103.862L100.267 19.2335Z" fill="white"/>
        <path d="M145.264 13.8092C145.058 12.9747 144.545 12.2445 143.928 11.5143C143.312 10.8884 142.49 10.3669 141.36 9.94963C140.333 9.53238 138.997 9.32376 137.353 9.32376H136.634C134.991 9.32376 133.655 9.53238 132.628 9.94963C131.6 10.2626 130.778 10.7841 130.162 11.5143C129.546 12.1402 129.135 12.8704 128.827 13.8092C128.621 14.748 128.416 15.6868 128.416 16.6256V31.8552H129.34L132.73 29.8733V24.2404L133.039 24.3447C133.758 24.5534 134.374 24.762 135.196 24.8663C135.915 24.9706 136.737 25.0749 137.559 25.0749C139.203 25.0749 140.538 24.8663 141.565 24.4491C142.593 24.0318 143.415 23.6146 144.031 22.8844C144.647 22.2585 145.058 21.424 145.367 20.5895C145.572 19.755 145.777 18.8162 145.777 17.7731V16.6256C145.675 15.6868 145.572 14.748 145.264 13.8092ZM141.36 18.7119C141.36 19.2334 141.154 19.6507 140.846 20.0679C140.538 20.4852 140.127 20.6938 139.613 20.9024C139.1 21.1111 138.278 21.2154 137.251 21.2154C136.429 21.2154 135.607 21.1111 134.888 21.0067C134.169 20.9024 133.45 20.6938 132.833 20.4852H132.73V17.2515C132.73 16.7299 132.73 16.3127 132.833 15.7911C132.833 15.2696 133.039 14.8523 133.347 14.4351C133.655 14.0178 134.066 13.8092 134.682 13.4963C135.299 13.2876 136.121 13.1833 137.148 13.1833C138.175 13.1833 138.997 13.2876 139.613 13.4963C140.23 13.7049 140.641 14.0178 140.949 14.4351C141.257 14.8523 141.463 15.2696 141.463 15.7911C141.463 16.2084 141.565 16.7299 141.565 17.2515C141.36 17.7731 141.36 18.2946 141.36 18.7119Z" fill="white"/>
        <path d="M16 31.9999C24.8365 31.9999 32 24.8365 32 16C32 7.16343 24.8365 0 16 0C7.16344 0 0 7.16343 0 16C0 24.8365 7.16344 31.9999 16 31.9999Z" fill="white"/>
        <path d="M28.3937 6.01933C27.284 6.23868 26.226 6.54836 25.355 6.7419C23.3679 7.18706 21.5098 8.70964 21.1034 11.4967C20.7421 13.9871 21.5808 15.058 21.2131 17.9548C20.5679 23.0128 15.7163 24.7548 13.4518 25.8128C12.1421 26.4193 8.96147 27.8128 6.50986 28.8773C9.16792 30.8386 12.4453 31.9999 16.0002 31.9999C24.8389 31.9999 32.0002 24.8386 32.0002 16C32.0002 12.2322 30.6969 8.76771 28.5163 6.03868C28.4776 6.03223 28.4389 6.02578 28.3937 6.01933Z" fill="url(#paint0_linear_183_4959)"/>
        <path d="M14.2 13.6516C15.4322 10.9871 14.9871 10.9806 15.9226 8.4774C17.1032 5.30322 20.7742 6.20644 21.7871 6.34192C23.458 6.56773 23.8968 5.97418 27.4193 5.40644C27.5935 5.38064 27.7613 5.35483 27.929 5.33547C25 2.06451 20.7419 0 16 0C9.63225 0 4.13548 3.71612 1.56129 9.10321C6.8387 10.4129 12.5355 13.258 14.2 13.6516ZM10.7032 2.78709C11.1677 2.85806 13.4258 5.66451 13.8516 12.8709C13.8516 12.8709 10.9484 12.1742 10.3226 10.6774C9.80644 9.44514 10.4774 7.82579 10.7032 2.78709ZM28.4903 6.00644C28.4968 6.01934 28.5097 6.0258 28.5161 6.0387C28.4774 6.03225 28.4322 6.03225 28.3935 6.0258C28.4258 6.01289 28.458 6.01289 28.4903 6.00644ZM0 16C0 14.7226 0.148387 13.4838 0.432258 12.2968C1.0129 12.7806 1.63226 13.3161 2.29032 13.929C6.45806 17.7935 13.2387 20.8451 15.7097 18.0064C15.7161 18.0129 15.7226 18.0129 15.7226 18.0193C15.271 18.6129 13.5484 20.4903 10.2581 19.9096L5.05806 27.6709C1.94839 24.7548 0 20.6064 0 16Z" fill="url(#paint1_linear_183_4959)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_183_4959" x1="25.6089" y1="10.2099" x2="21.8342" y2="31.0052" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF496A"/>
          <stop offset="1" stop-color="#E42648"/>
        </linearGradient>
        <linearGradient id="paint1_linear_183_4959" x1="7.72271" y1="23.5689" x2="16.0686" y2="-5.61129e-06" gradientUnits="userSpaceOnUse">
          <stop offset="0.00181229" stop-color="#1158F1"/>
          <stop offset="1" stop-color="#119BED"/>
        </linearGradient>
        <clipPath id="clip0_183_4959">
          <rect width="145.778" height="32" fill="white"/>
        </clipPath>
      </defs>
    </Svg>

  );
};

export default Icon;
