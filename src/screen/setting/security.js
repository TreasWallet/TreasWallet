"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _storage = require("../../config/storage");
var _reactI18next = require("react-i18next");
var _storage2 = require("../../lib/storage");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNative = require("react-native");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _flashList = require("@shopify/flash-list");
var _ethers = require("../../lib/ethers");
var _useWallet = require("../../hooks/wallet/useWallet");
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _native = require("@react-navigation/native");
var _reactNativeFingerprintScanner = _interopRequireDefault(require("react-native-fingerprint-scanner"));
var _WalletComponent = require("../../components/WalletComponent");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 50;
const SecurityScreen = exports.SecurityScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_WalletComponent.WalletPlusAction, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(ListView, null)));
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    wallets,
    address
  } = (0, _useWallet.useWallet)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const data = (0, _react.useMemo)(
  // @ts-ignore
  () => [address, ...wallets.filter(v => v !== address)], [address, wallets]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(WalletItemView, {
    item: item
  }), []);
  const listHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(PrivacyModeView, null), /*#__PURE__*/_react.default.createElement(EnableBiometricsView, null), /*#__PURE__*/_react.default.createElement(ClearBrowserHistoryView, null), /*#__PURE__*/_react.default.createElement(ClearClipboardView, null), /*#__PURE__*/_react.default.createElement(ResetPasswordView, null)), []);
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
    keyExtractor: item => item
  });
});
const WalletItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const [back] = (0, _storage2.useStorage)(`${_storage.WALLET_BACK_KEY}_${item}`, false);
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
  const description = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_components.Text, {
    status: back ? 'success' : 'warning',
    category: "c1",
    style: {
      fontSize: 10
    }
  }, back ? t('security.seedphrase_backed_up') : t('security.seedphrase_not_backed_up'))), [back]);
  const toKey = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('SecurityWalletScreen', {
      address: item
    });
  }, [item]);
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
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toKey,
    title: (0, _ethers.strHide)(item),
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
const ResetPasswordView = () => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: props.style?.height,
    color: props.style?.tintColor
  }), []);
  const toScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('ResetPasswordScreen');
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toScreen,
    title: t('reset_password.title'),
    description: t('reset_password.subtitle'),
    accessoryRight: accessoryRight
  });
};
const PrivacyModeView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [privacyMode, setPrivacyMode] = (0, _storage2.useStorage)(_storage.PRIVACY_MODE_KEY, true);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  () => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: privacyMode,
    onChange: setPrivacyMode
  }), [privacyMode]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('security.privacy_mode'),
    description: t('security.privacy_mode_desc'),
    accessoryRight: accessoryRight
  });
});
const EnableBiometricsView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [enableBiometrics, setEnableBiometrics] = (0, _storage2.useStorage)(_storage.ENABLE_BIOMETRICS_KEY, false);
  const authenticateBiometrics = (0, _react.useCallback)(async () => {
    try {
      await _reactNativeFingerprintScanner.default.authenticate({
        title: t('biometrics.enable_biometrics'),
        subTitle: t('authentication.fingerprint_prompt_desc'),
        cancelButton: t('cancel')
      });
      setEnableBiometrics(!enableBiometrics);
    } catch (e) {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('failed'),
        text2: t('biometrics.enable_biometrics_desc')
      });
    } finally {
      _reactNativeFingerprintScanner.default.release();
    }
  }, [enableBiometrics]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  () => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: enableBiometrics,
    onChange: authenticateBiometrics
  }), [enableBiometrics]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('biometrics.enable_biometrics'),
    description: t('biometrics.enable_biometrics_desc'),
    accessoryRight: accessoryRight
  });
});
const ClearClipboardView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => loading ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...props.style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  })) : /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: props.style?.height,
    color: props.style?.tintColor
  }), [loading]);
  const onClear = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      _clipboard.default.setString('');
      _reactNativeToastMessage.default.show({
        type: 'success',
        text1: t('security.success'),
        text2: t('security.clear_clipboard')
      });
      setLoading(false);
    }, 100);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onClear,
    title: t('security.clear_clipboard'),
    description: t('security.clear_clipboard_desc'),
    accessoryRight: accessoryRight
  });
});
const ClearBrowserHistoryView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => loading ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...props.style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  })) : /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: props.style?.height,
    color: props.style?.tintColor
  }), [loading]);
  const onClear = (0, _react.useCallback)(() => {
    _reactNative.Alert.alert(t('security.clear_browser_history_modal_title'), t('security.clear_browser_history_modal_message'), [{
      text: t('security.cancel'),
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    }, {
      text: t('security.clear'),
      onPress: () => {
        setLoading(true);
        setTimeout(() => {
          _storage2.storage.setArrayAsync(_storage.HISTORY_LIST_KEY, []).then(() => {
            _reactNativeToastMessage.default.show({
              type: 'success',
              text1: t('security.success'),
              text2: t('security.clear_browser_history')
            });
          }).finally(() => setLoading(false));
        }, 1);
      },
      style: 'destructive'
    }]);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onClear,
    title: t('security.clear_browser_history'),
    description: t('security.clear_browser_history_desc'),
    accessoryRight: accessoryRight
  });
});