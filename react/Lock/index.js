function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Lock(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M870.4 962.56c16.962 0 30.72-13.758 30.72-30.72V515.41c0-16.962-13.758-30.72-30.72-30.72H143.36c-16.962 0-30.72 13.758-30.72 30.72v416.43c0 16.962 13.758 30.72 30.72 30.72H870.4zm0 40.96H143.36c-39.583 0-71.68-32.097-71.68-71.68V515.41c0-39.583 32.097-71.68 71.68-71.68H870.4c39.583 0 71.68 32.097 71.68 71.68v416.43c0 39.583-32.097 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M322.408 458.242v-202.24c0-101.329 82.991-184.32 184.32-184.32h7.68c101.329 0 184.32 82.991 184.32 184.32 0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48c0-123.951-101.329-225.28-225.28-225.28h-7.68c-123.951 0-225.28 101.329-225.28 225.28v202.24c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
  }), React.createElement("path", {
    d: "M739.688 458.242v-202.24c0-123.951-101.329-225.28-225.28-225.28h-7.68c-123.951 0-225.28 101.329-225.28 225.28 0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48c0-101.329 82.991-184.32 184.32-184.32h7.68c101.329 0 184.32 82.991 184.32 184.32v202.24c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
  }));
}