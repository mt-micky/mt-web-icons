function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Compass(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M983.04 512c0-260.152-210.888-471.04-471.04-471.04S40.96 251.848 40.96 512c0 260.152 210.888 471.04 471.04 471.04S983.04 772.152 983.04 512zm40.96 0c0 282.773-229.227 512-512 512S0 794.773 0 512 229.227 0 512 0s512 229.227 512 512z"
  }), React.createElement("path", {
    d: "M319.95 698.177l224.037-128.3c11.501-6.586 27.741-22.826 34.327-34.327l128.305-224.044-224.044 128.305c-11.493 6.581-27.739 22.829-34.327 34.327l-128.297 224.04zm293.908-142.273c-10.207 17.826-31.691 39.31-49.517 49.517l-262.78 150.487c-32.776 18.768-58.125-6.565-39.346-39.337l150.49-262.794c10.212-17.82 31.697-39.31 49.514-49.512l262.78-150.487c32.78-18.771 58.117 6.567 39.346 39.347L613.858 555.904z"
  }), React.createElement("path", {
    d: "M438.5 459.028l113.695 113.695c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963L467.463 430.065c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963z"
  }));
}