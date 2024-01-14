"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EthSign = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeModalize = require("react-native-modalize");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactI18next = require("react-i18next");
var _useWallet = require("../../../hooks/wallet/useWallet");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _ethers = require("../../../lib/ethers");
var _reactNativePortalize = require("react-native-portalize");
var _reactNative = require("react-native");
var _uilLockAccess = _interopRequireDefault(require("../../../assets/icons/uil-lock-access"));
var _AuthenticationComponent = require("../../../components/AuthenticationComponent");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _bytes = require("@ethersproject/bytes");
var _keccak = require("@ethersproject/keccak256");
var _ConnectRequest = require("./ConnectRequest");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const EthSign = exports.EthSign = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const [sign, setSign] = (0, _react.useState)(false);
  const {
    message,
    sendResult,
    sendError,
    host,
    title,
    info
  } = (0, _useWebView.useWebView)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    address
  } = (0, _useWallet.useWallet)();
  //const {height} = useWindowDimensions();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const is = (0, _react.useMemo)(() => message ? message.name === 'eth_sign' : false, [message]);
  const data = (0, _react.useMemo)(() => is && message?.object?.data ? message.object.data : '', [message, is]);
  const onSignatureMessageCancel = (0, _react.useCallback)(() => {
    if (message) {
      close();
      sendError(message.id, 'cancel');
    }
  }, [message]);
  const onSignatureMessage = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      if (message && is) {
        close();
        setSign(true);
      } else {
        setLoading(false);
        close();
      }
    }, 1);
  }, [message]);
  (0, _react.useEffect)(() => {
    if (is) {
      open();
    } else {
      close();
    }
  }, [is, message]);
  const onCancel = (0, _react.useCallback)(() => onSignatureMessageCancel(), [onSignatureMessageCancel]);
  const onConfirm = (0, _react.useCallback)(wallet => {
    if (message && is) {
      try {
        const msg = (0, _keccak.keccak256)((0, _bytes.concat)([_ethers.ethers.utils.arrayify(message.object.data)]));
        const signature = (0, _bytes.joinSignature)(wallet._signingKey().signDigest(msg));
        sendResult(message.id, signature);
      } catch (e) {
        sendError(message.id, 'cancel');
      } finally {
        setLoading(false);
        close();
        setSign(false);
      }
    } else {
      setSign(false);
    }
  }, [message, is]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    adjustToContentHeight: true,
    modalStyle: {
      backgroundColor: theme['background-basic-color-1']
    },
    closeOnOverlayTap: false,
    tapGestureEnabled: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_uilLockAccess.default, {
    size: 35,
    color: theme['color-info-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.signature_request.title'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('browser.signature_request.sign_requested'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    status: "danger"
  }, t('browser.signature_request.eth_sign_warning'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    style: {
      marginLeft: 15
    }
  }, t('browser.signature_request.message_from')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_ConnectRequest.HostItemView, {
    title: title,
    host: host,
    info: info
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.signature_request.message'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5,
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8,
      padding: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, {
    style: {
      maxHeight: 100
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, data))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onSignatureMessageCancel
  }, t('browser.signature_request.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onSignatureMessage,
    disabled: loading
  }, t('browser.signature_request.sign')))))), sign && /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    address: address
  }));
});