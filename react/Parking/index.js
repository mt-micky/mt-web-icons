function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Parking(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"
  }), React.createElement("path", {
    d: "M376.538 230.746v573.44c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-573.44c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
  }), React.createElement("path", {
    d: "M555.302 503.974c73.517 0 133.12-59.603 133.12-133.12 0-72.104-58.456-130.56-130.56-130.56h-140.36v263.68h137.8zm0 40.96h-158.28c-11.311 0-20.48-9.169-20.48-20.48v-304.64c0-11.311 9.169-20.48 20.48-20.48h160.84c94.726 0 171.52 76.794 171.52 171.52 0 96.139-77.941 174.08-174.08 174.08z"
  }));
}