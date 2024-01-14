"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _reactI18next = require("react-i18next");
var _components = require("@ui-kitten/components");
var _reactNativePortalize = require("react-native-portalize");
var _cos = require("../lib/cos");
var _ethers = require("../lib/ethers");
var _useToken = require("../hooks/wallet/useToken");
var _useWallet = require("../hooks/wallet/useWallet");
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
var _native = require("@react-navigation/native");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _AssetsComponent = require("./AssetsComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const InfoComponent = exports.InfoComponent = /*#__PURE__*/(0, _react.memo)(({
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
  const isToken = (0, _react.useMemo)(() => asset ? (0, _ethers.isAddress)(asset.id) || (0, _ethers.isAddressTrx)(asset.id) : false, [asset]);
  const snapPoint = (0, _react.useMemo)(() => modalHeight / 1.5, [modalHeight]);
  const onOpen = (0, _react.useCallback)(() => {
    open();
  }, [asset]);
  const onClose = (0, _react.useCallback)(() => {
    close();
  }, []);
  const accessoryLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      item: asset,
      size: style.width * 1.2
    }))
  }), [asset]);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('info.title'),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
    //  accessoryRight={accessoryRight}
    ,
    accessoryLeft: accessoryLeft,
    subtitle: asset?.name
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), [asset]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onOpen
  }, children), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: snapPoint,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    }
  }, isToken && asset && /*#__PURE__*/_react.default.createElement(AssetInfoView, {
    asset: asset
  }), asset && /*#__PURE__*/_react.default.createElement(TokenInfoView, {
    asset: asset,
    onClose: onClose
  }))));
});
const TokenInfoView = /*#__PURE__*/(0, _react.memo)(({
  asset,
  onClose
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const [info, setInfo] = (0, _storage.useStorage)(`${_storage2.TOKEN_ASSET_INFO_KEY}_${asset?.id}`);
  const toExplorer = (0, _react.useCallback)(() => {
    // @ts-ignore
    if (info?.explorer) {
      // @ts-ignore
      navigation.navigate('WebViewScreen', {
        value: info.explorer
      });
      onClose();
    }
  }, [info]);
  const toWebsite = (0, _react.useCallback)(() => {
    // @ts-ignore
    if (info?.website) {
      // @ts-ignore
      navigation.navigate('WebViewScreen', {
        value: info.website
      });
      onClose();
    }
  }, [info]);
  const onCopied = (0, _react.useCallback)(content => {
    _clipboard.default.setString(content);
    _reactNativeToastMessage.default.show({
      type: 'success',
      text1: t('copied_clipboard'),
      text2: content
    });
  }, []);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getInfo();
    }, 500);
    return () => clearTimeout(id);
  }, []);
  const getInfo = (0, _react.useCallback)(() => {
    if (asset) {
      const {
        uri,
        headers
      } = (0, _cos.getCosImageSource)(`/info/${asset.id}.json`);
      fetch(uri, {
        headers
      }).then(res => res.json()).then(setInfo);
    }
  }, [asset]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, info?.description && /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.description && onCopied(info.description),
    title: t('info.description'),
    description: info.description
  }), info?.explorer && /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toExplorer,
    title: t('info.explorer'),
    description: info.explorer
  }), info?.website && /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toWebsite,
    title: t('info.website'),
    description: info.website
  }));
});
const AssetInfoView = /*#__PURE__*/(0, _react.memo)(({
  asset
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    rpc
  } = (0, _useWallet.useWallet)();
  const {
    info
  } = (0, _useToken.useToken)({
    token: asset.id,
    rpc
  });
  const onCopied = (0, _react.useCallback)(content => {
    _clipboard.default.setString(content);
    _reactNativeToastMessage.default.show({
      type: 'success',
      text1: t('copied_clipboard'),
      text2: content
    });
  }, []);
  return info ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.id && onCopied(info.id),
    title: t('token.token_address'),
    description: info.id
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.name && onCopied(info.name),
    title: t('token.token_name'),
    description: info.name
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.symbol && onCopied(info.symbol),
    title: t('token.token_symbol'),
    description: info.symbol
  }), !info.isERC721 && /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.decimals && onCopied(`${info.decimals}`),
    title: t('token.token_decimal'),
    description: info.decimals
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => info.totalSupply && onCopied(info.totalSupply),
    title: t('token.max_total_supply'),
    description: info.totalSupply
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
});