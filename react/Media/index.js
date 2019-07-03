function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Media(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M829.44 911.36c45.009 0 81.92-36.911 81.92-81.92V194.56c0-45.009-36.911-81.92-81.92-81.92H194.56c-45.009 0-81.92 36.911-81.92 81.92v634.88c0 45.009 36.911 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.631 0-122.88-55.249-122.88-122.88V194.56c0-67.631 55.249-122.88 122.88-122.88h634.88c67.631 0 122.88 55.249 122.88 122.88v634.88c0 67.631-55.249 122.88-122.88 122.88z"
  }), React.createElement("path", {
    d: "M436.887 364.963c-6.817-4.322-15.723.577-15.723 8.649v280.924c0 8.066 8.909 12.969 15.723 8.649l221.645-140.462c6.346-4.021 6.346-13.277-.001-17.298L436.886 364.963zm243.569 105.864c31.727 20.104 31.727 66.39.001 86.494l-221.642 140.46c-34.084 21.608-78.611-2.893-78.611-43.245V373.612c0-40.36 44.523-64.853 78.609-43.246l221.643 140.461z"
  }));
}