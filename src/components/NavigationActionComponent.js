"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarNavigationAction = exports.ShareAction = exports.ScanAction = exports.NewFeetAction = exports.MeAddressAvatar = exports.GithubAction = exports.DrawerNavigationAction = exports.AddressAvatarAction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWallet = require("../hooks/wallet/useWallet");
var _BlockiesComponent = require("./BlockiesComponent");
var _components = require("@ui-kitten/components");
var _native = require("@react-navigation/native");
var _uilQrcodeScan = _interopRequireDefault(require("../assets/icons/uil-qrcode-scan"));
var _useOpenURL = require("../hooks/app/useOpenURL");
var _useShare = require("../hooks/app/useShare");
var _uilShareAlt = _interopRequireDefault(require("../assets/icons/uil-share-alt"));
var _github = require("../config/github");
var _uilGithub = _interopRequireDefault(require("../assets/icons/uil-github"));
var _uilPlusCircle = _interopRequireDefault(require("../assets/icons/uil-plus-circle"));
var _reactI18next = require("react-i18next");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _ethers = require("../lib/ethers");
var _reactNativePortalize = require("react-native-portalize");
var _WalletComponent = require("./WalletComponent");
var _AssetsComponent = require("./AssetsComponent");
var _uilAngleRightB = _interopRequireDefault(require("../assets/icons/uil-angle-right-b"));
var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));
var _useAssets = require("../hooks/wallet/useAssets");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DrawerNavigationAction = exports.DrawerNavigationAction = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    node
  } = (0, _useWallet.useWallet)();
  const toggleDrawer = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.openDrawer();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: toggleDrawer
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      size: style?.height,
      item: node
    })
  });
});
const StarNavigationAction = exports.StarNavigationAction = /*#__PURE__*/(0, _react.memo)(({
  item,
  node
}) => {
  const {
    ids,
    setWatchAsset
  } = (0, _useAssets.useAssets)({
    node
  });
  const check = (0, _react.useMemo)(() => ids.includes(item.id), [item, ids]);
  const canItem = (0, _react.useCallback)(() => {
    //setLoading(true);
    setTimeout(() => {
      setWatchAsset(prevValue => {
        const o = prevValue.filter(v => v.id !== item.id);
        return check ? [...o] : [...o, item];
      });
      //setLoading(false);
    }, 5);
  }, [check, setWatchAsset, item]);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: canItem
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AntDesign.default, {
      size: style?.height,
      name: check ? 'star' : 'staro',
      color: style?.tintColor
    })
  });
});
const ScanAction = exports.ScanAction = /*#__PURE__*/(0, _react.memo)(({
  onItem,
  children
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    height
  } = (0, _reactNative.useWindowDimensions)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const theme = (0, _components.useTheme)();
  const onScanScreen = (0, _react.useCallback)(() => {
    _reactNative.Keyboard.dismiss();
    open();
  }, []);
  const canItem = (0, _react.useCallback)(code => {
    close();
    onItem && onItem(code);
  }, []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('onboarding.scan'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onScanScreen
  }, children) : /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: onScanScreen
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilQrcodeScan.default, {
      size: style?.height / 1.1,
      color: style?.tintColor
    })
  }), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    adjustToContentHeight: true,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      height: height / 1.5
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.ScanView, {
    onItem: canItem,
    showFrame: false
  })))));
});
const ShareAction = () => {
  const {
    onShare
  } = (0, _useShare.useShare)();
  const canShare = (0, _react.useCallback)(() => onShare(), []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: canShare
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilShareAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })
  });
};
exports.ShareAction = ShareAction;
const GithubAction = () => {
  const {
    canOpenURL
  } = (0, _useOpenURL.useOpenURL)();
  const canGithub = (0, _react.useCallback)(() => canOpenURL(_github.GITHUB_URL), []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: canGithub
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilGithub.default, {
      size: style?.height,
      color: style?.tintColor
    })
  });
};
exports.GithubAction = GithubAction;
const NewFeetAction = exports.NewFeetAction = /*#__PURE__*/(0, _react.memo)(() => {
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
const AddressAvatarAction = exports.AddressAvatarAction = /*#__PURE__*/(0, _react.memo)(({
  showAddress,
  children
}) => {
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    height: windowHeight
  } = (0, _reactNative.useWindowDimensions)();
  const {
    wallets
  } = (0, _useWallet.useWallet)();
  const theme = (0, _components.useTheme)();
  const {
    descAddress
  } = (0, _useWallet.useWallet)();
  const modalHeight = (0, _react.useMemo)(() => windowHeight - insets.top - 80, [windowHeight, insets.top]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const onAddress = (0, _react.useCallback)(() => {
    open();
  }, []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('browser.switch_address'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
    //  accessoryRight={accessoryRight}
    ,
    accessoryLeft: accessoryLeft,
    subtitle: (0, _ethers.strHide)(descAddress)
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), [descAddress]);
  //  const accessoryRight = useCallback(() => <WalletPlusAction />, []);
  const accessoryLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(MeAddressAvatar, {
    size: 30
  }), []);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletItemView, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onAddress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, children)) : showAddress ? /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onAddress,
    title: (0, _ethers.strHide)(descAddress)
    // @ts-ignore
    ,
    accessoryRight: accessoryRight
    // @ts-ignore
    ,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(MeAddressAvatar
    // @ts-ignore
    , {
      size: props.style.width
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  }) : /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: onAddress
    // @ts-ignore
    ,
    icon: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      address: descAddress
      // @ts-ignore
      ,
      size: props.style.width
    }))
  }), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    },
    flatListProps: {
      data: wallets,
      renderItem: renderItem,
      keyExtractor: item => item,
      ItemSeparatorComponent: itemSeparatorComponent,
      contentContainerStyle: {
        backgroundColor: theme['background-basic-color-2'],
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom: insets.bottom + 15
      }
    }
  })));
});
const MeAddressAvatar = exports.MeAddressAvatar = /*#__PURE__*/(0, _react.memo)(({
  size
}) => {
  const {
    address
  } = (0, _useWallet.useWallet)();
  return /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: address,
    size: size
  });
});