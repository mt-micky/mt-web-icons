function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Message(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M962.56 839.68c11.309 0 20.48-9.171 20.48-20.48V204.8c0-11.309-9.171-20.48-20.48-20.48H61.44c-11.309 0-20.48 9.171-20.48 20.48v614.4c0 11.309 9.171 20.48 20.48 20.48h901.12zm0 40.96H61.44C27.509 880.64 0 853.131 0 819.2V204.8c0-33.931 27.509-61.44 61.44-61.44h901.12c33.931 0 61.44 27.509 61.44 61.44v614.4c0 33.931-27.509 61.44-61.44 61.44z"
  }), React.createElement("path", {
    d: "M971.909 165.158L519.608 538.099c-5.467 4.505-15.877 4.505-21.348-.004L43.752 163.325c-8.727-7.196-21.634-5.955-28.83 2.772s-5.955 21.634 2.772 28.83l454.513 374.774c20.605 16.979 52.854 16.979 73.454.004L997.967 196.76c8.727-7.196 9.968-20.103 2.772-28.83s-20.103-9.968-28.83-2.772z"
  }), React.createElement("path", {
    d: "M415.464 496.633L22.176 819.07c-8.747 7.171-10.024 20.075-2.853 28.822s20.075 10.024 28.822 2.853l393.288-322.437c8.747-7.171 10.024-20.075 2.853-28.822s-20.075-10.024-28.822-2.853zM1012.129 824.094L614.735 498.298c-8.747-7.171-21.651-5.894-28.822 2.853s-5.894 21.651 2.853 28.822L986.16 855.769c8.747 7.171 21.651 5.894 28.822-2.853s5.894-21.651-2.853-28.822z"
  }));
}