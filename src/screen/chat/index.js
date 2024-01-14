"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _native = require("@react-navigation/native");
var _reactNative = require("react-native");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
var _useChat = require("../../hooks/chat/useChat");
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _uilPlusCircle = _interopRequireDefault(require("../../assets/icons/uil-plus-circle"));
var _uilCommentSearch = _interopRequireDefault(require("../../assets/icons/uil-comment-search"));
var _uilComments = _interopRequireDefault(require("../../assets/icons/uil-comments"));
var _reactI18next = require("react-i18next");
var _uilCommentsAlt = _interopRequireDefault(require("../../assets/icons/uil-comments-alt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ChatScreen = exports.ChatScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      //title: chain.name,
      headerLeft,
      headerRight
    });
  }, []);
  const headerLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(ConnectingAddressAvatar, null), /*#__PURE__*/_react.default.createElement(ConnectingDot, null)), []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(HeaderRight, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(EmptyComponent, null));
});
const HeaderRight = /*#__PURE__*/(0, _react.memo)(() => {
  const [visible, setVisible] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: () => setVisible(true)
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilPlusCircle.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), []);
  const NewChatView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('chat.start_conversation')
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_uilCommentSearch.default, {
      size: style?.height,
      color: style?.tintColor
    }))
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('chat.start_group')
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_uilCommentsAlt.default, {
      size: style?.height,
      color: style?.tintColor
    }))
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('chat.group')
    // @ts-ignore
    ,
    accessoryRight: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_uilComments.default, {
      size: style?.height,
      color: style?.tintColor
    }))
  })), []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(NewChatView, null));
});
const EmptyComponent = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      marginTop: width / 2
    }
  }, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: require('../../assets/lottie/nonotification.json'),
    autoPlay: true,
    loop: true,
    style: {
      width: width / 2,
      height: width / 2
    },
    resizeMode: "cover"
  }));
});
const ConnectingDot = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    connectSuccess,
    login
  } = (0, _useChat.useChat)();
  const theme = (0, _components.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_Entypo.default, {
    size: 32,
    color: login && connectSuccess ? theme['color-success-500'] : theme['color-warning-500'],
    name: "dot-single"
  });
});
const ConnectingAddressAvatar = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    chatAddress
  } = (0, _useChat.useChat)();
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      size: style?.height,
      address: chatAddress
    })
  });
});