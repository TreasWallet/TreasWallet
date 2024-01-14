"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWebView = require("../../../hooks/browser/useWebView");
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LoadingView = exports.LoadingView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    progress
  } = (0, _useWebView.useWebView)();
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.CircularProgressBar, {
    progress: progress,
    size: "tiny"
  }));
});