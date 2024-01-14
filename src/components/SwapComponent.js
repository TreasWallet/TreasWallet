"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapComponent = exports.SwapActionComponent = exports.ITEM_HEIGHT = void 0;
var _react = _interopRequireWildcard(require("react"));
var _flashList = require("@shopify/flash-list");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _cos = require("../lib/cos");
var _useSwaps = require("../hooks/rpc/useSwaps");
var _uilCheckCircle = _interopRequireDefault(require("../assets/icons/uil-check-circle"));
var _reactNativeModalize = require("react-native-modalize");
var _reactI18next = require("react-i18next");
var _reactNativePortalize = require("react-native-portalize");
var _useWallet = require("../hooks/wallet/useWallet");
var _uilAngleRightB = _interopRequireDefault(require("../assets/icons/uil-angle-right-b"));
var _native = require("@react-navigation/native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = exports.ITEM_HEIGHT = 60;
const SwapComponent = exports.SwapComponent = /*#__PURE__*/(0, _react.memo)(({
  node
}) => {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const swap = (0, _react.useMemo)(() => node.swaps, [node]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(SwapItemView, {
    item: item,
    node: node
  }), [node]);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: swap,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      paddingHorizontal: 15,
      paddingVertical: 15,
      paddingBottom: insets.bottom + 15
    },
    estimatedFirstItemOffset: 1,
    estimatedItemSize: ITEM_HEIGHT,
    keyExtractor: item => item.router_address
    //ListHeaderComponent={listHeaderComponent}
  });
});
const SwapItemView = /*#__PURE__*/(0, _react.memo)(({
  item,
  node
}) => {
  const {
    swap,
    setSwap
  } = (0, _useSwaps.useSwaps)({
    node
  });
  const rource = (0, _react.useMemo)(() => (0, _cos.getCosImageSource)(`/swap/${item.name}`), [item]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, rource ? /*#__PURE__*/_react.default.createElement(_components.Avatar, {
    source: rource,
    style: {
      width: style.width,
      height: style.width,
      borderRadius: style.width / 2
    }
    //ImageComponent={FastImage}
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), [rource]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) =>
  /*#__PURE__*/
  // @ts-ignore
  _react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, swap?.router_address === item.router_address && /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  })), [swap, item]);
  const onSwap = (0, _react.useCallback)(() => {
    setSwap(item);
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onSwap,
    title: item.show_name,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      height: ITEM_HEIGHT
    }
  }));
});
const SwapActionComponent = exports.SwapActionComponent = /*#__PURE__*/(0, _react.memo)(({
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
  const {
    node
  } = (0, _useWallet.useWallet)();
  const swaps = (0, _react.useMemo)(() => node.swaps, [node]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const onOpen = (0, _react.useCallback)(() => {
    open();
  }, []);
  const onClose = (0, _react.useCallback)(() => {
    close();
  }, []);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(SwapView, {
    item: item,
    onClose: onClose,
    asset: asset
  }), [onClose, asset]);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('tool.swap'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
    //  accessoryRight={accessoryRight}
    // accessoryLeft={accessoryLeft}
    //subtitle={asset.name}
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onOpen
  }, children), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    },
    flatListProps: {
      data: swaps,
      renderItem: renderItem,
      ItemSeparatorComponent: itemSeparatorComponent,
      keyExtractor: item => item.router_address,
      contentContainerStyle: {
        backgroundColor: theme['background-basic-color-2'],
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom: insets.bottom + 15
      }
    }
  })));
});
const SwapView = /*#__PURE__*/(0, _react.memo)(({
  item,
  onClose,
  asset
}) => {
  const navigation = (0, _native.useNavigation)();
  const rource = (0, _react.useMemo)(() => (0, _cos.getCosImageSource)(`/swap/${item.name}`), [item]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, rource ? /*#__PURE__*/_react.default.createElement(_components.Avatar, {
    source: rource,
    style: {
      width: style.width,
      height: style.width,
      borderRadius: style.width / 2
    }
    //ImageComponent={FastImage}
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), [rource]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  })), []);
  const onSwap = (0, _react.useCallback)(() => {
    const value = `${item.swap_url}${asset?.id || ''}`; //${params?.asset?.id || ''}
    // @ts-ignore
    navigation.navigate('WebViewScreen', {
      value
    });
    onClose();
  }, [item, asset]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onSwap,
    title: item.show_name,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      height: ITEM_HEIGHT
    }
  }));
});