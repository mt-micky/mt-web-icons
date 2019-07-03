function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Paper(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M872.533 185.601c0-12.8-4.267-21.333-12.8-29.867l-128-128c-12.8-12.8-25.6-17.067-38.4-12.8h-473.6C189.866 10.667 160 36.267 151.466 70.401v874.666c0 38.4 29.867 68.267 68.267 68.267H800c38.4 0 68.267-29.867 68.267-68.267V194.134l4.267-8.533c0 4.267 0 4.267 0 0zm-42.667 0c4.267 4.267 0 12.8-4.267 12.8H710.399c-12.8 0-21.333-8.533-21.333-21.333v-115.2c0-8.533 8.533-8.533 12.8-4.267l128 128zm4.267 759.466c0 17.067-12.8 29.867-29.867 29.867H219.733c-17.067 0-29.867-12.8-29.867-29.867V83.2v-8.533c4.267-12.8 12.8-21.333 29.867-21.333H646.4v123.734c0 34.133 25.6 64 64 64h123.733v704z"
  }));
}