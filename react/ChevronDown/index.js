function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function ChevronDown(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M512.768 616.61l43.647 40.882c25.797 24.163 27.122 64.664 2.959 90.461-.408.436-.821.864-1.238 1.286l-3.646 3.404a64.015 64.015 0 0 1-15.43 9.88 64.144 64.144 0 0 1-27.691 5.666 64.144 64.144 0 0 1-27.439-6.781 63.198 63.198 0 0 1-2.678-1.428 63.537 63.537 0 0 1-12.883-9.577L21.767 332.094c-25.797-24.163-27.122-64.664-2.959-90.461s64.664-27.122 90.461-2.959L512.768 616.61l403.815-377.05c26.753-23.1 67.168-20.139 90.268 6.615s20.139 67.168-6.615 90.268l-442.1 412.796z"
  }));
}