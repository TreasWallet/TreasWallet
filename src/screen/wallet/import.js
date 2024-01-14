"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletImportSeedScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
var _ethers = require("../../lib/ethers");
var _reactNativeKeyboardAwareScrollView = require("react-native-keyboard-aware-scroll-view");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactI18next = require("react-i18next");
var _native = require("@react-navigation/native");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _uilQrcodeScan = _interopRequireDefault(require("../../assets/icons/uil-qrcode-scan"));
var _uilClipboardAlt = _interopRequireDefault(require("../../assets/icons/uil-clipboard-alt"));
var _uilKeySkeletonAlt = _interopRequireDefault(require("../../assets/icons/uil-key-skeleton-alt"));
var _uilImport = _interopRequireDefault(require("../../assets/icons/uil-import"));
var _useNewWallet = require("../../hooks/wallet/useNewWallet");
var _wallet = require("../../config/wallet");
var _create = require("../welcome/create");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WalletImportSeedScreen = exports.WalletImportSeedScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [seedPhrase, setSeedPhrase] = (0, _react.useState)('');
  const [seedPhraseErr, setSeedPhraseErr] = (0, _react.useState)(false);
  const [path, setPath] = (0, _react.useState)(_wallet.ETHEREUM_PATH);
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    newWallet
  } = (0, _useNewWallet.useNewWallet)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const isMnemonic = (0, _react.useMemo)(() => (0, _ethers.isValidMnemonic)(seedPhrase), [seedPhrase]);
  const keyIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilKeySkeletonAlt.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const LoadingIndicator = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [props.style, {
      justifyContent: 'center',
      alignItems: 'center'
    }]
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny",
    status: "control"
  })), []);
  const PlusIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilImport.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const accessoryLeft = (0, _react.useCallback)(props => loading ? /*#__PURE__*/_react.default.createElement(LoadingIndicator, props) : /*#__PURE__*/_react.default.createElement(PlusIcon, props), [loading]);
  const seedPhraseRight = (0, _react.useCallback)(
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
  const onClipboard = (0, _react.useCallback)(async () => {
    _reactNative.Keyboard.dismiss();
    const code = await _clipboard.default.getString();
    if ((0, _ethers.isValidPrivateKey)(code) || (0, _ethers.isValidMnemonic)(code)) {
      setSeedPhrase(code);
    } else {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('import_from_seed.invalid_seed_phrase'),
        text2: t('import_from_seed.seed_phrase_requirements')
      });
    }
  }, []);
  const onItem = (0, _react.useCallback)(code => {
    if ((0, _ethers.isValidPrivateKey)(code) || (0, _ethers.isValidMnemonic)(code)) {
      setSeedPhrase(code);
    } else {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('import_from_seed.invalid_qr_code_title'),
        text2: t('import_from_seed.invalid_qr_code_message')
      });
    }
  }, []);
  const onImport = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if ((0, _ethers.isValidPrivateKey)(seedPhrase) || (0, _ethers.isValidMnemonic)(seedPhrase)) {
          await newWallet(undefined, seedPhrase, true, path);
          navigation.goBack();
        }
      } catch (e) {} finally {
        setLoading(false);
      }
    }, 500);
  }, [seedPhrase, newWallet]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    enableAutomaticScroll: true,
    extraScrollHeight: 50
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: seedPhrase,
    label: t('import_from_seed.seed_phrase'),
    placeholder: t('import_from_seed.seed_phrase_placeholder'),
    status: seedPhraseErr ? 'danger' : 'basic',
    accessoryLeft: keyIcon,
    accessoryRight: seedPhraseRight,
    onChangeText: setSeedPhrase,
    autoComplete: 'off',
    autoCorrect: false,
    multiline: true,
    caption: t('import_from_seed.seed_phrase_desc')
  }), isMnemonic && /*#__PURE__*/_react.default.createElement(_create.AdvancedOptions, {
    path: path,
    setPath: setPath
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: insets.bottom + 15,
      marginTop: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onImport,
    accessoryLeft: accessoryLeft,
    disabled: loading
  }, t('import_from_seed.import_button'))))));
});