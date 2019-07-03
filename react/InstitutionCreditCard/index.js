function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function InstitutionCreditCard(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M972.8 399.36v-61.44H51.2v61.44h921.6zm0 51.2H51.2V768c0 33.932 27.508 61.44 61.44 61.44h798.72c33.932 0 61.44-27.508 61.44-61.44V450.56zm0-163.84V256c0-33.932-27.508-61.44-61.44-61.44H112.64c-33.932 0-61.44 27.508-61.44 61.44v30.72h921.6zM112.64 143.36h798.72c62.209 0 112.64 50.431 112.64 112.64v512c0 62.209-50.431 112.64-112.64 112.64H112.64C50.431 880.64 0 830.209 0 768V256c0-62.209 50.431-112.64 112.64-112.64zm102.4 378.88h112.64c33.932 0 61.44 27.508 61.44 61.44v92.16c0 33.932-27.508 61.44-61.44 61.44H215.04c-33.932 0-61.44-27.508-61.44-61.44v-92.16c0-33.932 27.508-61.44 61.44-61.44zm0 51.2c-5.655 0-10.24 4.585-10.24 10.24v92.16c0 5.655 4.585 10.24 10.24 10.24h112.64c5.655 0 10.24-4.585 10.24-10.24v-92.16c0-5.655-4.585-10.24-10.24-10.24H215.04z"
  }));
}