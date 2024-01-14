"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryCurrencyScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _native = require("@react-navigation/native");
var _reactNativeKeyboardAwareScrollView = require("react-native-keyboard-aware-scroll-view");
var _reactNative = require("react-native");
var _reactI18next = require("react-i18next");
var _usePrimaryCurrency = require("../../hooks/rpc/usePrimaryCurrency");
var _useToken = require("../../hooks/wallet/useToken");
var _useRpc = require("../../hooks/rpc/useRpc");
var _AssetsComponent = require("../../components/AssetsComponent");
var _ethers = require("../../lib/ethers");
var _SwapComponent = require("../../components/SwapComponent");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 60;
const PrimaryCurrencyScreen = exports.PrimaryCurrencyScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    params
  } = (0, _native.useRoute)();
  const node = params.item;
  const {
    primaryCurrency,
    setPrimaryCurrency
  } = (0, _usePrimaryCurrency.usePrimaryCurrency)({
    node
  });
  const [price, setPrice] = (0, _react.useState)('');
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const {
    info
  } = (0, _useToken.useToken)({
    token: price,
    rpc
  });
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (primaryCurrency) {
        setPrice(primaryCurrency);
      }
    });
  }, [primaryCurrency]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) =>
  /*#__PURE__*/
  // @ts-ignore
  _react.default.createElement(_reactNative.View, {
    style: {
      style
    }
  }, info && /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: info,
    size: style.width
  })), [info]);
  const onSave = (0, _react.useCallback)(() => {
    if (node.id === 'tron' && price && info && (0, _ethers.isAddressTrx)(price)) {
      setPrimaryCurrency(price);
    } else if (price && info && (0, _ethers.isAddress)(price)) {
      setPrimaryCurrency(price);
    }
    navigation.goBack();
  }, [price, primaryCurrency, node]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    enableAutomaticScroll: true,
    extraScrollHeight: 50
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      padding: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    style: {
      marginTop: 10
    },
    value: price,
    label: t('primary_currency.value_contract_address'),
    onChangeText: setPrice,
    autoComplete: 'off',
    autoCorrect: false,
    accessoryLeft: accessoryLeft,
    multiline: true,
    caption: t('primary_currency.value_contract_address_desc')
  })), info && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onSave
  }, t('primary_currency.save')))), /*#__PURE__*/_react.default.createElement(_SwapComponent.SwapComponent, {
    node: node
  }))));
});