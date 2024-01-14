"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomeScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _native = require("@react-navigation/native");
var _DarkActionComponent = require("../../components/DarkActionComponent");
var _LangDesignMenuActionComponent = require("../../components/LangDesignMenuActionComponent");
var _reactNativeOnboardingSwiper = _interopRequireDefault(require("react-native-onboarding-swiper"));
var _reactNative = require("react-native");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _reactI18next = require("react-i18next");
var _StatusBarComponent = require("../../components/StatusBarComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WelcomeScreen = exports.WelcomeScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t,
    i18n
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
  const navigation = (0, _native.useNavigation)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      //title: chain.name,
      headerLeft,
      headerRight
    });
  }, []);
  const headerLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_DarkActionComponent.DarkActionComponent, null), []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_LangDesignMenuActionComponent.LangDesignMenuAction, null), []);
  const pages = (0, _react.useMemo)(() => [{
    backgroundColor: theme['background-basic-color-1'],
    image: /*#__PURE__*/_react.default.createElement(ImageItem, {
      source: require('../../assets/lottie/crypto.json')
    }),
    title: /*#__PURE__*/_react.default.createElement(TitleItem, null, t('onboarding_carousel.title1')),
    subtitle: /*#__PURE__*/_react.default.createElement(SubtitleItem, null, t('onboarding_carousel.subtitle1'))
  }, {
    backgroundColor: theme['background-basic-color-1'],
    image: /*#__PURE__*/_react.default.createElement(ImageItem, {
      source: require('../../assets/lottie/nft.json')
    }),
    title: /*#__PURE__*/_react.default.createElement(TitleItem, null, t('onboarding_carousel.title2')),
    subtitle: /*#__PURE__*/_react.default.createElement(SubtitleItem, null, t('onboarding_carousel.subtitle2'))
  }, {
    backgroundColor: theme['background-basic-color-1'],
    image: /*#__PURE__*/_react.default.createElement(ImageItem, {
      source: require('../../assets/lottie/exchange.json')
    }),
    title: /*#__PURE__*/_react.default.createElement(TitleItem, null, t('onboarding_carousel.title3')),
    subtitle: /*#__PURE__*/_react.default.createElement(SubtitleItem, null, t('onboarding_carousel.subtitle3'))
  }],
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [theme, i18n.language]);
  const onDone = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('SetupScreen');
  }, []);
  const doneButtonComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Button, {
    appearance: 'ghost',
    style: {
      marginRight: 15
    },
    onPress: onDone
  }, t('onboarding_carousel.get_started')),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [i18n.language]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeOnboardingSwiper.default, {
    skipLabel: t('onboarding_carousel.skip'),
    nextLabel: t('onboarding_carousel.next'),
    pages: pages,
    onDone: onDone,
    onSkip: onDone,
    bottomBarHighlight: false,
    containerStyles: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      paddingBottom: width / 2
    },
    DoneButtonComponent: doneButtonComponent
  })));
});
const ImageItem = /*#__PURE__*/(0, _react.memo)(({
  source
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  return /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: source,
    autoPlay: true,
    loop: true,
    style: {
      width: width / 1.5,
      height: width / 1.5
    },
    resizeMode: "cover"
  });
});
const TitleItem = /*#__PURE__*/(0, _react.memo)(({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6",
    appearance: "basic",
    style: {
      marginHorizontal: 15
    }
  }, children);
});
const SubtitleItem = /*#__PURE__*/(0, _react.memo)(({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "p2",
    appearance: "hint",
    style: {
      marginHorizontal: 15,
      marginTop: 8
    }
  }, children);
});