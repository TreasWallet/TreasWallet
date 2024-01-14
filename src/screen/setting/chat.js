"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatSettingScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactI18next = require("react-i18next");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useWallet = require("../../hooks/wallet/useWallet");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _flashList = require("@shopify/flash-list");
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _ethers = require("../../lib/ethers");
var _uilCheckCircle = _interopRequireDefault(require("../../assets/icons/uil-check-circle"));
var _chat = require("../../config/chat");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 50;
const ChatSettingScreen = exports.ChatSettingScreen = /*#__PURE__*/(0, _react.memo)(() => {
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(ListView, null));
});
const SwitchChat = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [switchChat, setSwitchChat] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_KEY, _chat.IM_ENABLED);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: switchChat,
    onChange: setSwitchChat
  }), [switchChat]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('chat.open_chat'),
    description: t('chat.open_chat_desc'),
    accessoryRight: accessoryRight
  });
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const [switchChat] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_KEY, _chat.IM_ENABLED);
  const {
    wallets
  } = (0, _useWallet.useWallet)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(WalletItemView, {
    item: item
  }), []);
  const listHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(SwitchChat, null)), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: switchChat ? wallets : [],
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: ITEM_HEIGHT,
    ListHeaderComponent: listHeaderComponent,
    keyExtractor: item => item
  });
});
const WalletItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [switchChatAddress, setSwitchChatAddress] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_ADDRESS_KEY);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: item,
    size: style.width * 1.2
  })), [item]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, loading ? /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  }) : switchChatAddress === item ? /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), [switchChatAddress, item, loading]);
  const switchChat = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      setSwitchChatAddress(item);
      setLoading(false);
    }, 5);
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: switchChat,
    title: (0, _ethers.strHide)(item),
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      marginHorizontal: 10,
      height: ITEM_HEIGHT
    }
  }));
});