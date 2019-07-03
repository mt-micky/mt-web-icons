function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Photo(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M696.318 552.96c16.962 0 30.72-13.758 30.72-30.72V143.36c0-16.962-13.758-30.72-30.72-30.72h-552.96c-16.962 0-30.72 13.758-30.72 30.72v378.88c0 16.962 13.758 30.72 30.72 30.72h552.96zm0 40.96h-552.96c-39.583 0-71.68-32.097-71.68-71.68V143.36c0-39.583 32.097-71.68 71.68-71.68h552.96c39.583 0 71.68 32.097 71.68 71.68v378.88c0 39.583-32.097 71.68-71.68 71.68z"
  }), React.createElement("path", {
    d: "M830.216 470.731l32.307 5.673c27.883 4.893 46.497 31.479 41.56 59.354l-61.45 347.076c-2.934 16.561-19 27.811-35.559 24.902l-542.916-95.335c-16.73-2.937-27.902-18.893-24.94-35.619l21.33-120.474c1.972-11.138-5.458-21.765-16.596-23.737s-21.765 5.458-23.737 16.596l-21.33 120.474c-6.91 39.023 19.155 76.251 58.19 83.103l542.913 95.334c38.818 6.819 76.102-19.288 82.977-58.102L944.416 542.9c8.887-50.173-24.622-98.032-74.81-106.84l-32.305-5.673c-11.14-1.956-21.757 5.489-23.713 16.629s5.489 21.757 16.629 23.713z"
  }));
}