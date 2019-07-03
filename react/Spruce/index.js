function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Spruce(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M570.809 751.585v222.413c0 5.585-4.655 10.24-10.24 10.24h-97.28c-5.585 0-10.24-4.655-10.24-10.24V751.585c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v222.413c0 28.207 22.993 51.2 51.2 51.2h97.28c28.207 0 51.2-22.993 51.2-51.2V751.585c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zM709.295 187.41L531.398 47.024c-10.247-8.081-28.696-8.081-38.938-.004L314.558 187.41h394.736zm-412.787 40.96c-41.955 0-54.428-35.938-21.493-61.932L467.092 14.862c25.122-19.812 64.55-19.812 89.676.004l192.073 151.573c32.934 25.993 20.461 61.931-21.494 61.931H296.509z"
  }), React.createElement("path", {
    d: "M760.573 433.258L531.399 252.409c-10.245-8.086-28.687-8.086-38.933.001L263.284 433.258h497.289zm-515.34 40.96c-41.955 0-54.428-35.938-21.493-61.932l243.352-192.03c25.124-19.829 64.559-19.829 89.682-.001l243.344 192.031c32.934 25.993 20.461 61.931-21.494 61.931H245.233z"
  }), React.createElement("path", {
    d: "M822.106 727.873L531.4 498.466c-10.245-8.086-28.697-8.086-38.943.001L201.752 727.873h620.354zm-638.404 40.96c-41.955 0-54.428-35.938-21.493-61.932l304.875-240.588c25.124-19.829 64.569-19.829 89.692-.001l304.876 240.59c32.934 25.993 20.461 61.931-21.494 61.931H183.702z"
  }));
}