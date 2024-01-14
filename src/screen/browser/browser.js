"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _native = require("@react-navigation/native");
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _reactNative = require("react-native");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _components = require("@ui-kitten/components");
var _reactI18next = require("react-i18next");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _flashList = require("@shopify/flash-list");
var _useBrowser = require("../../hooks/browser/useBrowser");
var _urlParse = _interopRequireDefault(require("url-parse"));
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _AssetsComponent = require("../../components/AssetsComponent");
var _ethers = require("../../lib/ethers");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _search = require("../../config/search");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // @ts-ignore
const ITEM_HEIGHT = 60;
const BrowserScreen = exports.BrowserScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.ScanAction, {
    onItem: onItem
  }), []);
  const onDismiss = (0, _react.useCallback)(() => {
    _reactNative.Keyboard.dismiss();
  }, []);
  const onItem = (0, _react.useCallback)(value => {
    if (value) {
      if ((0, _ethers.isValidPrivateKey)(value) || (0, _ethers.isValidMnemonic)(value)) {
        _reactNativeToastMessage.default.show({
          type: 'error',
          text1: t('browser.error'),
          text2: t('browser.private_key_detected')
        });
      } else {
        // @ts-ignore
        navigation.navigate('WebViewScreen', {
          value
        });
      }
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onDismiss
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(BrowserHistory, null)));
});
const BrowserHistory = /*#__PURE__*/(0, _react.memo)(() => {
  const [history] = (0, _storage.useStorage)(_storage2.HISTORY_LIST_KEY, []);
  const listHeaderComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1,
      paddingHorizontal: 15,
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(HeaderView, null), /*#__PURE__*/_react.default.createElement(BrowserInput, null)), []);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(RenderItemView, {
    item: item
  }), []);
  const listEmptyComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(EmptyComponent, null), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: history,
    renderItem: renderItem,
    estimatedItemSize: ITEM_HEIGHT,
    ListHeaderComponent: listHeaderComponent,
    ItemSeparatorComponent: itemSeparatorComponent,
    ListEmptyComponent: listEmptyComponent,
    contentContainerStyle: {
      paddingBottom: 10
    },
    keyExtractor: (item, _index) => `${item.uri}`,
    disableAutoLayout: true
  });
});
const EmptyComponent = () => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
    source: require('../../assets/lottie/folderempty.json'),
    autoPlay: true,
    loop: true,
    style: {
      width: width / 2,
      height: width / 2
    },
    resizeMode: "cover"
  }));
};
const RenderItemView = ({
  item
}) => {
  const navigation = (0, _native.useNavigation)();
  const info = (0, _react.useMemo)(() => (0, _urlParse.default)(item.uri), [item.uri]);
  const host = (0, _react.useMemo)(() => (0, _useBrowser.extractHostname)(info.hostname), [info.hostname]);
  const toWebView = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('WebViewScreen', {
      value: item.uri
    });
  }, [item.uri]);
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
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.FaviconViewComponent, {
    uri: `${info.protocol}//${info.hostname}/favicon.ico`,
    size: style?.width,
    name: host
  })), [info.hostname, host]);
  const title = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_components.Text, _extends({}, props, {
    numberOfLines: 1
  }), item.title), [item.title]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_components.Text, _extends({}, props, {
    numberOfLines: 1
  }), info.hostname), [info.hostname]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: title,
    description: description,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    onPress: toWebView,
    style: {
      borderRadius: 8,
      height: ITEM_HEIGHT,
      marginHorizontal: 15
    }
  }));
};
const BrowserInput = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [value, setValue] = (0, _react.useState)('');
  const [searchEngine] = (0, _storage.useStorage)(_storage2.SEARCH_ENGINE_KEY, _search.SEARCH_ENGINES_DEFAULT);
  const onSubmit = (0, _react.useCallback)(() => {
    if (value) {
      if ((0, _ethers.isValidPrivateKey)(value) || (0, _ethers.isValidMnemonic)(value)) {
        _reactNativeToastMessage.default.show({
          type: 'error',
          text1: t('browser.error'),
          text2: t('browser.private_key_detected')
        });
      } else {
        // @ts-ignore
        navigation.navigate('WebViewScreen', {
          value
        });
      }
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    style: {
      borderRadius: 10
    },
    size: "small",
    placeholder: t('browser.search'),
    value: value,
    onChangeText: setValue,
    autoComplete: 'off',
    autoCorrect: false,
    keyboardType: 'url',
    returnKeyType: 'go',
    onSubmitEditing: onSubmit,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_Fontisto.default
    // @ts-ignore
    , {
      size: props.style?.height / 1.5
      // @ts-ignore
      ,
      color: props.style?.tintColor,
      name: searchEngine.toLowerCase()
    })
  }));
});
const HeaderView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const theme = (0, _components.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      //backgroundColor: theme['background-basic-color-3'],
      borderRadius: 15,
      marginVertical: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, null, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require('../../assets/ad/dapp.jpeg'),
    style: {
      width: width - 30,
      height: width / 2.5,
      borderRadius: 15
    },
    imageStyle: {
      borderRadius: 15
    },
    resizeMode: "cover"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme['color-control-transparent-disabled'],
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2.5,
      width: 30,
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    status: "control",
    category: "label"
  }, "AD"))))));
});