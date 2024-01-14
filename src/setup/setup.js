"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Setup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _navigation = require("./navigation");
var _useApp = require("../hooks/theme/useApp");
var _reactI18next = require("react-i18next");
var eva = _interopRequireWildcard(require("@eva-design/eva"));
var _useWalletApp = require("../hooks/wallet/useWalletApp");
var _useChatApp = require("../hooks/chat/useChatApp");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
_components.ModalService.setShouldUseTopInsets = true;
const Setup = exports.Setup = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    theme,
    i18n
  } = (0, _useApp.useApp)();
  const wallet = (0, _useWalletApp.useWalletApp)();
  return /*#__PURE__*/_react.default.createElement(_components.ApplicationProvider, _extends({}, eva, {
    theme: theme
  }), /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
    i18n: i18n
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.GestureHandlerRootView, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaProvider, null, /*#__PURE__*/_react.default.createElement(_useWalletApp.WalletContext.Provider, {
    value: wallet
  }, /*#__PURE__*/_react.default.createElement(SetupChat, null))))));
});
const SetupChat = /*#__PURE__*/(0, _react.memo)(() => {
  const chat = (0, _useChatApp.useChatApp)();
  return /*#__PURE__*/_react.default.createElement(_useChatApp.ChatContext.Provider, {
    value: chat
  }, /*#__PURE__*/_react.default.createElement(SetupNavigation, null));
});
const SetupNavigation = /*#__PURE__*/(0, _react.memo)(() => /*#__PURE__*/_react.default.createElement(_navigation.Navigation, null));