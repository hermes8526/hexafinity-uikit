import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#1FB75C" />
      <path
        d="M19.8491 14.9964C19.95 14.4786 20 13.9514 20 13.4237C20.0016 12.3302 19.7837 11.2478 19.3595 10.2421C18.9353 9.23644 18.3136 8.32844 17.5321 7.57316C18.2075 8.25741 17.7142 9.47438 16.7566 9.47148C16.2053 9.47146 15.7277 9.04029 15.6651 8.48606L15.6442 8.48269C15.5818 7.54899 15.2989 6.64406 14.8193 5.84389C14.3013 4.9755 13.5703 4.25732 12.6972 3.75904C11.8241 3.26076 10.8385 2.99929 9.8361 3.00002C9.72599 2.9997 9.61683 3.00274 9.50862 3.00914C10.0799 3.70796 10.4303 4.56446 10.5143 5.46739C10.5279 5.60954 10.5347 5.75361 10.5347 5.89959C10.5357 6.49774 10.4192 7.09011 10.192 7.64232C10.1231 7.8106 10.0439 7.97435 9.95474 8.13262C9.9386 8.13838 9.92295 8.14463 9.90729 8.15135C9.85688 8.25239 9.79388 8.34648 9.71982 8.43131C9.59506 8.57529 9.44136 8.69063 9.26898 8.76964C9.09661 8.84865 8.90955 8.88949 8.72032 8.88945H8.70656C8.52676 8.8886 8.34907 8.85034 8.1845 8.77708C8.07521 8.72892 7.97299 8.66573 7.88077 8.58931C7.72655 8.4632 7.60219 8.30377 7.51678 8.12271C7.43138 7.94164 7.38709 7.74354 7.38719 7.54291C7.38721 7.31642 7.44378 7.0936 7.55164 6.89514C7.6595 6.69668 7.81515 6.529 8.00416 6.40767C6.51002 7.28125 5.33352 8.61835 4.64878 10.2211C4.21841 11.2281 3.99818 12.3269 4.00001 13.4237C4.00001 15.0506 4.55059 16.5933 5.78777 17.6897C6.657 18.4601 7.75364 18.9179 8.90684 18.9919C6.7809 18.792 5.33327 16.6448 5.33504 14.5825C5.33525 14.0305 5.43613 13.4833 5.63262 12.9684C5.98616 12.044 6.63059 11.263 7.46644 10.746C7.65312 10.6307 7.84792 10.5294 8.04925 10.443C8.14559 10.736 8.30358 11.0045 8.51235 11.2298C9.22309 11.997 10.4238 12.1165 11.2674 11.5127C11.9639 11.0142 12.299 10.1112 12.0985 9.27074C12.0904 9.23665 12.0819 9.20303 12.0719 9.16942C11.9913 8.89284 11.8561 8.63566 11.6745 8.4134C11.4929 8.19113 11.2687 8.00838 11.0155 7.87618C11.1655 7.85976 11.3163 7.85159 11.4673 7.85169C12.2687 7.85038 13.0538 8.0808 13.7301 8.51584C14.4943 9.00648 15.083 9.73182 15.4102 10.5856C15.4428 10.6704 15.4729 10.7569 15.5004 10.8449C15.6033 11.1767 15.6656 11.5201 15.686 11.8673L15.6978 11.8707C15.6955 11.8875 15.6955 11.9052 15.6955 11.9225C15.6955 12.0015 15.7108 12.0797 15.7407 12.1527C15.7706 12.2257 15.8144 12.292 15.8697 12.3478C15.9249 12.4037 15.9904 12.4479 16.0625 12.4781C16.1347 12.5083 16.2121 12.5238 16.2901 12.5238C16.3717 12.5238 16.4525 12.5068 16.5274 12.4737C16.6021 12.4407 16.6693 12.3923 16.7248 12.3317C16.8279 12.2206 16.8851 12.0739 16.8848 11.9216C16.8851 11.7892 16.8418 11.6604 16.7618 11.5556C17.2527 11.9561 17.6485 12.4628 17.9203 13.0385C18.1921 13.6141 18.3328 14.2442 18.3323 14.8821C18.3323 16.7679 17.0581 18.4167 15.349 18.9712C16.4096 18.8518 17.409 18.4076 18.2132 17.6977C18.8688 17.119 19.8491 15.9438 19.8491 14.9964Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.70131 13.0165H14.3049C14.545 13.0158 14.7829 13.0631 15.0049 13.1558C15.2269 13.2484 15.4286 13.3846 15.5984 13.5564C15.7682 13.7282 15.9028 13.9324 15.9943 14.1569C16.086 14.3815 16.1328 14.6223 16.1321 14.8653V17.1463C16.1318 17.6379 15.9388 18.1092 15.5952 18.4567C15.2517 18.8044 14.7859 18.9998 14.3001 19H14.1008C14.1019 18.6071 13.995 18.2218 13.7922 17.8868C13.5894 17.5519 13.2986 17.2805 12.9523 17.1031L12.4777 18.0492C12.6507 18.1374 12.7961 18.2726 12.8975 18.4397C12.9989 18.6068 13.0524 18.7991 13.0519 18.9952H9.70131C9.21553 18.995 8.74972 18.7996 8.40622 18.4519C8.06272 18.1044 7.86963 17.6331 7.86938 17.1415V14.8701C7.86963 14.3786 8.06272 13.9072 8.40622 13.5597C8.74972 13.2121 9.21553 13.0167 9.70131 13.0165ZM9.44378 16.1342C9.54799 16.1778 9.65969 16.2003 9.7725 16.2003L9.77108 16.1979C9.99874 16.1983 10.2172 16.1072 10.3786 15.9446C10.5399 15.7822 10.6309 15.5615 10.6315 15.3311C10.6315 15.217 10.6093 15.1039 10.5661 14.9985C10.523 14.893 10.4597 14.7972 10.3799 14.7165C10.3001 14.6358 10.2055 14.5717 10.1012 14.5281C9.99701 14.4844 9.88531 14.4619 9.7725 14.4619C9.65969 14.4619 9.54799 14.4844 9.44378 14.5281C9.33955 14.5717 9.24485 14.6358 9.16509 14.7165C9.08532 14.7972 9.02205 14.893 8.97888 14.9985C8.9357 15.1039 8.91348 15.217 8.91348 15.3311C8.91348 15.4452 8.9357 15.5583 8.97888 15.6638C9.02205 15.7692 9.08532 15.8651 9.16509 15.9457C9.24485 16.0265 9.33955 16.0905 9.44378 16.1342ZM13.905 16.1342C14.0092 16.1778 14.1209 16.2003 14.2337 16.2003L14.2323 16.1979C14.4599 16.1983 14.6784 16.1072 14.8398 15.9446C15.0011 15.7822 15.0921 15.5615 15.0927 15.3311C15.0927 15.217 15.0705 15.1039 15.0273 14.9985C14.9841 14.893 14.9209 14.7972 14.8411 14.7165C14.7613 14.6358 14.6666 14.5717 14.5624 14.5281C14.4582 14.4844 14.3465 14.4619 14.2337 14.4619C14.1209 14.4619 14.0092 14.4844 13.905 14.5281C13.8007 14.5717 13.706 14.6358 13.6263 14.7165C13.5465 14.7972 13.4832 14.893 13.4401 14.9985C13.3969 15.1039 13.3747 15.217 13.3747 15.3311C13.3747 15.4452 13.3969 15.5583 13.4401 15.6638C13.4832 15.7692 13.5465 15.8651 13.6263 15.9457C13.706 16.0265 13.8007 16.0905 13.905 16.1342Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
