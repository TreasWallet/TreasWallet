"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _native = require("@react-navigation/native");
var _reactI18next = require("react-i18next");
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _AuthenticationComponent = require("../../components/AuthenticationComponent");
var _ethers = require("../../lib/ethers");
var _reactNative = require("react-native");
var _uilLock = _interopRequireDefault(require("../../assets/icons/uil-lock"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeKeyboardAwareScrollView = require("react-native-keyboard-aware-scroll-view");
var _sinfo = require("../../lib/sinfo");
var _storage = require("../../config/storage");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _uilCog = _interopRequireDefault(require("../../assets/icons/uil-cog"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ResetPasswordScreen = exports.ResetPasswordScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [wallet, setWallet] = (0, _react.useState)();
  const [newPassword, setNewPassword] = (0, _react.useState)('');
  const [confirmPassword, setConfirmPassword] = (0, _react.useState)('');
  const [newPasswordErr, setNewPasswordErr] = (0, _react.useState)(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = (0, _react.useState)(false);
  const [checked, setChecked] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const onCancel = (0, _react.useCallback)(() => {
    navigation.goBack();
  }, []);
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
  const lockIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilLock.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
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
  const ResetIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilCog.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const accessoryLeft = (0, _react.useCallback)(props => loading ? /*#__PURE__*/_react.default.createElement(LoadingIndicator, props) : /*#__PURE__*/_react.default.createElement(ResetIcon, props), [loading]);
  const onCreate = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (newPassword.length >= 8) {
          const password = (0, _ethers.createHash)(confirmPassword);
          if ((0, _ethers.createHash)(newPassword) === password) {
            await (0, _sinfo.setItemSInfo)(_storage.PERSISTENCE_KEY, password);
            _reactNativeToastMessage.default.show({
              type: 'success',
              text1: t('reset_password.password_updated'),
              text2: t('reset_password.successfully_changed')
            });
            navigation.goBack();
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
  }, [newPassword, confirmPassword]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: setWallet
  }), wallet && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView, {
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
  }, t('reset_password.subtitle'))), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: newPassword,
    label: t('reset_password.password'),
    placeholder: t('reset_password.password'),
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
    label: t('reset_password.confirm_password'),
    placeholder: t('reset_password.confirm_password'),
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
  }, t('reset_password.i_understand')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onCreate,
    disabled: loading || !checked,
    accessoryLeft: accessoryLeft
  }, t('reset_password.reset_button')))))));
});