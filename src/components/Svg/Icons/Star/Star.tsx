import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.66731 7.05611C8.59612 7.21067 8.44985 7.31709 8.28106 7.33713L1.43179 8.15034C1.01763 8.19951 0.851309 8.71211 1.1575 8.99566L6.22134 13.685C6.34614 13.8005 6.40201 13.9727 6.36888 14.1397L5.02468 20.914C4.9434 21.3236 5.37885 21.6404 5.74277 21.4364L11.7613 18.0629C11.9096 17.9797 12.0904 17.9797 12.2387 18.0629L18.2572 21.4364C18.6212 21.6404 19.0566 21.3236 18.9753 20.914L17.6311 14.1397C17.598 13.9727 17.6539 13.8005 17.7787 13.685L22.8425 8.99566C23.1487 8.71211 22.9824 8.19951 22.5682 8.15034L15.7189 7.33713C15.5501 7.31709 15.4039 7.21067 15.3327 7.05612L12.4438 0.784422C12.2691 0.405193 11.7309 0.405193 11.5562 0.784421L8.66731 7.05611ZM12 4.60137L10.4839 7.89286C10.122 8.67854 9.37757 9.22099 8.51686 9.32318L4.91635 9.75067L7.58025 12.2175C8.21533 12.8057 8.49889 13.681 8.33063 14.5289L7.62422 18.089L10.7834 16.3182C11.5392 15.8946 12.4608 15.8946 13.2166 16.3182L16.3758 18.089L15.6694 14.5289C15.5011 13.681 15.7847 12.8056 16.4198 12.2175L19.0836 9.75067L15.4831 9.32318C14.6224 9.22099 13.878 8.67855 13.5161 7.89286L12 4.60137Z"/>
    </Svg>
  );
};

export default Icon;
