"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderHeader = exports.MenuView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNative = require("react-native");
var _uilTimesCircle = _interopRequireDefault(require("../../../assets/icons/uil-times-circle"));
var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));
var _useWallet = require("../../../hooks/wallet/useWallet");
var _reactI18next = require("react-i18next");
var _useNetworks = require("../../../hooks/rpc/useNetworks");
var _useShare = require("../../../hooks/app/useShare");
var _reactNativeModalize = require("react-native-modalize");
var _uilEllipsisH = _interopRequireDefault(require("../../../assets/icons/uil-ellipsis-h"));
var _uilRefresh = _interopRequireDefault(require("../../../assets/icons/uil-refresh"));
var _uilShareAlt = _interopRequireDefault(require("../../../assets/icons/uil-share-alt"));
var _uilFavorite = _interopRequireDefault(require("../../../assets/icons/uil-favorite"));
var _AssetsComponent = require("../../../components/AssetsComponent");
var _ethers = require("../../../lib/ethers");
var _reactNativePortalize = require("react-native-portalize");
var _NetComponent = require("../../../components/NetComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RenderHeader = exports.RenderHeader = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    handleClose,
    url,
    progress,
    host,
    title
  } = (0, _useWebView.useWebView)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const secured = (0, _react.useMemo)(() => url.startsWith('https'), [url]);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(MenuView, null), []);
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const accessoryLeft = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: handleClose
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilTimesCircle.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), []);
  const titleView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: width - 150
      //backgroundColor: 'red',
    }
  }, host && /*#__PURE__*/_react.default.createElement(_FontAwesome.default, {
    size: 9,
    color: secured ? theme['color-success-600'] : theme['color-basic-600'],
    name: "expeditedssl"
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    style: [{
      marginLeft: 4,
      fontSize: 13,
      fontWeight: 'bold'
    }, {
      color: secured ? theme['color-success-600'] : theme['color-basic-600']
    }],
    numberOfLines: 1
  }, host)), [host, secured, theme, width]);
  const subtitle = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: width - 150,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, _extends({}, props, {
    style: {
      fontSize: 10
    },
    numberOfLines: 1
  }), title)), [title, width]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    alignment: "center",
    title: titleView,
    subtitle: subtitle,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      marginTop: insets.top
    }
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null), progress < 1 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_components.ProgressBar, {
    progress: progress
    // size="large"
    ,
    style: {
      borderRadius: 0
    }
  })));
});
const MenuView = exports.MenuView = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const {
    address,
    node
  } = (0, _useWallet.useWallet)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    onReload,
    url,
    title
  } = (0, _useWebView.useWebView)();
  const {
    networks
  } = (0, _useNetworks.useNetworks)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    onShare
  } = (0, _useShare.useShare)();
  const {
    height
  } = (0, _reactNative.useWindowDimensions)();
  const {
    ref,
    open
  } = (0, _reactNativeModalize.useModalize)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const modalHeight = (0, _react.useMemo)(() => height - insets.top - 80, [height, insets.top]);
  const renderToggleButton = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: () => setVisible(true)
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilEllipsisH.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), []);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(_NetComponent.NetItemView, {
    item: item
  }), []);
  const addToFavorites = (0, _react.useCallback)(url => {}, []);
  const onBackdropPress = (0, _react.useCallback)(() => setVisible(false), []);
  const BrowserItem = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => {
      setVisible(false);
      onReload();
    },
    title: t('browser.reload')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilRefresh.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => {
      setVisible(false);
      onShare(url, title, title);
    },
    title: t('browser.share')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilShareAlt.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => {
      setVisible(false);
      addToFavorites(url);
    },
    title: t('browser.add_to_favorites')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilFavorite.default, {
      size: style?.height,
      color: style?.tintColor
    })
  })), [url, title]);
  const NetworkItem = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => {
      setVisible(false);
      open();
    },
    title: t('browser.switch_network'),
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      item: node
      // @ts-ignore
      ,
      size: props?.style.height
    }))
  })), [node]);
  const HeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.TopNavigation, {
    title: t('browser.switch_network'),
    subtitle: (0, _ethers.strHide)(address),
    alignment: "center",
    style: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    accessoryLeft: () => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
    // @ts-ignore
    , {
      icon: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
        item: node
        // @ts-ignore
        ,
        size: props.style.width
      }))
    })
  }), /*#__PURE__*/_react.default.createElement(_components.Divider, null)), [node]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: renderToggleButton,
    visible: visible,
    onBackdropPress: onBackdropPress,
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(BrowserItem, null), /*#__PURE__*/_react.default.createElement(NetworkItem, null)), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
    snapPoint: modalHeight / 1.5,
    modalHeight: modalHeight,
    HeaderComponent: /*#__PURE__*/_react.default.createElement(HeaderComponent, null),
    modalStyle: {
      backgroundColor: theme['background-basic-color-2']
    },
    flatListProps: {
      data: networks,
      renderItem: renderItem,
      keyExtractor: item => item,
      showsVerticalScrollIndicator: false,
      ItemSeparatorComponent: () => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          height: 5
        }
      }),
      contentContainerStyle: {
        backgroundColor: theme['background-basic-color-2'],
        // paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom: insets.bottom + 15
      }
    }
  })));
});