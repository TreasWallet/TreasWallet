"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactI18next = require("react-i18next");
var _reactNative = require("react-native");
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
var _native = require("@react-navigation/native");
var _AssetsComponent = require("../../components/AssetsComponent");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _flashList = require("@shopify/flash-list");
var _useRpc = require("../../hooks/rpc/useRpc");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _uilCheckCircle = _interopRequireDefault(require("../../assets/icons/uil-check-circle"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _useBlock = require("../../hooks/wallet/useBlock");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 50;
const NodeScreen = exports.NodeScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, [params]);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      size: style?.height,
      item: params.item
    })
  }), [params]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(ListView, null));
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const node = params.item;
  const {
    rpcList
  } = (0, _useRpc.useRpc)({
    node
  });
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  const renderItem = (0, _react.useCallback)(({
    item,
    index
  }) => /*#__PURE__*/_react.default.createElement(NodeItemView, {
    item: item,
    index: index
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: rpcList,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      paddingTop: 15,
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: ITEM_HEIGHT,
    ListHeaderComponent: /*#__PURE__*/_react.default.createElement(Descriptions, null),
    keyExtractor: item => item
  });
});
const NodeItemView = /*#__PURE__*/(0, _react.memo)(({
  item,
  index
}) => {
  const {
    params
  } = (0, _native.useRoute)();
  const node = params.item;
  //const {ms} = useSpeed({rpc: item});
  const {
    block,
    ms
  } = (0, _useBlock.useBlock)({
    rpc: item
  });
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [value, setValue] = (0, _storage.useStorage)(`${_storage2.NODE_RPC_KEY}_${node.id}`);
  const onNode = (0, _react.useCallback)(() => {
    setValue(item);
  }, [item]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 15,
      marginLeft: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1',
    appearance: "hint",
    numberOfLines: 1
  }, block ? t('nodes.block_height', {
    n: block
  }) : '')), [block]);
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
  }, value === item && /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  })), [value, item]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: style?.height,
    color: ms.lte(0) ? theme['color-basic-600'] : ms.gte(3000) ? theme['color-danger-600'] : ms.gte(2000) ? theme['color-warning-600'] : theme['color-success-600'],
    name: "dot-single"
  })), [ms]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('nodes.node_number', {
      n: index + 1
    }),
    onPress: onNode,
    description: description,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      marginHorizontal: 10,
      height: ITEM_HEIGHT
    }
  }));
});
const Descriptions = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_components.Card, {
    disabled: true,
    appearance: "filled",
    style: {
      marginHorizontal: 15,
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, t('nodes.connection_state_descriptions')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: 32,
    color: theme['color-basic-600'],
    name: "dot-single"
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, t('nodes.unknown'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: 32,
    color: theme['color-success-600'],
    name: "dot-single"
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, t('nodes.fast'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: 32,
    color: theme['color-warning-600'],
    name: "dot-single"
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, t('nodes.average'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: 32,
    color: theme['color-danger-600'],
    name: "dot-single"
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, t('nodes.slow')))));
});