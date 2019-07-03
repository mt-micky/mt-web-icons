function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function InstitutionPoint(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M942.08 830.104c16.968 0 30.72-13.531 30.72-30.222V224.119c0-16.697-13.748-30.222-30.72-30.222H81.92c-16.966 0-30.72 13.529-30.72 30.222v575.763c0 16.687 13.758 30.222 30.72 30.222h860.16zM409.6 593.92h94.239c89.334 0 161.761-73.873 161.761-165 0-89.851-71.404-162.68-159.486-162.68H383.676c-13.959 0-25.275 11.543-25.275 25.781v448.53c0 15.159 11.462 27.448 25.6 27.448s25.6-12.289 25.6-27.448V593.919zm542.72 286.72H71.68C32.097 880.64 0 849.064 0 810.121V213.878c0-38.949 32.094-70.519 71.68-70.519h880.64c39.594 0 71.68 31.566 71.68 70.519v596.243c0 38.945-32.089 70.519-71.68 70.519zM503.839 542.357H408.95V317.802h97.163c60.165 0 108.936 49.744 108.936 111.117 0 62.649-49.795 113.438-111.211 113.438z"
  }));
}