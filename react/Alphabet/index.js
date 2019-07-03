function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Alphabet(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"
  }), React.createElement("path", {
    d: "M322.684 797.914L528.15 228.201c3.837-10.64-1.677-22.376-12.317-26.213s-22.376 1.677-26.213 12.317L284.154 784.018c-3.837 10.64 1.677 22.376 12.317 26.213s22.376-1.677 26.213-12.317z"
  }), React.createElement("path", {
    d: "M739.848 784.018L534.382 214.305c-3.837-10.64-15.573-16.155-26.213-12.317s-16.155 15.573-12.317 26.213l205.466 569.713c3.837 10.64 15.573 16.155 26.213 12.317s16.155-15.573 12.317-26.213z"
  }), React.createElement("path", {
    d: "M375.165 612.512h274.36c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-274.36c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
  }));
}