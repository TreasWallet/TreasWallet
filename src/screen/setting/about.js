"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestFeatureView = exports.OpenSourceCodeView = exports.ContactSupportView = exports.AboutScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactI18next = require("react-i18next");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _native = require("@react-navigation/native");
var _LogoComponent = require("../../components/LogoComponent");
var _useVersion = require("../../hooks/app/useVersion");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _github = require("../../config/github");
var _useOpenURL = require("../../hooks/app/useOpenURL");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _uilCommentQuestion = _interopRequireDefault(require("../../assets/icons/uil-comment-question"));
var _uilGithub = _interopRequireDefault(require("../../assets/icons/uil-github"));
var _uilDirections = _interopRequireDefault(require("../../assets/icons/uil-directions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AboutScreen = exports.AboutScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [status, setStatus] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      setStatus(true);
    });
    return () => setStatus(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), status ? /*#__PURE__*/_react.default.createElement(AboutView, null) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "large"
  })));
});
const AboutView = () => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    readableVersion,
    website,
    canWebsite
  } = (0, _useVersion.useVersion)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.ShareAction, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgLogo, {
    width: width / 2.5,
    height: width / 2.5
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    appearance: "hint",
    style: {
      marginTop: 10
    }
  }, `${readableVersion}`), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.TouchableOpacity, {
    onPress: canWebsite
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    style: {
      marginTop: 15
    }
  }, website)), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "p1",
    style: {
      marginTop: 15,
      marginHorizontal: 15
    }
  }, t('setting.about_info1')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1",
    style: {
      marginTop: 5,
      marginHorizontal: 15
    }
  }, t('setting.about_info2'))), /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      marginHorizontal: 15,
      marginTop: 30,
      borderRadius: 15
    }
  }, /*#__PURE__*/_react.default.createElement(RequestFeatureView, null), /*#__PURE__*/_react.default.createElement(ContactSupportView, null), /*#__PURE__*/_react.default.createElement(OpenSourceCodeView, null)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: insets.bottom + 15
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.GithubAction, null)));
};
const RequestFeatureView = exports.RequestFeatureView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    canOpenURL
  } = (0, _useOpenURL.useOpenURL)();
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
  }, /*#__PURE__*/_react.default.createElement(_uilDirections.default, {
    size: style?.height,
    color: style?.tintColor
  })), []);
  const onPress = (0, _react.useCallback)(() => {
    canOpenURL(`${_github.GITHUB_ISSUES_URL}`);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.request_feature'),
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    onPress: onPress,
    style: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    }
  });
});
const ContactSupportView = exports.ContactSupportView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    canOpenURL
  } = (0, _useOpenURL.useOpenURL)();
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
  }, /*#__PURE__*/_react.default.createElement(_uilCommentQuestion.default, {
    size: style?.height,
    color: style?.tintColor
  })), []);
  const onPress = (0, _react.useCallback)(() => {
    canOpenURL(`${_github.GITHUB_URL}`);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.contact_support'),
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    onPress: onPress
  });
});
const OpenSourceCodeView = exports.OpenSourceCodeView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    canOpenURL
  } = (0, _useOpenURL.useOpenURL)();
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
  }, /*#__PURE__*/_react.default.createElement(_uilGithub.default, {
    size: style?.height,
    color: style?.tintColor
  })), []);
  const onPress = (0, _react.useCallback)(() => {
    canOpenURL(`${_github.GITHUB_SOURCE_URL}`);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.open_source_code'),
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    onPress: onPress,
    style: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }
  });
});