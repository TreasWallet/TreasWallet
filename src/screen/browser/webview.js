"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebViewScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWebViewContext = require("../../hooks/browser/useWebViewContext");
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactNativeWebview = _interopRequireDefault(require("react-native-webview"));
var _useWebView = require("../../hooks/browser/useWebView");
var _reactNative = require("react-native");
var _useDark = require("../../hooks/theme/useDark");
var _ConnectRequest = require("./components/ConnectRequest");
var _SignatureMessageRequest = require("./components/SignatureMessageRequest");
var _SwitchChain = require("./components/SwitchChain");
var _WatchAsset = require("./components/WatchAsset");
var _SignTransaction = require("./components/SignTransaction");
var _RenderHeader = require("./components/RenderHeader");
var _ErrorView = require("./components/ErrorView");
var _LoadingView = require("./components/LoadingView");
var _BottomView = require("./components/BottomView");
var _EthSign = require("./components/EthSign");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WebViewScreen = exports.WebViewScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const value = (0, _useWebViewContext.useWebViewContext)();
  return /*#__PURE__*/_react.default.createElement(_useWebViewContext.WebViewContext.Provider, {
    value: value
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(WebViewComponent, null)));
});
const WebViewComponent = () => {
  const {
    uri,
    js
  } = (0, _useWebView.useWebView)();
  const [enableEthSign] = (0, _storage.useStorage)(_storage2.ENABLE_ETH_SIGN_KEY, false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_RenderHeader.RenderHeader, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, uri && js && /*#__PURE__*/_react.default.createElement(WebViewItem, null), /*#__PURE__*/_react.default.createElement(_BottomView.BottomView, null), /*#__PURE__*/_react.default.createElement(_ConnectRequest.ConnectRequest, null), /*#__PURE__*/_react.default.createElement(_SignatureMessageRequest.SignatureMessageRequest, null), /*#__PURE__*/_react.default.createElement(_SwitchChain.SwitchChain, null), /*#__PURE__*/_react.default.createElement(_WatchAsset.WatchAsset, null), /*#__PURE__*/_react.default.createElement(_SignTransaction.SignTransaction, null), enableEthSign && /*#__PURE__*/_react.default.createElement(_EthSign.EthSign, null)));
};
const WebViewItem = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    webViewRefs,
    uri,
    onMessage,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onError,
    onLoadProgress,
    onContentProcessDidTerminate,
    onOpenWindow,
    js
  } = (0, _useWebView.useWebView)();
  //const {readableVersion} = useVersion();
  const renderLoading = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_LoadingView.LoadingView, null), []);
  const renderError = (0, _react.useCallback)((errorDomain, errorCode, errorDesc) => /*#__PURE__*/_react.default.createElement(_ErrorView.ErrorView, {
    errorDomain: errorDomain,
    errorCode: errorCode,
    errorDesc: errorDesc
  }), []);
  const theme = (0, _components.useTheme)();
  const {
    dark
  } = (0, _useDark.useDark)();
  return uri && js ? /*#__PURE__*/_react.default.createElement(_reactNativeWebview.default
  // @ts-ignore
  , {
    ref: webViewRefs,
    source: {
      uri
    },
    style: {
      flex: 1,
      backgroundColor: theme['background-basic-color-2']
    },
    onMessage: onMessage,
    onLoad: onLoad,
    onLoadEnd: onLoadEnd,
    onLoadStart: onLoadStart,
    onError: onError,
    onLoadProgress: onLoadProgress
    //onScroll={onScroll}
    ,
    onOpenWindow: onOpenWindow,
    onContentProcessDidTerminate: onContentProcessDidTerminate,
    injectedJavaScriptBeforeContentLoaded: js,
    javaScriptEnabled: true,
    forceDarkOn: dark
    //applicationNameForUserAgent={`TreasWallet/${readableVersion}`}
    ,
    setSupportMultipleWindows: false,
    scalesPageToFit: false,
    startInLoadingState: true,
    renderLoading: renderLoading,
    renderError: renderError,
    setBuiltInZoomControls: false,
    setDisplayZoomControls: false,
    allowsFullscreenVideo: false,
    mixedContentMode: "compatibility",
    androidLayerType: "hardware",
    originWhitelist: ['https://*'],
    bounce: true,
    cacheEnabled: true,
    mediaPlaybackRequiresUserAction: true,
    cacheMode: "LOAD_DEFAULT",
    containerStyle: {
      flex: 1
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
});