"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HostItemView = exports.ConnectRequest = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _useWallet = require("../../../hooks/wallet/useWallet");
var _storage = require("../../../lib/storage");
var _storage2 = require("../../../config/storage");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactI18next = require("react-i18next");
var _reactNativePortalize = require("react-native-portalize");
var _reactNative = require("react-native");
var _uilCloudDataConnection = _interopRequireDefault(require("../../../assets/icons/uil-cloud-data-connection"));
var _NavigationActionComponent = require("../../../components/NavigationActionComponent");
var _AssetsComponent = require("../../../components/AssetsComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ConnectRequest = exports.ConnectRequest = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    address
  } = (0, _useWallet.useWallet)();
  const [privacyMode] = (0, _storage.useStorage)(_storage2.PRIVACY_MODE_KEY, true);
  const {
    message,
    sendResult,
    sendError,
    webViewRefs,
    setConnect,
    title,
    host,
    info
  } = (0, _useWebView.useWebView)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const is = (0, _react.useMemo)(() => message && message.name === 'requestAccounts', [message]);
  const onConnectCancel = (0, _react.useCallback)(() => {
    if (message) {
      close();
      sendError(message.id, 'cancel');
      setConnect(false);
    }
  }, [message?.id]);
  const onConnect = (0, _react.useCallback)(() => {
    close();
    if (message && is) {
      webViewRefs.current?.injectJavaScript(`window.ethereum.setAddress("${address}");`);
      sendResult(message.id, [address]);
      setConnect(true);
    }
  }, [message?.id, is, address]);
  (0, _react.useEffect)(() => {
    if (is) {
      privacyMode ? open() : onConnect();
    } else {
      close();
    }
  }, [is, privacyMode, message]);
  return /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    adjustToContentHeight: true,
    modalStyle: {
      backgroundColor: theme['background-basic-color-1']
    },
    closeOnOverlayTap: false
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_uilCloudDataConnection.default, {
    size: 35,
    color: theme['color-info-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.accountApproval.title'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('browser.accountApproval.action'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(HostItemView, {
    title: title,
    host: host,
    info: info
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.AddressAvatarAction, {
    showAddress: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onConnectCancel
  }, t('browser.accountApproval.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onConnect
  }, t('browser.accountApproval.connect'))))));
});
// @ts-ignore
const HostItemView = ({
  title,
  host,
  info
}) => {
  const theme = (0, _components.useTheme)();
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_AssetsComponent.FaviconViewComponent, {
    uri: `${info?.protocol}//${info?.hostname}/favicon.ico`,
    size: props.style?.width,
    name: host
  })), [info, host]);
  const titleView = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_components.Text, _extends({}, props, {
    numberOfLines: 1
  }), title), [title]);
  const descriptionView = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_components.Text, props, host), [host]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: titleView,
    description: descriptionView,
    accessoryLeft: accessoryLeft,
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  });
};
exports.HostItemView = HostItemView;