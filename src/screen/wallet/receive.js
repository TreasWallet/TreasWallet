"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiveScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
var _reactNativeQrcodeSvg = _interopRequireDefault(require("react-native-qrcode-svg"));
var _useWallet = require("../../hooks/wallet/useWallet");
var _reactI18next = require("react-i18next");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilCopyAlt = _interopRequireDefault(require("../../assets/icons/uil-copy-alt"));
var _AssetsComponent = require("../../components/AssetsComponent");
var _native = require("@react-navigation/native");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ReceiveScreen = exports.ReceiveScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    address,
    descAddress,
    node
  } = (0, _useWallet.useWallet)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const theme = (0, _components.useTheme)();
  const {
    params
  } = (0, _native.useRoute)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.AddressAvatarAction, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    size: width / 6,
    item: node
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "s1"
  }, node.name), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, node.testnet ? t('networks.testnet') : t('networks.mainnet'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 30
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.AddressAvatarAction, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_reactNativeQrcodeSvg.default, {
    value: descAddress,
    size: width / 2,
    backgroundColor: theme['background-basic-color-1'],
    color: theme['text-basic-color']
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, params?.asset ? /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: params.asset,
    size: width / 15
  }) : /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: address,
    size: width / 15
  }))))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(CopiedView, null))));
});
const CopiedView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    descAddress
  } = (0, _useWallet.useWallet)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const onCopied = (0, _react.useCallback)(() => {
    if (descAddress) {
      _clipboard.default.setString(descAddress);
      _reactNativeToastMessage.default.show({
        type: 'success',
        text1: t('copied_clipboard'),
        text2: descAddress
      });
    }
  }, [descAddress]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: 'tiny',
    appearance: "ghost",
    status: "basic",
    onPress: onCopied
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilCopyAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, descAddress));
});