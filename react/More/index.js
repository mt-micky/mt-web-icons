function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function More(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M245.76 512c0 67.865-55.015 122.88-122.88 122.88S0 579.865 0 512s55.015-122.88 122.88-122.88S245.76 444.135 245.76 512zM634.88 512c0 67.865-55.015 122.88-122.88 122.88S389.12 579.865 389.12 512 444.135 389.12 512 389.12 634.88 444.135 634.88 512zM1024 512c0 67.865-55.015 122.88-122.88 122.88S778.24 579.865 778.24 512s55.015-122.88 122.88-122.88S1024 444.135 1024 512z"
  }));
}