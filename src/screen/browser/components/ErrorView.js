"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactI18next = require("react-i18next");
var _useWebView = require("../../../hooks/browser/useWebView");
var _components = require("@ui-kitten/components");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ErrorView = exports.ErrorView = /*#__PURE__*/(0, _react.memo)(({
  errorDomain,
  errorCode,
  errorDesc
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    onReload,
    error
  } = (0, _useWebView.useWebView)();
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      ..._reactNative.StyleSheet.absoluteFillObject
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: width / 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: require('../../../assets/lottie/networkserror.json'),
    autoPlay: true,
    loop: true,
    style: {
      width: width / 1.5,
      height: width / 1.5
    },
    resizeMode: "cover"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginHorizontal: 30
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('browser.webview_error.title')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.webview_error.message')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    status: "basic",
    appearance: "hint"
  }, errorDesc || error)), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onReload,
    appearance: "ghost",
    style: {
      marginTop: 15
    }
  }, t('browser.reload'))));
});