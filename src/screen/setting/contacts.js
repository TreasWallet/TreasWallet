"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactsScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _storage = require("../../config/storage");
var _reactNative = require("react-native");
var _flashList = require("@shopify/flash-list");
var _storage2 = require("../../lib/storage");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _ethers = require("../../lib/ethers");
var _native = require("@react-navigation/native");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilPlusCircle = _interopRequireDefault(require("../../assets/icons/uil-plus-circle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 60;
const ContactsScreen = exports.ContactsScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [status, setStatus] = (0, _react.useState)(false);
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(NewAction, null), []);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      setStatus(true);
    });
    return () => setStatus(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), status ? /*#__PURE__*/_react.default.createElement(ListView, null) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "large"
  })));
});
const NewAction = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const onPlus = (0, _react.useCallback)(() => {}, []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: onPlus
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilPlusCircle.default, {
      size: style?.height,
      color: style?.tintColor
    })
  });
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const [data] = (0, _storage2.useStorage)(_storage.CONTACTS_KEY, [
    //{address: '0x90D34eFFa3CcA3068d99e0D1Bd9e22add36eb2AF'},
  ]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(ItemView, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: data,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      padding: 8,
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: ITEM_HEIGHT,
    keyExtractor: item => item.address
  });
});
const ItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const add = (0, _react.useMemo)(() => (0, _ethers.getAddress)(item.address), [item.address]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: add,
    size: props.style.width * 1.2
  })), [add]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: item.memo || (0, _ethers.strHide)(item.address, 4, 4),
    description: (0, _ethers.strHide)(item.address),
    accessoryLeft: accessoryLeft
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      height: ITEM_HEIGHT
    }
  });
});