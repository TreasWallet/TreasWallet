"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectAssetsScreen = void 0;
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _react = _interopRequireWildcard(require("react"));
var _useAssets = require("../../hooks/wallet/useAssets");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _flashList = require("@shopify/flash-list");
var _reactNative = require("react-native");
var _WalletComponent = require("../../components/WalletComponent");
var _reactI18next = require("react-i18next");
var _index = require("./index");
var _native = require("@react-navigation/native");
var _useWallet = require("../../hooks/wallet/useWallet");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SelectAssetsScreen = exports.SelectAssetsScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletPlusTokenAction, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(ListView, null));
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    node
  } = (0, _useWallet.useWallet)();
  const {
    assets
  } = (0, _useAssets.useAssets)({
    node
  });
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const [index, setIndex] = (0, _react.useState)(0);
  const data = (0, _react.useMemo)(() => assets.filter(v => index === 0 ? !v.isERC721 : v.isERC721), [assets, index]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(_index.AssetsItem, {
    item: item,
    send: true
  }), []);
  const onIndex = (0, _react.useCallback)(i => {
    setTimeout(() => {
      (0, _react.startTransition)(() => {
        setIndex(i);
      });
    }, 1);
  }, []);
  const listHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      marginBottom: 10,
      paddingBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      marginHorizontal: 15,
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => onIndex(0)
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'p2',
    appearance: index !== 0 ? 'hint' : 'default'
  }, t('wallet.asset'))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      marginLeft: 15
    },
    onPress: () => onIndex(1)
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'p2',
    appearance: index !== 1 ? 'hint' : 'default'
  }, t('wallet.nft')))))), [index]);
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
      backgroundColor: theme['background-basic-color-2'],
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: _index.ITEM_HEIGHT,
    keyExtractor: item => item.id,
    ListHeaderComponent: listHeaderComponent
  });
});