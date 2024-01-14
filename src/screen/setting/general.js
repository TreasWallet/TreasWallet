"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _reactI18next = require("react-i18next");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _search = require("../../config/search");
var _i = require("../../config/i18");
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
var _DarkActionComponent = require("../../components/DarkActionComponent");
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _useDesign = require("../../hooks/theme/useDesign");
var _useI18n = require("../../hooks/theme/useI18n");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _flashList = require("@shopify/flash-list");
var _AssetsComponent = require("../../components/AssetsComponent");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _usePrimaryCurrency = require("../../hooks/rpc/usePrimaryCurrency");
var _useToken = require("../../hooks/wallet/useToken");
var _useRpc = require("../../hooks/rpc/useRpc");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 50;
const GeneralScreen = exports.GeneralScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      //title: chain.name,
      headerRight
      //  headerRight,
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_DarkActionComponent.DarkActionComponent, null), []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(ListView, null));
});
const ListView = /*#__PURE__*/(0, _react.memo)(() => {
  const [networks] = (0, _storage.useStorage)(`${_storage2.NETWORKS_KEY}`, []);
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const data = (0, _react.useMemo)(() => networks.filter(v => v.swaps.length > 0), [networks]);
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(NetItemView, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    data: data,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    contentContainerStyle: {
      backgroundColor: theme['background-basic-color-2'],
      paddingBottom: insets.bottom + 15
    },
    estimatedItemSize: ITEM_HEIGHT,
    keyExtractor: item => item.id,
    ListHeaderComponent: /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginBottom: 15
      }
    }, /*#__PURE__*/_react.default.createElement(PrimaryCurrencyView, null), /*#__PURE__*/_react.default.createElement(AccountIdenticonView, null), /*#__PURE__*/_react.default.createElement(ThemenView, null), /*#__PURE__*/_react.default.createElement(SearchEngineView, null), /*#__PURE__*/_react.default.createElement(LocaleView, null))
  });
});
const NetItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const [primarycurrency] = (0, _storage.useStorage)(_storage2.PRIMARY_CURRENCY_KEY, false);
  const {
    primaryCurrency,
    setPrimaryCurrency
  } = (0, _usePrimaryCurrency.usePrimaryCurrency)({
    node: item
  });
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node: item
  });
  const {
    info
  } = (0, _useToken.useToken)({
    token: primaryCurrency,
    rpc
  });
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: item,
    size: style.width
  })), [item]);
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
  }))
  /*<View style={{flexDirection: 'row', alignItems: 'center'}}>
    {!primarycurrency && <PriceComponent node={item} asset={item} />}
    <UilAngleRightB size={style?.height} color={style?.tintColor} />
  </View>*/, [item]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_components.Text, props, `${t('general.primary_currency_title', {
    symbol: primarycurrency ? item.symbol : info ? info.symbol : t('general.primary_currency_text_second')
  })}`), [primarycurrency, item, info]);
  const toNodeScreen = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('PrimaryCurrencyScreen', {
      item
    });
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toNodeScreen,
    title: item.name,
    description: description,
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      marginHorizontal: 10,
      height: ITEM_HEIGHT
    }
  }));
});
const PrimaryCurrencyView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [primarycurrency, setPrimarycurrency] = (0, _storage.useStorage)(_storage2.PRIMARY_CURRENCY_KEY, false);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, primarycurrency ? /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default
  // @ts-ignore
  , {
    size: props.style?.height
    // @ts-ignore
    ,
    color: props.style?.tintColor,
    name: "ethereum"
  }) : /*#__PURE__*/_react.default.createElement(_MaterialIcons.default
  // @ts-ignore
  , {
    size: props.style?.height
    // @ts-ignore
    ,
    color: props.style?.tintColor,
    name: "generating-tokens"
  })), [primarycurrency]);
  const onPrimarycurrency = (0, _react.useCallback)(() => setPrimarycurrency(prevValue => !prevValue), []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: onPrimarycurrency,
    title: t('general.primary_currency_title', {
      symbol: primarycurrency ? t('general.primary_currency_text_first') : t('general.primary_currency_text_second')
    }),
    description: t('general.primary_currency_desc'),
    accessoryRight: accessoryRight
  });
});
const ThemenView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const {
    setDesign,
    design
  } = (0, _useDesign.useDesign)();
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => setVisible(true),
    title: t('general.theme_title', {
      theme: design.substring(0, 1).toUpperCase() + design.substring(1)
    }),
    description: t('general.theme_description'),
    accessoryRight: accessoryRight
  }), [design]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_Entypo.default
  // @ts-ignore
  , {
    size: props.style?.height
    // @ts-ignore
    ,
    color: props.style?.tintColor,
    name: "colours"
  })), []);
  const toggleDesign = (0, _react.useCallback)(name => {
    setVisible(false);
    setDesign(name);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('theme.eva'),
    onPress: () => toggleDesign('eva'),
    accessoryRight: accessoryRight
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('theme.material'),
    onPress: () => toggleDesign('material'),
    accessoryRight: accessoryRight
  }));
});
const AccountIdenticonView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const [accountIdenticonBlockies, setAccountIdenticonBlockies] = (0, _storage.useStorage)(_storage2.ACCOUNT_IDENTICON_BLOCKIES_KEY, true);
  const toggleAccountIdenticon = (0, _react.useCallback)(blockies => {
    setVisible(false);
    setAccountIdenticonBlockies(blockies);
  }, []);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatarID
  // @ts-ignore
  , {
    size: props.style.width,
    blockies: accountIdenticonBlockies
  })), [accountIdenticonBlockies]);
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => setVisible(true),
    title: t('general.accounts_identicon_title'),
    description: t('general.accounts_identicon_desc'),
    accessoryRight: accessoryRight
  }), [accountIdenticonBlockies]);
  const accessoryRight2 = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatarID
  // @ts-ignore
  , {
    size: props.style.width,
    blockies: true
  })), []);
  const accessoryRight3 = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatarID
  // @ts-ignore
  , {
    size: props.style.width
  })), []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => toggleAccountIdenticon(true),
    title: t('general.blockies'),
    accessoryRight: accessoryRight2
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => toggleAccountIdenticon(false),
    title: t('general.jazzicons'),
    accessoryRight: accessoryRight3
  }));
});
const LocaleView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    setLang,
    lang
  } = (0, _useI18n.useI18n)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const description = (0, _react.useMemo)(() => _i.locales.find(v => v.key === lang)?.name || '', [lang]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_Fontisto.default
  // @ts-ignore
  , {
    size: props.style?.height
    // @ts-ignore
    ,
    color: props.style?.tintColor,
    name: "world"
  })), []);
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => setVisible(true),
    title: t('general.current_language'),
    description: description,
    accessoryRight: accessoryRight
  }), [description]);
  const toggleLang = (0, _react.useCallback)(key => {
    (0, _react.startTransition)(() => {
      setVisible(false);
      setLang(key);
    });
  }, []);
  const LangView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _i.locales.map(v => /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => toggleLang(v.key),
    key: v.key,
    title: v.name,
    accessoryRight: accessoryRight
  }))), []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(LangView, null));
});
const SearchEngineView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [searchEngine, setSearchEngine] = (0, _storage.useStorage)(_storage2.SEARCH_ENGINE_KEY, _search.SEARCH_ENGINES_DEFAULT);
  const [visible, setVisible] = (0, _react.useState)(false);
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: () => setVisible(true),
    title: t('general.search_engine'),
    description: t('general.engine_desc'),
    accessoryRight: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_Fontisto.default
    // @ts-ignore
    , {
      size: props.style?.height
      // @ts-ignore
      ,
      color: props.style?.tintColor,
      name: searchEngine.toLowerCase()
    }))
  }), [searchEngine]);
  const toggleEngine = (0, _react.useCallback)(name => {
    setVisible(false);
    setSearchEngine(name);
  }, [searchEngine]);
  const EngineView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _search.SEARCH_ENGINES.map(v => /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => toggleEngine(v.name),
    key: v.name,
    title: v.name,
    accessoryRight: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_Fontisto.default
    // @ts-ignore
    , {
      size: props.style?.height
      // @ts-ignore
      ,
      color: props.style?.tintColor,
      name: v.name.toLowerCase()
    }))
  }))), []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(EngineView, null));
});