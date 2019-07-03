function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function AmusementPark(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M880.408 409.483c0-203.535-164.993-368.527-368.527-368.527-203.526 0-368.517 164.994-368.517 368.527S308.355 778.01 511.881 778.01c203.535 0 368.527-164.993 368.527-368.527zm40.96 0c0 226.156-183.331 409.487-409.487 409.487-226.148 0-409.477-183.333-409.477-409.487S285.733-.004 511.881-.004c226.156 0 409.487 183.331 409.487 409.487z"
  }), React.createElement("path", {
    d: "M763.706 409.483c0-139.074-112.748-251.822-251.822-251.822S260.062 270.409 260.062 409.483 372.81 661.305 511.884 661.305s251.822-112.748 251.822-251.822zm40.96 0c0 161.695-131.087 292.782-292.782 292.782S219.102 571.178 219.102 409.483s131.087-292.782 292.782-292.782 292.782 131.087 292.782 292.782z"
  }), React.createElement("path", {
    d: "M497.408 414.746l345.303 598.088c5.655 9.795 18.181 13.152 27.976 7.496s13.152-18.181 7.496-27.976L532.88 394.266c-5.655-9.795-18.181-13.152-27.976-7.496s-13.152 18.181-7.496 27.976z"
  }), React.createElement("path", {
    d: "M494.556 394.266L149.253 992.354c-5.655 9.795-2.299 22.321 7.496 27.976s22.321 2.299 27.976-7.496l345.303-598.088c5.655-9.795 2.299-22.321-7.496-27.976s-22.321-2.299-27.976 7.496z"
  }));
}