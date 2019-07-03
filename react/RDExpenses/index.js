function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function RDExpenses(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M317.549 624.938c24.62 0 35.833 3.971 58.987 17.637 28.894 17.054 46.596 23.323 79.806 23.323 33.223 0 50.933-6.268 79.84-23.318 23.175-13.669 34.401-17.642 59.045-17.642s35.871 3.973 59.042 17.64c28.91 17.052 46.62 23.32 79.844 23.32 11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48c-24.638 0-35.862-3.972-59.03-17.638-28.913-17.054-46.626-23.322-79.855-23.322s-50.942 6.268-79.851 23.32c-23.172 13.668-34.396 17.64-59.034 17.64-24.62 0-35.833-3.971-58.987-17.637-28.894-17.054-46.596-23.323-79.806-23.323-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zM513.584 253.185c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM594.071 376.475c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM510.84 498.535c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96z"
  }), React.createElement("path", {
    d: "M848.763 983.022c50.405 0 79.365-57.347 49.361-98.025l-244.73-336.554c-12.476-17.171-21.975-46.392-21.975-67.611V71.683c0-16.968-13.754-30.72-30.72-30.72h-177.49c-16.972 0-30.72 13.748-30.72 30.72v409.59c0 21.235-9.54 50.452-22.068 67.602l-245.558 336.13c-30.05 40.54-1.106 98.018 49.36 98.018h674.54zm0 40.96h-674.54c-84.111 0-132.352-95.797-82.35-163.254l245.473-336.015c7.405-10.138 14.182-30.894 14.182-43.441V71.682c0-39.594 32.086-71.68 71.68-71.68h177.49c39.586 0 71.68 32.089 71.68 71.68v409.149c0 12.567 6.759 33.36 14.147 43.528l244.644 336.436c49.868 67.608 1.601 163.187-82.407 163.187z"
  }));
}