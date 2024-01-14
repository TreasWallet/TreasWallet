"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenCheckComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeModalize = require("react-native-modalize");
var _reactNative = require("react-native");
var _components = require("@ui-kitten/components");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativePortalize = require("react-native-portalize");
var _reactI18next = require("react-i18next");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TokenCheckComponent = exports.TokenCheckComponent = /*#__PURE__*/(0, _react.memo)(({
  children,
  asset
}) => {
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    height: windowHeight
  } = (0, _reactNative.useWindowDimensions)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
  const modalHeight = (0, _react.useMemo)(() => windowHeight - insets.top - 80, [windowHeight, insets.top]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const onOpen = (0, _react.useCallback)(() => {
    open();
  }, []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('risk.title'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
    //  accessoryRight={accessoryRight}
    // accessoryLeft={accessoryLeft}
    ,
    subtitle: asset.name
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), [asset]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onOpen
  }, children), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(TokenRisk, {
    asset: asset
  }))));
});
const TokenRisk = /*#__PURE__*/(0, _react.memo)(({
  asset
}) => {
  //const {node} = useWallet();
  //const {rpc} = useRpc({node});
  //const {loading} = useTokenRisk({token: asset.id, rpc});

  const {
    t
  } = (0, _reactI18next.useTranslation)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.mintable'),
    description: t('risk.mintable_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.ownership_retrieval'),
    description: t('risk.ownership_retrieval_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.balance_manipulation'),
    description: t('risk.balance_manipulation_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.hidden_ownership'),
    description: t('risk.hidden_ownership_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.self_destruction'),
    description: t('risk.self_destruction_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.external_invocation'),
    description: t('risk.external_invocation_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.black_list'),
    description: t('risk.black_list_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.full_sale_restriction'),
    description: t('risk.full_sale_restriction_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.slippage_modification'),
    description: t('risk.slippage_modification_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.transfer_pausable'),
    description: t('risk.transfer_pausable_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.personal_slippage_modification'),
    description: t('risk.personal_slippage_modification_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.transaction_whitelisting'),
    description: t('risk.transaction_whitelisting_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.anti_whale'),
    description: t('risk.anti_whale_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.anti_whale_modification'),
    description: t('risk.anti_whale_modification_desc')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('risk.trading_cooldown'),
    description: t('risk.trading_cooldown_desc')
  }));
});