function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Bulb(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M492.373 20.482v76.401c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V20.482c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zM222.669 112.939l38.195 66.161c5.655 9.796 18.18 13.152 27.976 7.497s13.152-18.18 7.497-27.976L258.142 92.46c-5.655-9.796-18.18-13.152-27.976-7.497s-13.152 18.18-7.497 27.976zM61.441 310.666l66.161 38.195c9.796 5.655 22.321 2.299 27.976-7.497s2.299-22.321-7.497-27.976L81.92 275.193c-9.796-5.655-22.321-2.299-27.976 7.497s-2.299 22.321 7.497 27.976zM898.101 348.866l66.161-38.195c9.796-5.655 13.152-18.18 7.497-27.976s-18.18-13.152-27.976-7.497l-66.161 38.195c-9.796 5.655-13.152 18.18-7.497 27.976s18.18 13.152 27.976 7.497zM764.837 179.103l38.195-66.161c5.655-9.796 2.299-22.321-7.497-27.976s-22.321-2.299-27.976 7.497l-38.195 66.161c-5.655 9.796-2.299 22.321 7.497 27.976s22.321 2.299 27.976-7.497zM619.705 609.548a20.479 20.479 0 0 1 9.029-16.979c53.847-36.315 86.469-95.279 86.469-159.497 0-107.392-90.442-194.744-202.353-194.744s-202.353 87.353-202.353 194.744c0 64.218 32.623 123.181 86.469 159.497a20.48 20.48 0 0 1 9.029 16.979v181.903c0 22.143 17.946 40.09 40.09 40.09h133.54c22.134 0 40.079-17.947 40.079-40.09V609.548zm40.96 181.904c0 44.763-36.283 81.05-81.039 81.05h-133.54c-44.765 0-81.05-36.285-81.05-81.05V620.14c-59.555-44.178-95.498-112.657-95.498-187.067 0-130.338 109.092-235.704 243.313-235.704s243.313 105.366 243.313 235.704c0 74.41-35.943 142.89-95.498 187.067v171.312zM410.986 949.054h203.735c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H410.986c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM436.453 1025.454h152.801c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H436.453c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
  }));
}