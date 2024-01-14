"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _uilAngleLeftB = _interopRequireDefault(require("../../../assets/icons/uil-angle-left-b"));
var _uilAngleRightB = _interopRequireDefault(require("../../../assets/icons/uil-angle-right-b"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BottomView = exports.BottomView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    canGoBack,
    goBack,
    canGoForward,
    goForward
  } = (0, _useWebView.useWebView)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return canGoBack || canGoForward ? /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeInDown,
    style: {
      paddingBottom: insets.bottom,
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    style: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: goBack,
    disabled: !canGoBack
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilAngleLeftB.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: goForward,
    disabled: !canGoForward
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
});