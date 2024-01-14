"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletCreateScreen = exports.AdvancedOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactNativeKeyboardAwareScrollView = require("react-native-keyboard-aware-scroll-view");
var _reactI18next = require("react-i18next");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _ethers = require("../../lib/ethers");
var _uilLock = _interopRequireDefault(require("../../assets/icons/uil-lock"));
var _uilPlusCircle = _interopRequireDefault(require("../../assets/icons/uil-plus-circle"));
var _useNewWallet = require("../../hooks/wallet/useNewWallet");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _wallet = require("../../config/wallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WalletCreateScreen = exports.WalletCreateScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [seedPhrase, setSeedPhrase] = (0, _react.useState)('');
  const [newPassword, setNewPassword] = (0, _react.useState)('');
  const [confirmPassword, setConfirmPassword] = (0, _react.useState)('');
  const [lang, setLang] = (0, _react.useState)('en');
  const [path, setPath] = (0, _react.useState)(_wallet.ETHEREUM_PATH);
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
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      (0, _react.startTransition)(() => {
        const mnemonic = (0, _ethers.createMnemonic)(32, lang);
        setSeedPhrase(mnemonic);
      });
    }, 500);
    return () => clearTimeout(id);
  }, [lang]);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (newPassword) {
        setNewPasswordErr(newPassword.length < 8);
      }
    });
  }, [newPassword]);
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
  }) => /*#__PURE__*/_react.default.createElement(_uilPlusCircle.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const lockIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilLock.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const accessoryLeft = (0, _react.useCallback)(props => loading ? /*#__PURE__*/_react.default.createElement(LoadingIndicator, props) : /*#__PURE__*/_react.default.createElement(PlusIcon, props),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [loading]);
  const onCreate = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (newPassword.length >= 8) {
          const password = (0, _ethers.createHash)(confirmPassword);
          if ((0, _ethers.createHash)(newPassword) === password) {
            await newWallet(newPassword, seedPhrase, false, path);
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
  }, [newPassword, confirmPassword, newWallet]);
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
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginVertical: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label'
  }, t('start_exploring_now.subtitle'))), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: newPassword,
    label: t('start_exploring_now.password'),
    placeholder: t('start_exploring_now.password'),
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
    label: t('start_exploring_now.confirm_password'),
    placeholder: t('start_exploring_now.confirm_password'),
    status: confirmPasswordErr ? 'danger' : 'basic',
    onChangeText: setConfirmPassword,
    caption: caption
    // @ts-ignore
    ,
    accessoryLeft: lockIcon,
    style: {
      marginTop: 15
    },
    secureTextEntry: true,
    autoComplete: 'off',
    autoCorrect: false
  }), seedPhrase && /*#__PURE__*/_react.default.createElement(AdvancedOptions, {
    path: path,
    setPath: setPath,
    lang: lang,
    setLang: setLang
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
  }, t('start_exploring_now.i_understand')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onCreate,
    accessoryLeft: accessoryLeft,
    disabled: loading || !checked
  }, t('start_exploring_now.create_button'))))));
});
const AdvancedOptions = exports.AdvancedOptions = /*#__PURE__*/(0, _react.memo)(({
  path,
  setPath,
  lang,
  setLang
}) => {
  //const theme = useTheme();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [showHexData] = (0, _storage.useStorage)(_storage2.SHOW_HEX_DATA_KEY, false);
  const [details, setDetails] = (0, _react.useState)(showHexData);
  /*const AccessoryPath = useCallback(
      // @ts-ignore
      () => (
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity
            onPress={() => setPath(ETHEREUM_PATH)}
            style={{marginLeft: 8}}>
            <SvgEthereum
              height={15}
              width={15}
              fill={
                path === ETHEREUM_PATH
                  ? theme['color-primary-600']
                  : theme['color-basic-600']
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPath(TRON_PATH)}
            style={{marginLeft: 8}}>
            <SvgTron
              height={15}
              width={15}
              fill={
                path === TRON_PATH
                  ? theme['color-primary-600']
                  : theme['color-basic-600']
              }
            />
          </TouchableOpacity>
        </View>
      ),
      [theme, path],
    );*/
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    appearance: "ghost",
    onPress: () => setDetails(!details)
  }, details ? t('import_from_seed.hide_advanced_options') : t('import_from_seed.advanced_options'))), details && /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn,
    style: {
      borderRadius: 8,
      padding: 10
    }
  }, !!lang && !!setLang && /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label'
  }, t('start_exploring_now.mnemonic_Language')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'en',
    onChange: () => setLang('en')
  }, "English"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'zh_cn',
    onChange: () => setLang('zh_cn')
  }, "\u4E2D\u6587(\u7B80\u4F53)"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'zh_tw',
    onChange: () => setLang('zh_tw')
  }, "\u4E2D\u6587(\u7E41\u4F53)"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'ko',
    onChange: () => setLang('ko')
  }, "\uD55C\uAD6D\uC5B4"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'es',
    onChange: () => setLang('es')
  }, "Espa\xF1ol"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'fr',
    onChange: () => setLang('fr')
  }, "Fran\xE7ais"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'it',
    onChange: () => setLang('it')
  }, "Italiano"), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    style: {
      margin: 2
    },
    checked: lang === 'ja',
    onChange: () => setLang('ja')
  }, "\u65E5\u672C\u8BED"))), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: path,
    label: t('import_from_seed.derive_path'),
    placeholder: t('import_from_seed.derive_path'),
    status: 'basic',
    onChangeText: setPath,
    style: {
      marginTop: 15
    },
    autoComplete: 'off',
    autoCorrect: false,
    size: 'small'
  })));
});