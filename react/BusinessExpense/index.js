function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function BusinessExpense(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M576.464 154.522c217.884 6.73 391.585 185.551 391.585 404.111 0 223.288-181.008 404.296-404.296 404.296-218.734 0-397.646-173.973-404.131-392.053-.336-11.306-9.774-20.198-21.08-19.862s-20.198 9.774-19.862 21.08c7.143 240.202 204.175 431.796 445.073 431.796 245.909 0 445.256-199.346 445.256-445.256 0-240.706-191.294-437.639-431.281-445.051-11.305-.349-20.753 8.533-21.103 19.838s8.533 20.753 19.838 21.103z"
  }), React.createElement("path", {
    d: "M51.673 466.014h414.339V51.675C241.899 62.055 62.053 241.901 51.673 466.014zm-41.433 20.48c0-263.03 213.222-476.252 476.252-476.252 11.311 0 20.48 9.169 20.48 20.48v455.772c0 11.311-9.169 20.48-20.48 20.48H30.72c-11.311 0-20.48-9.169-20.48-20.48z"
  }), React.createElement("path", {
    d: "M551.537 134.526v405.586c0 5.585-4.655 10.24-10.24 10.24H140.145c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h401.152c28.207 0 51.2-22.993 51.2-51.2V134.526c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
  }));
}