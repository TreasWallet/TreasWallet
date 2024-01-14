"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBarComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StatusBarComponent = props => {
  const theme = (0, _native.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, _extends({
    barStyle: theme.dark ? 'light-content' : 'dark-content',
    backgroundColor: theme.colors.card
  }, props));
};
exports.StatusBarComponent = StatusBarComponent;