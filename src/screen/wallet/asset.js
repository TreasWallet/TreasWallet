"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _native = require("@react-navigation/native");
var _AssetsComponent = require("../../components/AssetsComponent");
var _reactNative = require("react-native");
var _useBalance = require("../../hooks/wallet/useBalance");
var _useWallet = require("../../hooks/wallet/useWallet");
var _reactI18next = require("react-i18next");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilCopyAlt = _interopRequireDefault(require("../../assets/icons/uil-copy-alt"));
var _ethers = require("../../lib/ethers");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _uilAngleDown = _interopRequireDefault(require("../../assets/icons/uil-angle-down"));
var _uilArrowCircleUp = _interopRequireDefault(require("../../assets/icons/uil-arrow-circle-up"));
var _uilArrowCircleDown = _interopRequireDefault(require("../../assets/icons/uil-arrow-circle-down"));
var _usePrice = require("../../hooks/wallet/usePrice");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _useNFT = require("../../hooks/wallet/useNFT");
var _flashList = require("@shopify/flash-list");
var _LogoComponent = require("../../components/LogoComponent");
var _TokenComponent = require("../../components/TokenComponent");
var _SwapComponent = require("../../components/SwapComponent");
var _InfoComponent = require("../../components/InfoComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AssetsScreen = exports.AssetsScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    node
  } = (0, _useWallet.useWallet)();
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, [node]);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      size: style?.height,
      item: node
    })
  }), [node]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(HeaderView, null), /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(ContentView, null));
});
const ContentView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  return asset.isERC721 ? /*#__PURE__*/_react.default.createElement(ContentNFTView, null) : /*#__PURE__*/_react.default.createElement(ContentTokenView, null);
});
const ContentTokenView = /*#__PURE__*/(0, _react.memo)(() => {
  return /*#__PURE__*/_react.default.createElement(EmptyComponentView, null);
});
const ContentNFTView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    address,
    node
  } = (0, _useWallet.useWallet)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  const {
    loading,
    balance,
    getBalance
  } = (0, _useNFT.useNFT)({
    address,
    asset,
    node
  });
  const theme = (0, _components.useTheme)();
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(NFTItem, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    refreshing: loading,
    onRefresh: getBalance,
    data: balance,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      padding: 10
    }
    //estimatedItemSize={width / 3}
    ,
    numColumns: 2,
    ListEmptyComponent: EmptyComponentView,
    keyExtractor: item => item.id
  }));
});
const NFTItem = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const theme = (0, _components.useTheme)();
  const onAmount = (0, _react.useCallback)(() => {}, [item]);
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const size = (0, _react.useMemo)(() => (width - 15 - 15) / 2, [width]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onAmount
  }, /*#__PURE__*/_react.default.createElement(_components.Avatar, {
    style: {
      height: size,
      width: size,
      borderRadius: 5
    },
    source: {
      uri: item.uri
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      left: 5,
      top: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme['color-basic-500'],
      borderRadius: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 's1',
    status: "control",
    style: {
      fontSize: 10
    }
  }, `#${item.id}`))));
});
const EmptyComponentView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: require('../../assets/lottie/nonotification.json'),
    autoPlay: true,
    loop: true,
    style: {
      width: width / 2,
      height: width / 2
    },
    resizeMode: "cover"
  }));
});
const HeaderView = () => {
  const theme = (0, _components.useTheme)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      paddingVertical: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "3",
    style: {
      height: 150,
      borderRadius: 8,
      marginHorizontal: 15,
      backgroundColor: theme['border-primary-color-1']
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement(CopiedView, null), /*#__PURE__*/_react.default.createElement(SwitchAvatarView, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    size: 50,
    item: asset
  }), /*#__PURE__*/_react.default.createElement(BalanceView, null)), /*#__PURE__*/_react.default.createElement(BottomView, null)), /*#__PURE__*/_react.default.createElement(ToolView, null));
};
const BottomView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const toReceiveScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('ReceiveScreen', {
      asset
    });
  }, []);
  const toSelectAssetsScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('SendScreen', {
      asset
    });
  }, [asset]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: theme['border-primary-color-2'],
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    style: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    },
    onPress: toSelectAssetsScreen,
    appearance: "ghost",
    status: "control"
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilArrowCircleUp.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, t('transfer.send'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    style: {
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    },
    onPress: toReceiveScreen,
    appearance: "ghost",
    status: "control"
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilArrowCircleDown.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, t('transfer.receive'))));
});
const BalanceView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    address,
    node
  } = (0, _useWallet.useWallet)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  const {
    balance
  } = (0, _useBalance.useBalance)({
    asset,
    node,
    address
  });
  const {
    price,
    amountCurrency
  } = (0, _usePrice.usePrice)({
    asset,
    node
  });
  const priceBN = (0, _react.useMemo)(() => balance.multipliedBy((0, _bignumber.default)(price)), [price, balance]);
  const [eye, setEye] = (0, _storage.useStorage)(`${_storage2.WALLET_EYE_KEY}`, true);
  const onEye = (0, _react.useCallback)(() => {
    setEye(!eye);
  }, [eye]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onEye,
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h5",
    status: "control"
  }, eye ? balance.toFormat(asset.isERC721 ? 0 : 6) : '***'), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    status: "control",
    style: {
      marginLeft: 3
    }
  }, asset?.symbol || '')), !asset.isERC721 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    status: "control",
    appearance: "hint",
    style: {
      fontSize: 12
    }
  }, eye ? `≈${priceBN.toFormat(6)}` : '***'), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    status: "control",
    appearance: "hint",
    style: {
      marginLeft: 3,
      fontSize: 8
    }
  }, amountCurrency?.symbol || '')));
});
const CopiedView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    address,
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
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: address,
    size: props.style.width
  }), [address]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: 'tiny',
    appearance: "ghost",
    status: "control",
    style: {
      backgroundColor: theme['border-primary-color-2'],
      borderRadius: 0,
      borderBottomRightRadius: 8,
      borderTopLeftRadius: 8
    },
    onPress: onCopied,
    accessoryLeft: accessoryLeft
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilCopyAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, (0, _ethers.strHide)(descAddress)));
});
const SwitchAvatarView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.AddressAvatarAction, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginRight: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_uilAngleDown.default, {
    size: 25,
    color: theme['text-control-color']
  }))));
});
const ToolView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    descAddress,
    address,
    node,
    isSwap
  } = (0, _useWallet.useWallet)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  const isToken = (0, _react.useMemo)(() => (0, _ethers.isAddress)(asset.id) || (0, _ethers.isAddressTrx)(asset.id), [asset]);
  const toScreen = (0, _react.useCallback)(name => {
    // @ts-ignore
    navigation.navigate(name);
  }, []);
  const toExplorer = (0, _react.useCallback)(() => {
    const value = `${node.explorer.url}${node.explorer.accountPath}${descAddress}`;
    // @ts-ignore
    navigation.navigate('WebViewScreen', {
      value
    });
  }, [node]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_InfoComponent.InfoComponent, {
    asset: asset
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgFileInfoAlt, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('info.title'))))), isSwap && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_SwapComponent.SwapActionComponent, {
    asset: asset
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgChannel, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('tool.swap'))))), isToken && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TokenComponent.TokenCheckComponent, {
    asset: asset
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgShieldExclamation, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('risk.title'))))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      alignItems: 'center'
    },
    onPress: toExplorer
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgDesktopCloudAlt, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('tool.explorer'))))));
});