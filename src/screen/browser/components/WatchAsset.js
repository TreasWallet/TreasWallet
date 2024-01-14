"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatchAsset = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactI18next = require("react-i18next");
var _useToken = require("../../../hooks/wallet/useToken");
var _useRpc = require("../../../hooks/rpc/useRpc");
var _reactNativePortalize = require("react-native-portalize");
var _uilCreateDashboard = _interopRequireDefault(require("../../../assets/icons/uil-create-dashboard"));
var _AssetsComponent = require("../../../components/AssetsComponent");
var _useAssets = require("../../../hooks/wallet/useAssets");
var _useWallet = require("../../../hooks/wallet/useWallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WatchAsset = exports.WatchAsset = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    message,
    sendResult,
    sendError
  } = (0, _useWebView.useWebView)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const is = (0, _react.useMemo)(() => message ? message.name === 'watchAsset' : false, [message]);
  const {
    node
  } = (0, _useWallet.useWallet)();
  const {
    setWatchAsset
  } = (0, _useAssets.useAssets)({
    node
  });
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const info = (0, _react.useMemo)(() => is && message ? message.object : undefined, [is, message]);
  const {
    info: token,
    loading
  } = (0, _useToken.useToken)({
    token: info?.contract,
    rpc
  });
  const onCancel = (0, _react.useCallback)(() => {
    if (message) {
      close();
      sendError(message.id, 'cancel');
    }
  }, [message]);
  const onAdd = (0, _react.useCallback)(() => {
    close();
    if (message && is && token) {
      setWatchAsset(prevValue => {
        const data = prevValue.filter(v => v.id !== token.id);
        return [...data, token];
      });
      sendResult(message.id);
    }
  }, [message, is, token, setWatchAsset]);
  (0, _react.useEffect)(() => {
    if (is) {
      open();
    } else {
      close();
    }
  }, [is, message]);
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
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_uilCreateDashboard.default, {
    size: 35,
    color: theme['color-info-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.watch_asset_request.title'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('browser.watch_asset_request.message'))), loading && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "large"
  })), token && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    size: width / 6,
    item: token
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    style: {
      marginTop: 10
    }
  }, `${token.name} (${token.symbol})`), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    style: {
      marginTop: 10
    }
  }, token.id)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onCancel
  }, t('browser.watch_asset_request.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onAdd,
    disabled: !token
  }, t('browser.watch_asset_request.add'))))));
});