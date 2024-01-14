"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactI18next = require("react-i18next");
var _reactNative = require("react-native");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _native = require("@react-navigation/native");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SetupScreen = exports.SetupScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const onImportFromSeed = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('WalletImportFromSeedScreen');
  }, []);
  const onCreate = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('WalletCreateScreen');
  }, []);
  (0, _react.useEffect)(() => {}, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, {
    contentContainerStyle: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 's1'
  }, t('onboarding.import'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: require('../../assets/lottie/cryptocraze.json'),
    autoPlay: true,
    loop: true,
    style: {
      width: width / 1.5,
      height: width / 1.5
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginHorizontal: 32,
      marginBottom: insets.bottom + 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "large",
    status: "basic",
    onPress: onImportFromSeed
  }, t('onboarding.import_from_seed_button')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "large",
    style: {
      marginTop: 15
    },
    onPress: onCreate
  }, t('onboarding.start_exploring_now')))))));
});