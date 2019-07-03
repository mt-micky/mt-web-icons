function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function WarehouseCost(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M948.828 837.618c16.962 0 30.72-13.758 30.72-30.72V390.693c0-8.603-7.779-20.23-15.735-23.516L529.105 187.588c-10.592-4.376-30.496-4.351-41.074.052L56.711 367.086c-7.967 3.315-15.751 14.982-15.751 23.607v416.205c0 16.962 13.758 30.72 30.72 30.72h877.148zm0 40.96H71.68c-39.583 0-71.68-32.097-71.68-71.68V390.693c0-25.169 17.737-51.757 40.978-61.425l431.315-179.444c20.615-8.582 51.809-8.62 72.451-.093L979.452 329.32c23.279 9.617 41.056 36.187 41.056 61.373v416.205c0 39.583-32.097 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M223.534 851.277V562.386c0-16.962 13.758-30.72 30.72-30.72h512c16.962 0 30.72 13.758 30.72 30.72v288.891c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V562.386c0-39.583-32.097-71.68-71.68-71.68h-512c-39.583 0-71.68 32.097-71.68 71.68v288.891c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
  }));
}