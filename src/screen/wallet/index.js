"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletScreen = exports.ITEM_HEIGHT = exports.AssetsItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _native = require("@react-navigation/native");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _reactNative = require("react-native");
var _uilArrowCircleDown = _interopRequireDefault(require("../../assets/icons/uil-arrow-circle-down"));
var _uilArrowCircleUp = _interopRequireDefault(require("../../assets/icons/uil-arrow-circle-up"));
var _useWallet = require("../../hooks/wallet/useWallet");
var _reactI18next = require("react-i18next");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _ethers = require("../../lib/ethers");
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilCopyAlt = _interopRequireDefault(require("../../assets/icons/uil-copy-alt"));
var _uilAngleDown = _interopRequireDefault(require("../../assets/icons/uil-angle-down"));
var _LogoComponent = require("../../components/LogoComponent");
var _useBalanceTotal = require("../../hooks/wallet/useBalanceTotal");
var _flashList = require("@shopify/flash-list");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _useAssets = require("../../hooks/wallet/useAssets");
var _AssetsComponent = require("../../components/AssetsComponent");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _PriceComponent = require("../../components/PriceComponent");
var _BalanceComponent = require("../../components/BalanceComponent");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _WalletComponent = require("../../components/WalletComponent");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _SwapComponent = require("../../components/SwapComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = exports.ITEM_HEIGHT = 60;
const WalletScreen = exports.WalletScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      //title: chain.name,
      headerLeft,
      headerRight
    });
  }, []);
  const headerLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.DrawerNavigationAction, null), []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.ScanAction, {
    onItem: onItem
  }), []);
  const onItem = (0, _react.useCallback)(address => {
    if ((0, _ethers.isAddress)(address) || (0, _ethers.isAddressTrx)(address)) {
      // @ts-ignore
      navigation.navigate('SelectAssetsScreen', {
        address
      });
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(ListView, null));
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [index, setIndex] = (0, _react.useState)(0);
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
  const data = (0, _react.useMemo)(() => assets.filter(v => index === 0 ? !v.isERC721 : v.isERC721), [assets, index]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(AssetsItem, {
    item: item
  }), []);
  const onIndex = (0, _react.useCallback)(i => {
    setTimeout(() => {
      (0, _react.startTransition)(() => {
        setIndex(i);
      });
    }, 1);
  }, []);
  const listHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(WalletHeader, null), /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
  }, t('wallet.nft')))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletPlusTokenAction, null))))), [index]);
  const listEmptyComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(EmptyComponentView, {
    index: index
  }), [index]);
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
    estimatedItemSize: ITEM_HEIGHT,
    ListHeaderComponent: listHeaderComponent,
    ListEmptyComponent: listEmptyComponent,
    keyExtractor: item => item.id
  });
});
const EmptyComponentView = /*#__PURE__*/(0, _react.memo)(({
  index
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
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
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    appearance: "hint"
  }, index === 0 ? t('wallet.no_available_tokens') : t('wallet.no_collectibles')));
});
const AssetsItem = exports.AssetsItem = /*#__PURE__*/(0, _react.memo)(({
  item,
  send
}) => {
  const navigation = (0, _native.useNavigation)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    address,
    node
  } = (0, _useWallet.useWallet)();
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: item,
    size: style.width * 1.2
  })), [item]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_BalanceComponent.BalanceNodeItem, {
    asset: item,
    node: node,
    address: address
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  }))), [item, node, address]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => item.isERC721 ? /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: style
  }, item.symbol) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_PriceComponent.PriceComponent, {
    asset: item,
    node: node
  })), [item, node]);
  const toScreen = (0, _react.useCallback)(() => {
    if (send) {
      navigation.dispatch(_native.StackActions.replace('SendScreen', {
        asset: item,
        address: params?.address
      }));
    } else {
      // @ts-ignore
      navigation.navigate('AssetsScreen', {
        asset: item
      });
    }
  }, [item, send]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toScreen,
    title: item.symbol,
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
const WalletHeader = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    isTron
  } = (0, _useWallet.useWallet)();
  const BottomToolView = (0, _react.useCallback)(() => isTron ? /*#__PURE__*/_react.default.createElement(ToolTronView, null) : /*#__PURE__*/_react.default.createElement(ToolView, null), [isTron]);
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
  }, /*#__PURE__*/_react.default.createElement(CopiedView, null), /*#__PURE__*/_react.default.createElement(SwitchAvatarView, null)), /*#__PURE__*/_react.default.createElement(BalanceView, null), /*#__PURE__*/_react.default.createElement(BottomView, null)), /*#__PURE__*/_react.default.createElement(BottomToolView, null));
});
const BottomView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const toReceiveScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('ReceiveScreen');
  }, []);
  const toSelectAssetsScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('SelectAssetsScreen');
  }, []);
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
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilArrowCircleDown.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, t('transfer.receive'))));
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
  return /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.AddressAvatarAction, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginRight: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_uilAngleDown.default, {
    size: 25,
    color: theme['text-control-color']
  }))));
});
const BalanceView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    amountCurrency,
    totalPrice
  } = (0, _useBalanceTotal.useBalanceTotal)();
  const [eye, setEye] = (0, _storage.useStorage)(`${_storage2.WALLET_EYE_KEY}`, true);
  const onEye = (0, _react.useCallback)(() => {
    setEye(!eye);
  }, [eye]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onEye,
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h5",
    status: "control"
  }, eye ? totalPrice.toFormat(6) : '***'), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    status: "control",
    style: {
      marginLeft: 3
    }
  }, amountCurrency?.symbol || '')));
});
const ToolTronView = /*#__PURE__*/(0, _react.memo)(() => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
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
  }, isSwap && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_SwapComponent.SwapActionComponent, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
  }, t('tool.swap'))))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      alignItems: 'center'
    },
    onPress: () => toScreen('SecurityScreen')
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgShieldCheck, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('tool.secure')))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      alignItems: 'center'
    },
    onPress: () => toScreen('ContactsScreen')
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgBookReader, {
    width: 25,
    height: 25,
    fill: theme['text-primary-color']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('tool.contacts')))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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