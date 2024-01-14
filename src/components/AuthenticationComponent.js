"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWalletEthers = require("../hooks/wallet/useWalletEthers");
var _reactNativeModalize = require("react-native-modalize");
var _components = require("@ui-kitten/components");
var _reactNative = require("react-native");
var _uilKeySkeletonAlt = _interopRequireDefault(require("../assets/icons/uil-key-skeleton-alt"));
var _reactI18next = require("react-i18next");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _uilCancel = _interopRequireDefault(require("../assets/icons/uil-cancel"));
var _uilAngleRightB = _interopRequireDefault(require("../assets/icons/uil-angle-right-b"));
var _LogoComponent = require("./LogoComponent");
var _BlockiesComponent = require("./BlockiesComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AuthenticationComponent = exports.AuthenticationComponent = /*#__PURE__*/(0, _react.memo)(({
  onCancel,
  onConfirm,
  address
}) => {
  const [password, setPassword] = (0, _react.useState)('');
  const {
    wallet,
    isPassword,
    address: addressETH
  } = (0, _useWalletEthers.useWalletEthers)({
    password,
    address
  });
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  (0, _react.useEffect)(() => {
    open();
    return () => close();
  }, []);
  const canConfirm = (0, _react.useCallback)(() => {
    wallet && onConfirm(wallet);
    close();
    setPassword('');
  }, [wallet]);
  const canCancel = (0, _react.useCallback)(() => {
    setPassword('');
    close();
    onCancel();
  }, []);
  const keyIcon = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilKeySkeletonAlt.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  return /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    adjustToContentHeight: true,
    modalStyle: {
      backgroundColor: theme['background-basic-color-1']
    },
    closeOnOverlayTap: false,
    tapGestureEnabled: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15,
      marginBottom: insets.bottom + 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 15
    }
  }, addressETH ? /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    size: 50,
    address: addressETH
  }) : /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgLock, {
    fill: theme['color-warning-500'],
    width: 50,
    height: 50
  })), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "p1"
  }, t('authentication.auth_prompt_title')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint"
  }, t('authentication.auth_prompt_desc')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint",
    style: {
      fontSize: 8
    }
  }, addressETH)), /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: password,
    label: t('reveal_credential.enter_password'),
    placeholder: t('reveal_credential.enter_password')
    // @ts-ignore
    ,
    accessoryLeft: keyIcon,
    onChangeText: setPassword,
    secureTextEntry: true,
    disabled: isPassword,
    autoComplete: 'off',
    autoCorrect: false
  }), /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: canCancel
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilCancel.default, {
      size: style?.height,
      color: style?.tintColor
    }),
    style: {
      marginVertical: 15
    }
  }, t('reveal_credential.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    disabled: !isPassword || !wallet,
    onPress: canConfirm // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }, t('reveal_credential.confirm'))));
});