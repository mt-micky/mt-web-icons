function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Salary(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M456.458 285.736l-80.404-158.218c-3.461-6.812 1.489-14.878 9.134-14.878h251.628c7.645 0 12.59 8.061 9.127 14.873l-80.397 158.224c-5.124 10.084-1.103 22.412 8.981 27.536s22.412 1.103 27.536-8.981l80.394-158.218c17.319-34.058-7.427-74.394-45.64-74.394H385.189c-38.208 0-62.956 40.328-45.651 74.392l80.406 158.221c5.124 10.083 17.453 14.104 27.536 8.979s14.104-17.453 8.979-27.536z"
  }), React.createElement("path", {
    d: "M725.04 909.844c101.8 0 184.32-82.52 184.32-184.32v-43.151c0-197.073-161.327-358.4-358.4-358.4h-79.923c-197.073 0-358.4 161.327-358.4 358.4v43.151c0 101.797 82.526 184.32 184.32 184.32H725.04zm0 40.96H296.957c-124.415 0-225.28-100.862-225.28-225.28v-43.151c0-219.695 179.665-399.36 399.36-399.36h79.923c219.695 0 399.36 179.665 399.36 399.36v43.151c0 124.422-100.858 225.28-225.28 225.28z"
  }));
}