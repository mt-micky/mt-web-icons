function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function ParkingFee(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M873.165 903.885c16.962 0 30.72-13.758 30.72-30.72V143.36c0-16.962-13.758-30.72-30.72-30.72H143.36c-16.962 0-30.72 13.758-30.72 30.72v729.805c0 16.962 13.758 30.72 30.72 30.72h729.805zm0 40.96H143.36c-39.583 0-71.68-32.097-71.68-71.68V143.36c0-39.583 32.097-71.68 71.68-71.68h729.805c39.583 0 71.68 32.097 71.68 71.68v729.805c0 39.583-32.097 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M363.622 221.542v573.44c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-573.44c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
  }), React.createElement("path", {
    d: "M542.387 494.771c73.517 0 133.12-59.603 133.12-133.12 0-72.104-58.456-130.56-130.56-130.56h-140.37v263.68h137.81zm0 40.96h-158.29c-11.311 0-20.48-9.169-20.48-20.48v-304.64c0-11.311 9.169-20.48 20.48-20.48h160.85c94.726 0 171.52 76.794 171.52 171.52 0 96.139-77.941 174.08-174.08 174.08z"
  }));
}