function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function ChevronLeft(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M375.39 512.768l-40.882 43.647c-24.163 25.797-64.664 27.122-90.461 2.959a65.595 65.595 0 0 1-1.286-1.238l-3.404-3.646a64.015 64.015 0 0 1-9.88-15.43 64.144 64.144 0 0 1-5.666-27.691 64.144 64.144 0 0 1 6.781-27.439c.453-.901.929-1.794 1.428-2.678a63.537 63.537 0 0 1 9.577-12.883L659.906 21.767c24.163-25.797 64.664-27.122 90.461-2.959s27.122 64.664 2.959 90.461L375.39 512.768l377.05 403.815c23.1 26.753 20.139 67.168-6.615 90.268s-67.168 20.139-90.268-6.615l-412.796-442.1z"
  }));
}