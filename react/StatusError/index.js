function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function StatusError(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512zm-61.44-312.556c2.197 23.452 10.023 40.59 23.478 51.414s27.596 15.935 42.424 15.334c14.828-.601 28.283-6.765 40.365-18.491s17.574-28.413 16.476-50.061c-.549-14.432-3.707-26.459-9.473-36.08s-13.043-16.837-21.83-21.648c-8.787-4.811-18.123-7.066-28.008-6.765s-19.359 2.856-28.42 7.667c-9.062 4.811-16.75 12.177-23.066 22.099s-10.297 22.099-11.945 36.531zm.978-470.921l-.978 5.295v271.967c0 17.651 6.03 31.183 18.09 40.597s25.423 14.415 40.091 15.003c14.667.588 28.357-3.677 41.069-12.797s19.394-22.799 20.045-41.039c1.304-25.888 2.282-51.188 2.933-75.899s.815-49.717.489-75.017c-.326-25.3-.978-51.482-1.956-78.547s-2.119-23.382-3.422-53.977c-6.519-14.709-15.156-25.447-25.912-32.213s-21.838-9.855-33.246-9.267c-11.408.588-22.327 4.854-32.757 12.797s-18.579 18.975-24.446 33.096z"
  }));
}