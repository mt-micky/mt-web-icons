function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function ChevronRight(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M648.61 511.232l40.882-43.647c24.163-25.797 64.664-27.122 90.461-2.959.436.408.864.821 1.286 1.238l3.404 3.646a64.015 64.015 0 0 1 9.88 15.43 64.144 64.144 0 0 1 5.666 27.691 64.144 64.144 0 0 1-6.781 27.439 63.198 63.198 0 0 1-1.428 2.678 63.537 63.537 0 0 1-9.577 12.883l-418.309 446.602c-24.163 25.797-64.664 27.122-90.461 2.959s-27.122-64.664-2.959-90.461L648.61 511.232 271.56 107.417c-23.1-26.753-20.139-67.168 6.615-90.268s67.168-20.139 90.268 6.615l412.796 442.1z"
  }));
}