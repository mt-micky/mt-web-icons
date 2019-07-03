function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function CardPayment(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M952.32 839.68c16.962 0 30.72-13.758 30.72-30.72V215.04c0-16.962-13.758-30.72-30.72-30.72H71.68c-16.962 0-30.72 13.758-30.72 30.72v593.92c0 16.962 13.758 30.72 30.72 30.72h880.64zm0 40.96H71.68C32.097 880.64 0 848.543 0 808.96V215.04c0-39.583 32.097-71.68 71.68-71.68h880.64c39.583 0 71.68 32.097 71.68 71.68v593.92c0 39.583-32.097 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M23.48 308.068h980.04v-40.96H23.48zM358.508 459.015h249.856c70.128 0 126.976 56.848 126.976 126.976v4.096c0 70.128-56.848 126.976-126.976 126.976H313.452c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h294.912c92.75 0 167.936-75.186 167.936-167.936v-4.096c0-92.75-75.186-167.936-167.936-167.936H358.508c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
  }), React.createElement("path", {
    d: "M374.948 351.422l-70.963 70.963c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l70.963-70.963c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0z"
  }), React.createElement("path", {
    d: "M402.173 495.369l-70.963-70.963c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963l70.963 70.963c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"
  }));
}