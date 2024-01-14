"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactI18next = require("react-i18next");
var _native = require("@react-navigation/native");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _uilSetting = _interopRequireDefault(require("../../assets/icons/uil-setting"));
var _uilSlidersVAlt = _interopRequireDefault(require("../../assets/icons/uil-sliders-v-alt"));
var _uilBookReader = _interopRequireDefault(require("../../assets/icons/uil-book-reader"));
var _uilServerNetworkAlt = _interopRequireDefault(require("../../assets/icons/uil-server-network-alt"));
var _uilShieldCheck = _interopRequireDefault(require("../../assets/icons/uil-shield-check"));
var _uilInfoCircle = _interopRequireDefault(require("../../assets/icons/uil-info-circle"));
var _uilCommentShield = _interopRequireDefault(require("../../assets/icons/uil-comment-shield"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SettingScreen = exports.SettingScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
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
  const toScreen = (0, _react.useCallback)(name => {
    // @ts-ignore
    navigation.navigate(name);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.general_title'),
    description: t('setting.general_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilSetting.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('GeneralScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.advanced_title'),
    description: t('setting.advanced_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilSlidersVAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('AdvancedScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.contacts_title'),
    description: t('setting.contacts_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilBookReader.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('ContactsScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.chat_title'),
    description: t('setting.chat_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilCommentShield.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('ChatSettingScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.security_title'),
    description: t('setting.security_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilShieldCheck.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('SecurityScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.networks_title'),
    description: t('setting.networks_desc')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilServerNetworkAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('NetworksScreen')
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('setting.info_title')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        ...style,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_uilInfoCircle.default, {
      size: style?.height,
      color: style?.tintColor
    })),
    accessoryRight: accessoryRight,
    onPress: () => toScreen('AboutScreen')
  }))));
});