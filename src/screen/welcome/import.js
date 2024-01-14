"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletImportFromSeedScreen = void 0;
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
var _uilLock = _interopRequireDefault(require("../../assets/icons/uil-lock"));
var _uilImport = _interopRequireDefault(require("../../assets/icons/uil-import"));
var _useNewWallet = require("../../hooks/wallet/useNewWallet");
var _create = require("./create");
var _wallet = require("../../config/wallet");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WalletImportFromSeedScreen = exports.WalletImportFromSeedScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [path, setPath] = (0, _react.useState)(_wallet.ETHEREUM_PATH);
  const [seedPhrase, setSeedPhrase] = (0, _react.useState)('');
  const [seedPhraseErr, setSeedPhraseErr] = (0, _react.useState)(false);
  const [newPassword, setNewPassword] = (0, _react.useState)('');
  const [confirmPassword, setConfirmPassword] = (0, _react.useState)('');
  const [newPasswordErr, setNewPasswordErr] = (0, _react.useState)(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [checked, setChecked] = (0, _react.useState)(false);
  const {
    newWallet
  } = (0, _useNewWallet.useNewWallet)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const isMnemonic = (0, _react.useMemo)(() => (0, _ethers.isValidMnemonic)(seedPhrase), [seedPhrase]);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (newPassword) {
        setNewPasswordErr(newPassword.length < 8);
      }
    });
  }, [newPassword]);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (seedPhrase) {
        setSeedPhraseErr(!((0, _ethers.isValidPrivateKey)(seedPhrase) || (0, _ethers.isValidMnemonic)(seedPhrase)));
      }
    });
  }, [seedPhrase]);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (confirmPassword) {
        const err = (0, _ethers.createHash)(newPassword) !== (0, _ethers.createHash)(confirmPassword);
        setConfirmPasswordErr(err);
      }
    });
  }, [confirmPassword, newPassword]);
  const caption = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, props, t('import_from_seed.password_length_error'))), []);
  const lockIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilLock.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const keyIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilKeySkeletonAlt.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const LoadingIndicator = (0, _react.useCallback)(props => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
        if (newPassword.length >= 8) {
          if ((0, _ethers.isValidPrivateKey)(seedPhrase) || (0, _ethers.isValidMnemonic)(seedPhrase)) {
            const password = (0, _ethers.createHash)(confirmPassword);
            if ((0, _ethers.createHash)(newPassword) === password) {
              await newWallet(newPassword, seedPhrase, true, path);
            } else {
              setSeedPhraseErr(true);
            }
          } else {
            setNewPasswordErr(true);
            setConfirmPasswordErr(true);
          }
        } else {
          setNewPasswordErr(true);
        }
      } catch (e) {} finally {
        setLoading(false);
      }
    }, 500);
  }, [newPassword, seedPhrase, confirmPassword, newWallet]);
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
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label'
  }, t('start_exploring_now.subtitle'))), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: newPassword,
    label: t('import_from_seed.new_password'),
    placeholder: t('import_from_seed.new_password'),
    status: newPasswordErr ? 'danger' : 'basic',
    onChangeText: setNewPassword
    // @ts-ignore
    ,
    accessoryLeft: lockIcon,
    style: {
      marginTop: 15
    },
    secureTextEntry: true,
    autoComplete: 'off',
    autoCorrect: false
  }), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: confirmPassword,
    label: t('import_from_seed.confirm_password'),
    placeholder: t('import_from_seed.confirm_password'),
    status: confirmPasswordErr ? 'danger' : 'basic'
    // @ts-ignore
    ,
    onChangeText: setConfirmPassword
    // @ts-ignore
    ,
    accessoryLeft: lockIcon,
    caption: caption,
    style: {
      marginTop: 15
    },
    secureTextEntry: true,
    autoComplete: 'off',
    autoCorrect: false
  }), isMnemonic && /*#__PURE__*/_react.default.createElement(_create.AdvancedOptions, {
    path: path,
    setPath: setPath
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: insets.bottom + 15,
      marginTop: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_components.CheckBox, {
    checked: checked,
    onChange: setChecked,
    style: {
      marginBottom: 32
    }
  }, t('import_from_seed.i_understand')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onImport,
    accessoryLeft: accessoryLeft,
    disabled: loading || !checked
  }, t('import_from_seed.import_button'))))));
});