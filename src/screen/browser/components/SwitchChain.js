"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchChain = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _useWallet = require("../../../hooks/wallet/useWallet");
var _useNetworks = require("../../../hooks/rpc/useNetworks");
var _reactNative = require("react-native");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactI18next = require("react-i18next");
var _useNode = require("../../../hooks/rpc/useNode");
var _useRpc = require("../../../hooks/rpc/useRpc");
var _reactNativePortalize = require("react-native-portalize");
var _uilCloudDataConnection = _interopRequireDefault(require("../../../assets/icons/uil-cloud-data-connection"));
var _AssetsComponent = require("../../../components/AssetsComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SwitchChain = exports.SwitchChain = /*#__PURE__*/(0, _react.memo)(() => {
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
  const {
    networks
  } = (0, _useNetworks.useNetworks)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    message,
    sendResult,
    sendError,
    webViewRefs
  } = (0, _useWebView.useWebView)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const is = (0, _react.useMemo)(() => message ? message.name === 'switchEthereumChain' || message.name === 'switchChain' : false, [message]);
  const chainId = (0, _react.useMemo)(() => is && message?.object?.chainId ? `${Number(message?.object?.chainId)}` : undefined, [is, message]);
  const node = (0, _react.useMemo)(() => is && chainId ? networks.find(v => v.chainId === chainId) : undefined, [chainId, is]);
  const {
    setNode,
    node: currentNode
  } = (0, _useNode.useNode)();
  //  const {rpc} = useRpc({node});
  const {
    rpc: currentRpc
  } = (0, _useRpc.useRpc)({
    node: currentNode
  });
  (0, _react.useEffect)(() => {
    webViewRefs.current?.injectJavaScript(`
      window.ethereum.setConfig({ethereum: {address: "${address}",chainId: ${currentNode.chainId},rpcUrl: "${currentRpc}"},isDebug: false});
      window.ethereum.emitChainChanged(${currentNode.chainId});`);
  }, [currentNode, currentRpc]);
  const onCancel = (0, _react.useCallback)(() => {
    if (message) {
      close();
      sendError(message.id, 'cancel');
    }
  }, [message]);
  const onSwitch = (0, _react.useCallback)(() => {
    close();
    if (message && is && node) {
      setNode(node);
      sendResult(message.id);
    }
  }, [message, is, node]);
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
  }, /*#__PURE__*/_react.default.createElement(_uilCloudDataConnection.default, {
    size: 35,
    color: theme['color-info-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.switch_custom_network.title_existing_network'))), node && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    size: width / 6,
    item: node
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "s1"
  }, node.name), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, node.testnet ? t('networks.testnet') : t('networks.mainnet'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onCancel
  }, t('browser.switch_custom_network.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onSwitch,
    disabled: !node
  }, t('browser.switch_custom_network.switch'))))));
});