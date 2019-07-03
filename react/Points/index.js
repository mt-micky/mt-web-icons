function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Points(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M952.319 839.684c16.968 0 30.72-13.754 30.72-30.72v-593.92c0-16.972-13.748-30.72-30.72-30.72H71.679c-16.966 0-30.72 13.752-30.72 30.72v593.92c0 16.962 13.758 30.72 30.72 30.72h880.64zm0 40.96H71.679c-39.583 0-71.68-32.097-71.68-71.68v-593.92c0-39.591 32.094-71.68 71.68-71.68h880.64c39.594 0 71.68 32.086 71.68 71.68v593.92c0 39.586-32.089 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M379.248 309.085v-7.458c0-11.311 9.169-20.48 20.48-20.48h115.804c71.372 0 129.229 57.853 129.229 129.229 0 72.389-58.687 131.072-131.072 131.072h-93.485v180.927c0 11.311-9.169 20.48-20.48 20.48s-20.48-9.169-20.48-20.48V309.498c0-.138.001-.276.004-.414zM513.689 501.76c49.764 0 90.112-41.688 90.112-93.112 0-50.376-39.518-91.208-88.269-91.208h-95.324v184.32h93.481z"
  }));
}