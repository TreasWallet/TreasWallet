"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _DarkActionComponent = require("../../components/DarkActionComponent");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _uilTimesCircle = _interopRequireDefault(require("../../assets/icons/uil-times-circle"));
var _WalletComponent = require("../../components/WalletComponent");
var _useNetworks = require("../../hooks/rpc/useNetworks");
var _flashList = require("@shopify/flash-list");
var _AssetsComponent = require("../../components/AssetsComponent");
var _useNode = require("../../hooks/rpc/useNode");
var _reactI18next = require("react-i18next");
var _useWallet = require("../../hooks/wallet/useWallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 30;
const DrawerScreen = exports.DrawerScreen = /*#__PURE__*/(0, _react.memo)(({
  navigation
}) => {
  const NavigationView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(TopNavigationView, {
    navigation: navigation
  }), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(NavigationView, null), /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      width: ITEM_HEIGHT * 1.5,
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(ChainsList, null)), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletListComponent, null))), /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(BottomView, null));
});
const TopNavigationView = /*#__PURE__*/(0, _react.memo)(({
  navigation
}) => {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    node
  } = (0, _useWallet.useWallet)();
  const toggleDrawer = (0, _react.useCallback)(() => {
    navigation.closeDrawer();
  }, []);
  const accessoryLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      item: node,
      size: style?.height * 1.3
    })
  }), [node]);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: toggleDrawer
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilTimesCircle.default, {
      size: style?.height / 1.1,
      color: style?.tintColor
    })
  }), []);
  const TopNavigationView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: node.name,
    subtitle: node.testnet ? t('networks.testnet') : t('networks.mainnet')
    // title={strHide(address)}
    ,
    alignment: "center",
    style: {
      marginTop: insets.top
    },
    accessoryRight: accessoryRight,
    accessoryLeft: accessoryLeft
  }), [node]);
  return /*#__PURE__*/_react.default.createElement(TopNavigationView, null);
});
const BottomView = /*#__PURE__*/(0, _react.memo)(() => {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      paddingBottom: insets.bottom + 15,
      paddingTop: 10,
      paddingHorizontal: 15,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react.default.createElement(_DarkActionComponent.DarkActionComponent, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletPlusAction, null)));
});
const ChainsList = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    networks
  } = (0, _useNetworks.useNetworks)();
  const theme = (0, _components.useTheme)();
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(ChainItemView, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: networks,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-1'],
      paddingBottom: 15
    },
    estimatedItemSize: ITEM_HEIGHT,
    keyExtractor: item => item.id
  });
});
const ChainItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    node,
    setNode
  } = (0, _useNode.useNode)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const onNode = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      setNode(item);
      setLoading(false);
    }, 5);
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: ITEM_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center'
      //backgroundColor: 'red',
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onNode
  }, loading ? /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  }) : /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: item,
    size: ITEM_HEIGHT / 1.2,
    opacity: node.id !== item.id
  })));
});