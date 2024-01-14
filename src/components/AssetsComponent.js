"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenView = exports.ScanView = exports.RecsSearchTokenView = exports.FaviconViewComponent = exports.AssetsAvatarComponent = void 0;
var _components = require("@ui-kitten/components");
var _react = _interopRequireWildcard(require("react"));
var _cos = require("../lib/cos");
var _reactNative = require("react-native");
var _reactNativeUserAvatar = _interopRequireDefault(require("react-native-user-avatar"));
var _ethers = require("../lib/ethers");
var _BlockiesComponent = require("./BlockiesComponent");
var _storage = require("../lib/storage");
var _useAssets = require("../hooks/wallet/useAssets");
var _storage2 = require("../config/storage");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _flashList = require("@shopify/flash-list");
var _reactI18next = require("react-i18next");
var _uilAngleRightB = _interopRequireDefault(require("../assets/icons/uil-angle-right-b"));
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _useWallet = require("../hooks/wallet/useWallet");
var _uilCheckCircle = _interopRequireDefault(require("../assets/icons/uil-check-circle"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _WalletComponent = require("./WalletComponent");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativePortalize = require("react-native-portalize");
var _useToken = require("../hooks/wallet/useToken");
var _useRpc = require("../hooks/rpc/useRpc");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _uilQrcodeScan = _interopRequireDefault(require("../assets/icons/uil-qrcode-scan"));
var _uilClipboardAlt = _interopRequireDefault(require("../assets/icons/uil-clipboard-alt"));
var _reactNativeCameraKit = require("react-native-camera-kit");
var _cameraFlipIcon = _interopRequireDefault(require("../assets/images/cameraFlipIcon.png"));
var _torchOn = _interopRequireDefault(require("../assets/images/torchOn.png"));
var _torchOff = _interopRequireDefault(require("../assets/images/torchOff.png"));
var _NavigationActionComponent = require("./NavigationActionComponent");
var _useAvatar = require("../hooks/wallet/useAvatar");
var _reactNativeFastImage = _interopRequireDefault(require("react-native-fast-image"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _native = require("@react-navigation/native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const AssetsAvatarComponent = exports.AssetsAvatarComponent = /*#__PURE__*/(0, _react.memo)(({
  size,
  item,
  opacity
}) => {
  const [err, setErr] = (0, _react.useState)(false);
  const {
    source
  } = (0, _useAvatar.useAvatar)({
    item
  });
  const onError = (0, _react.useCallback)(() => {
    setErr(true);
  }, []);
  /*const AvatarView = useCallback(
      () => (
        <Avatar
          source={source}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            opacity: opacity ? 0.5 : 1,
          }}
          onError={() => setErr(true)}
          ImageComponent={FastImage}
        />
      ),
      [source],
    );*/
  return source ? err ? /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    size: size,
    address: item.id
  }) : /*#__PURE__*/_react.default.createElement(_components.Avatar, {
    source: source,
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      opacity: opacity ? 0.5 : 1
    },
    onError: onError
    // ImageComponent={FastImage}
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  }));
});
const FaviconViewComponent = exports.FaviconViewComponent = /*#__PURE__*/(0, _react.memo)(({
  size,
  uri,
  name
}) => {
  const [error, setError] = (0, _react.useState)(false);
  return error ? /*#__PURE__*/_react.default.createElement(_reactNativeUserAvatar.default, {
    size: size,
    name: name
  }) : /*#__PURE__*/_react.default.createElement(_reactNativeFastImage.default, {
    source: {
      uri
    },
    style: {
      height: size,
      width: size,
      borderRadius: size * 0.5
    },
    onError: () => setError(true)
  });
});
const TokenView = exports.TokenView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    node
  } = (0, _useWallet.useWallet)();
  const [assets] = (0, _storage.useStorage)(`${_storage2.WATCH_ASSET}_${node.id}`, []);
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(AssetsItem, {
    item: item
  }), []);
  const ListHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(RecTokenView, null), /*#__PURE__*/_react.default.createElement(CustomTokenView, null), /*#__PURE__*/_react.default.createElement(CustomNftView, null)), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: assets
    //refreshing={loading}
    //onRefresh={getRecommendation}
    ,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: _WalletComponent.ITEM_HEIGHT,
    ListHeaderComponent: ListHeaderComponent,
    keyExtractor: item => item.id
    //numColumns={parseInt(`${width / 50}`)}
  }));
});
const RecTokenView = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  //const {node} = useWallet();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
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
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default
  // @ts-ignore
  , {
    size: style?.height
    // @ts-ignore
    ,
    color: style?.tintColor,
    name: "tag-search"
  })), []);
  const onOpen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('SearchTokenScreen');
    /*   setTimeout(() => {
      getRecommendation();
    }, 1000);*/
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('add_asset.search_token'),
    accessoryRight: accessoryRight,
    accessoryLeft: accessoryLeft,
    onPress: onOpen
  });
});
const RecsSearchTokenView = exports.RecsSearchTokenView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    node
  } = (0, _useWallet.useWallet)();
  const theme = (0, _components.useTheme)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [value, setValue] = (0, _react.useState)('');
  const [data, setData] = (0, _react.useState)([]);
  const [recommendation, setRecommendation] = (0, _storage.useStorage)(`${_storage2.REC_TOKEN}_${node.id}`, []);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getRecommendation();
    }, 1000);
    return () => clearTimeout(id);
  }, []);
  const getRecommendation = (0, _react.useCallback)(() => {
    const {
      uri,
      headers
    } = (0, _cos.getCosImageSource)(`/tokens/${node.id}.json`);
    fetch(uri, {
      headers
    }).then(j => j.json()).then(setRecommendation);
  }, [node.id]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      const d = value ? recommendation.filter(v => v.symbol.toLowerCase().search(value.toLowerCase()) !== -1 //v.symbol.toLowerCase() === value.toLowerCase(), //
      ) : [];
      setData(d);
    }, 1000);
    return () => clearTimeout(id);
  }, [value, recommendation]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(AssetsItem, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      paddingHorizontal: 15,
      paddingBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    placeholder: `${t('token.token_symbol')}`,
    value: value,
    onChangeText: setValue
  })), /*#__PURE__*/_react.default.createElement(_components.Divider, null), /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: data,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      //paddingHorizontal: 15,
      paddingVertical: 15,
      paddingBottom: insets.bottom + 15
    },
    estimatedFirstItemOffset: 1,
    estimatedItemSize: _WalletComponent.ITEM_HEIGHT,
    keyExtractor: item => item.id
    //ListHeaderComponent={listHeaderComponent}
  }));
});
const CustomTokenView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    height: windowHeight
  } = (0, _reactNative.useWindowDimensions)();
  const modalHeight = (0, _react.useMemo)(() => windowHeight - insets.top - 80, [windowHeight, insets.top]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
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
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_MaterialIcons.default
  // @ts-ignore
  , {
    size: style?.height
    // @ts-ignore
    ,
    color: style?.tintColor,
    name: "generating-tokens"
  })), []);
  const onOpen = (0, _react.useCallback)(() => {
    open();
  }, []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('add_asset.custom_token'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('add_asset.custom_token'),
    accessoryRight: accessoryRight,
    accessoryLeft: accessoryLeft,
    onPress: onOpen
  }), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(CustomTokenQueryView, null)))));
});
const CustomTokenQueryView = /*#__PURE__*/(0, _react.memo)(() => {
  const [value, setValue] = (0, _react.useState)('');
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    node,
    isTron
  } = (0, _useWallet.useWallet)();
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const {
    info
  } = (0, _useToken.useToken)({
    token: value,
    rpc
  });
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const onClipboard = (0, _react.useCallback)(async () => {
    _reactNative.Keyboard.dismiss();
    const code = await _clipboard.default.getString();
    onItem(code);
  }, []);
  const onItem = (0, _react.useCallback)(code => {
    if (isTron && (0, _ethers.isAddressTrx)(code)) {
      setValue(code);
    } else if (!isTron && (0, _ethers.isAddress)(code)) {
      setValue((0, _ethers.getAddress)(code));
    }
  }, []);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.ScanAction, {
    onItem: onItem
  }, /*#__PURE__*/_react.default.createElement(_uilQrcodeScan.default, {
    size: style?.height / 1.1,
    color: style?.tintColor
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onClipboard,
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_uilClipboardAlt.default, {
    size: style?.height,
    color: style?.tintColor
  }))), []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      paddingBottom: insets.bottom + 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1,
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: value,
    label: t('token.token_address'),
    placeholder: t('token.token_address'),
    onChangeText: setValue,
    accessoryRight: accessoryRight,
    style: {
      margin: 15
    },
    multiline: true
  })), info && /*#__PURE__*/_react.default.createElement(AssetsItem, {
    item: info
  }));
});
const ScanView = exports.ScanView = /*#__PURE__*/(0, _react.memo)(({
  onItem,
  showFrame
}) => {
  const [code, setCode] = (0, _react.useState)('');
  const [ok, setOK] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const onReadCode = e => {
    setCode(e.nativeEvent.codeStringValue);
  };
  (0, _react.useEffect)(() => {
    requestMultiple();
  }, []);
  const requestMultiple = (0, _react.useCallback)(async () => {
    if (_reactNative.Platform.OS === 'android') {
      try {
        await _reactNative.PermissionsAndroid.requestMultiple([_reactNative.PermissionsAndroid.PERMISSIONS.CAMERA]);
        const check = await _reactNative.PermissionsAndroid.check(_reactNative.PermissionsAndroid.PERMISSIONS.CAMERA);
        if (check) {
          setOK(check);
        }
      } catch (err) {}
    } else {
      setOK(true);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (code) {
      onItem && onItem(code);
    }
  }, [code, onItem]);
  return ok ? /*#__PURE__*/_react.default.createElement(_reactNativeCameraKit.CameraScreen
  // @ts-ignore
  , {
    flashImages: {
      on: require('../assets/images/flashOn.png'),
      off: require('../assets/images/flashOff.png'),
      auto: require('../assets/images/flashAuto.png')
    },
    onReadCode: onReadCode,
    cameraFlipImage: _cameraFlipIcon.default,
    torchOnImage: _torchOn.default,
    torchOffImage: _torchOff.default,
    scanBarcode: true,
    showFrame: showFrame
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('transfer.no_camera_permission_android')));
});
const CustomNftView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    height: windowHeight
  } = (0, _reactNative.useWindowDimensions)();
  const modalHeight = (0, _react.useMemo)(() => windowHeight - insets.top - 80, [windowHeight, insets.top]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
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
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_MaterialIcons.default
  // @ts-ignore
  , {
    size: style?.height
    // @ts-ignore
    ,
    color: style?.tintColor,
    name: "collections"
  })), []);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('add_asset.title_nft'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), []);
  const onOpen = (0, _react.useCallback)(() => {
    open();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onOpen,
    title: t('add_asset.title_nft'),
    accessoryRight: accessoryRight
    // @ts-ignore
    ,
    accessoryLeft: accessoryLeft
  }), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(CustomTokenQueryView, null)))));
});
const AssetsItem = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    address,
    node
  } = (0, _useWallet.useWallet)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    setWatchAsset,
    ids
  } = (0, _useAssets.useAssets)({
    node
  });
  const check = (0, _react.useMemo)(() => ids.includes(item.id), [item, ids]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(AssetsAvatarComponent, {
    item: item,
    size: style.width * 1.2
  })), [item, node]);
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
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, check ? /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  }) : /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  }))), [item, node, address, check]);
  /*  const BalanceNodeItemView = useCallback(
    () => <BalanceNodeItem asset={item} node={node} address={address} />,
    [item, node, address],
  );
  const description = useCallback<any>(
    // @ts-ignore
    ({style}) =>
      item.isERC721 ? (
        <Text style={style}>{item.symbol}</Text>
      ) : (
        <View style={style}>
          <PriceComponent asset={item} node={node} />
        </View>
      ),
    [item, node],
  );*/

  const canItem = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      setWatchAsset(prevValue => {
        const o = prevValue.filter(v => v.id !== item.id);
        return check ? [...o] : [...o, item];
      });
      setLoading(false);
    }, 5);
  }, [check, setWatchAsset, item]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: canItem,
    title: item.symbol,
    description: item.name,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      height: _WalletComponent.ITEM_HEIGHT,
      marginHorizontal: 15
    }
  }), loading && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      ..._reactNative.StyleSheet.absoluteFillObject
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, null))));
});