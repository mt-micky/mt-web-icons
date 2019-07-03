function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Electronics(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M907.549 910.486l-75.613-316.487c.071.3-1.324-.748-1.992-.748H200.686c-.662 0-2.066 1.054-1.994.755l-75.572 316.36c-.01.041 784.43.121 784.43.121zm3.342 40.96H119.738c-26.69 0-42.675-24.601-36.457-50.603l75.575-316.369c4.444-18.543 22.613-32.183 41.83-32.183h629.258c19.23 0 37.408 13.647 41.833 32.197l75.584 316.364c6.2 26.004-9.785 50.594-36.469 50.594z"
  }), React.createElement("path", {
    d: "M243.348 711.799h543.939c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H243.348c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM218.292 816.202h594.053c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H218.292c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM201.258 579.584V143.36c0-16.962 13.758-30.72 30.72-30.72H798.25c16.962 0 30.72 13.758 30.72 30.72v434.176c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V143.36c0-39.583-32.097-71.68-71.68-71.68H231.978c-39.583 0-71.68 32.097-71.68 71.68v436.224c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
  }));
}