function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Search(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M602.829 712.369l230.358 233.067c22.423 22.687 58.944 22.853 81.572.373s22.795-59.096.372-81.783l-222.148-224.76c53.94-61.34 86.688-142.107 86.688-230.556 0-191.674-153.786-347.268-343.755-347.268S92.161 217.037 92.161 408.71c0 191.674 153.786 347.268 343.755 347.268 60.591 0 117.501-15.829 166.914-43.608zm-166.914-72.052c-126.02 0-228.394-103.577-228.394-231.608s102.374-231.608 228.394-231.608c126.02 0 228.394 103.577 228.394 231.608S561.935 640.317 435.915 640.317z"
  }));
}