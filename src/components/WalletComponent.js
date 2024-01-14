"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletPlusTokenAction = exports.WalletPlusAction = exports.WalletListComponent = exports.WalletItemView = exports.ITEM_HEIGHT = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWallet = require("../hooks/wallet/useWallet");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
var _flashList = require("@shopify/flash-list");
var _BlockiesComponent = require("./BlockiesComponent");
var _ethers = require("../lib/ethers");
var _uilCheckCircle = _interopRequireDefault(require("../assets/icons/uil-check-circle"));
var _reactI18next = require("react-i18next");
var _uilPlusCircle = _interopRequireDefault(require("../assets/icons/uil-plus-circle"));
var _uilImport = _interopRequireDefault(require("../assets/icons/uil-import"));
var _useNewWallet = require("../hooks/wallet/useNewWallet");
var _BalanceComponent = require("./BalanceComponent");
var _native = require("@react-navigation/native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = exports.ITEM_HEIGHT = 60;
const WalletListComponent = exports.WalletListComponent = /*#__PURE__*/(0, _react.memo)(() => {
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
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: wallets,
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
    keyExtractor: item => item
    //ListHeaderComponent={listHeaderComponent}
  });
});
const WalletItemView = exports.WalletItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    address,
    descAddress,
    setWallet,
    node,
    isTron
  } = (0, _useWallet.useWallet)();
  const [back] = (0, _storage.useStorage)(`${_storage2.WALLET_BACK_KEY}_${item}`, false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const desAddress = (0, _react.useMemo)(() => (0, _ethers.descriptionAddress)(item, isTron), [isTron, item]);
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
  }) : address === item && /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  })), [address, item, loading]);
  const canWallet = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      setWallet(item);
      setLoading(false);
    }, 5);
  }, [item]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, back ? /*#__PURE__*/_react.default.createElement(_BalanceComponent.BalanceNodeItem, {
    address: item,
    asset: node,
    node: node
  }) : /*#__PURE__*/_react.default.createElement(_components.Text, {
    status: 'warning',
    category: "c1",
    style: {
      fontSize: 10
    }
  }, t('security.seedphrase_not_backed_up'))), [item, node]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: canWallet,
    title: (0, _ethers.strHide)(desAddress),
    description: description
    // @ts-ignore
    ,
    accessoryLeft: accessoryLeft
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      height: ITEM_HEIGHT
    }
  }));
});
const WalletPlusAction = exports.WalletPlusAction = /*#__PURE__*/(0, _react.memo)(() => {
  const [visible, setVisible] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    newWallet
  } = (0, _useNewWallet.useNewWallet)();
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: () => setVisible(true)
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilPlusCircle.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), []);
  const onCreate = (0, _react.useCallback)(async () => {
    setLoading(true);
    setTimeout(() => canCreate(), 1);
  }, []);
  const onImport = (0, _react.useCallback)(() => {
    setVisible(false);
    // @ts-ignore
    navigation.navigate('WalletImportSeedScreen');
  }, []);
  const canCreate = (0, _react.useCallback)(async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const mnemonic = (0, _ethers.createMnemonic)();
        await newWallet(undefined, mnemonic);
      } catch (e) {} finally {
        setLoading(false);
        setVisible(false);
      }
    }, 500);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: onCreate,
    title: t('onboarding.start_exploring_now'),
    accessoryRight: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, loading ? /*#__PURE__*/_react.default.createElement(_components.Spinner, {
      size: "tiny"
    }) : /*#__PURE__*/_react.default.createElement(_uilPlusCircle.default
    // @ts-ignore
    , {
      size: props.style?.height
      // @ts-ignore
      ,
      color: props.style?.tintColor
    }))
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: onImport,
    title: t('import_from_seed.import_button')
    // @ts-ignore
    ,
    accessoryRight: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_uilImport.default
    // @ts-ignore
    , {
      size: props.style?.height
      // @ts-ignore
      ,
      color: props.style?.tintColor
    }))
  }));
});
const WalletPlusTokenAction = exports.WalletPlusTokenAction = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const onAsset = (0, _react.useCallback)(() => {
    //open();
    // @ts-ignore
    navigation.navigate('AddAssetScreen');
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: onAsset
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