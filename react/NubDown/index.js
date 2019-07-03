function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function NubDown(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M436.846 829.656L69.683 367.636c-43.982-55.345-34.77-135.865 20.574-179.846A128.001 128.001 0 0 1 169.893 160h684.221c70.692 0 128 57.308 128 128 0 28.923-9.795 56.993-27.79 79.636l-367.163 462.02c-32.986 41.508-93.376 48.417-134.885 15.431a96.005 96.005 0 0 1-15.431-15.431z"
  }));
}