function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Bucket(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M829.44 455.772c5.657 0 10.24-4.583 10.24-10.24v-81.92c0-5.657-4.583-10.24-10.24-10.24H194.56a10.238 10.238 0 0 0-10.24 10.24v81.92c0 5.657 4.583 10.24 10.24 10.24h634.88zm0 40.96H194.56c-28.278 0-51.2-22.922-51.2-51.2v-81.92c0-28.278 22.922-51.2 51.2-51.2h634.88c28.278 0 51.2 22.922 51.2 51.2v81.92c0 28.278-22.922 51.2-51.2 51.2z"
  }), React.createElement("path", {
    d: "M222.385 332.483c0-161.004 130.521-291.523 291.523-291.523 161.01 0 291.533 130.517 291.533 291.523 0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48C846.401 148.855 697.539 0 513.908 0 330.285 0 181.425 148.856 181.425 332.483c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM803.84 477.788v495.616c0 5.657-4.583 10.24-10.24 10.24H230.4a10.238 10.238 0 0 1-10.24-10.24v-486.4c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v486.4c0 28.278 22.922 51.2 51.2 51.2h563.2c28.278 0 51.2-22.922 51.2-51.2V477.788c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
  }));
}